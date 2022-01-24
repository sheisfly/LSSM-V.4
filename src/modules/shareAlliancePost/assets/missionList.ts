import {
    addHoursToNow,
    createEditBtn,
    createIcon,
    dateToTime,
    getCityFromAddress,
    getDropdownClickHandler,
    getTimeReplacers,
    removeZipFromCity,
    sendReply,
    shareMission,
} from './util';

import { ButtonGroupCallback } from '../../extendedCallList/assets/utils/buttonGroup';
import { Message } from '../main';
import { Mission } from 'typings/Mission';

const createLi = <I extends 'comment' | 'comment-slash'>(
    content: string,
    icon?: I,
    editBtnClass = ''
) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.style.setProperty('margin', '0');
    a.style.setProperty('cursor', 'pointer');
    a.textContent = content;
    if (icon) {
        const iconEl = createIcon(icon, 'fas', 'fa-fw', 'pull-right');
        iconEl.style.setProperty('margin-right', '7px');
        a.append(iconEl, createEditBtn(editBtnClass));
    }
    li.append(a);
    return li;
};

export default (
    LSSM: Vue,
    btn: HTMLButtonElement,
    mission: ButtonGroupCallback,
    messages: Message[],
    missionType: string,
    missionSpecs: Mission,
    noMessage: string,
    authToken: string
) => {
    btn.classList.add('dropdown-toggle');
    btn.dataset.toggle = 'dropdown';

    const dropdownClass = LSSM.$store.getters.nodeAttribute('sap-ecl-dropdown');

    btn.parentElement?.querySelector(`.${dropdownClass}`)?.remove();

    const dropdown = document.createElement('ul');
    dropdown.classList.add('dropdown-menu', dropdownClass);

    const noMessageLi = createLi(noMessage);
    dropdown.append(noMessageLi);
    noMessageLi.addEventListener('click', () => {
        btn.disabled = true;
        shareMission(LSSM, mission.id, true).then(() => btn.remove());
    });

    const separatorLi = document.createElement('li');
    separatorLi.classList.add('divider');
    dropdown.append(separatorLi);

    const missionName =
        missionSpecs?.name ??
        Array.from(
            mission.element.querySelector<HTMLAnchorElement>(
                `#mission_caption_${mission.id}`
            )?.childNodes ?? []
        )
            .find(n => n.nodeType === Node.TEXT_NODE && n.textContent?.trim())
            ?.textContent?.replace(/,$/, '')
            .trim() ??
        '';
    const address =
        mission.element
            .querySelector<HTMLSpanElement>(`#mission_address_${mission.id}`)
            ?.textContent?.trim() ?? '–';
    const city = getCityFromAddress(address);
    const cityWithoutZip = removeZipFromCity(city);

    const replacements: Record<string, string> = {
        credits: missionSpecs.average_credits?.toLocaleString() ?? '–',
        patients: (
            (mission.element.querySelector(
                '[id^="mission_patients_"] [id^="patient_"]'
            )
                ? mission.element.querySelectorAll('.patient_progress').length
                : mission.element
                      .querySelector<HTMLDivElement>(
                          '[id^="mission_patient_summary_"]'
                      )
                      ?.style.getPropertyValue('display') !== 'none'
                ? LSSM.$utils.getNumberFromText(
                      mission.element.querySelector(
                          '.mission_list_patient_icon + strong'
                      )?.textContent ?? '0'
                  )
                : 0) || '–'
        ).toLocaleString(),
        remaining:
            mission.element
                .querySelector<HTMLDivElement>(`#mission_missing_${mission.id}`)
                ?.textContent?.trim()
                ?.replace(/^.*?:/, '')
                .trim() ?? '–',
        address,
        city,
        cityWithoutZip,
        beginAt: dateToTime(
            addHoursToNow(
                parseInt(
                    mission.element
                        .querySelector<HTMLDivElement>(
                            `#mission_overview_countdown_${mission.id}`
                        )
                        ?.getAttribute('timeleft') ?? '0'
                ) /
                    1000 /
                    60 /
                    60
            )
        ),
        name: missionName,
    };

    const modifyMessage = (raw: string) => {
        let message = raw;
        Object.entries(replacements).forEach(
            ([variable, value]) =>
                (message = message.replace(
                    new RegExp(`{{${variable}}}`, 'g'),
                    value
                ))
        );
        Object.entries(getTimeReplacers()).forEach(
            ([regex, replacer]) =>
                (message = message.replace(
                    new RegExp(`{{${regex.replace(/^\/|\/$/g, '')}}}`, 'g'),
                    replacer
                ))
        );
        return message;
    };

    const editBtnClass = LSSM.$store.getters.nodeAttribute(
        'sap-ecl-edit_msg-btn'
    );
    const inputGroupClass = LSSM.$store.getters.nodeAttribute(
        'sap-ecl-edit_msg-input_group'
    );

    messages.forEach(({ message: raw, name, postInChat }) => {
        const liElement = createLi(
            name,
            postInChat ? 'comment' : 'comment-slash',
            editBtnClass
        );
        const message = modifyMessage(raw);
        liElement.dataset.raw = raw;
        liElement.dataset.message = message;
        liElement.dataset.post = postInChat.toString();
        liElement.title = message;
        dropdown.append(liElement);
    });

    dropdown.addEventListener(
        'click',
        getDropdownClickHandler(
            inputGroupClass,
            editBtnClass,
            liElement => {
                btn.disabled = true;
                shareMission(LSSM, mission.id, true)
                    .then(() =>
                        sendReply(
                            LSSM,
                            mission.id,
                            liElement.dataset.message ?? '',
                            liElement.dataset.post === 'true',
                            authToken
                        )
                    )
                    .then(() => btn.remove());
            },
            true
        )
    );

    btn.after(dropdown);
};