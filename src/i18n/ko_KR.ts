const modules = {
    appstore: {
        save: '저장',
        reset: '초기화',
        noMapkit:
            'This module does not work with the map type "Mapkit" due to limitations of Mapkit!',
        dev: 'This module is currently still under development. Activating it can lead to incomplete and faulty functions!',
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You made changes in the AppStore that have not yet been saved. Reset them or save them to close the AppStore.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
    },
    settings: {
        name: '설정',
        save: '저장',
        discard: 'Discard changes',
        reset: '초기화',
        export: 'Export',
        import: 'Import',
        donate: 'donate voluntarily',
        appendableList: {
            unique: {
                title: 'double value',
                text: 'There must be no duplicate values in the **{title}** column. The value **{value}** already exists!',
                confirm: 'OK',
            },
        },
        resetWarning: {
            title: '설정 초기화',
            text: 'Do you really want to reset settings to their default values? This cannot be undone!',
            close: '취소',
            total: '모든 설정',
            module: '이 모듈만',
        },
        resetWarningSetting: {
            title: '설정 초기화',
            text: 'Do you really want to reset this one setting <b>{setting}</b> of the module <b>{module}</b> to its default value?',
            close: 'Cancel',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You have made changes in the settings that are not yet saved. Reset them, discard them or save them to close the settings.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
        locationSelect: {
            location: 'Select position',
            zoom: 'Select position and zoom',
            sync: 'use current position',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    vehicles: {
        0: {
            caption: '구조사다리',
            color: '#cc0000',
            coins: 25,
            credits: 5000,
            minPersonnel: 4,
            maxPersonnel: 6,
            wtank: 1500,
            ftank: 500,
            possibleBuildings: [0, 18],
        },
        1: {
            caption: '전술 대응 차량(TRV)',
            color: '#bb0000',
            coins: 25,
            credits: 5000,
            minPersonnel: 4,
            maxPersonnel: 6,
            wtank: 1500,
            ftank: 250,
            possibleBuildings: [0, 18],
        },
        2: {
            caption: '고가 사다리(TL)',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: '소방서를 3개 이상 건설한 후 필요합니다',
        },
        3: {
            caption: '지휘차',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [0, 18],
            special: '소방서를 6개 이상 건설한 후 필요합니다',
        },
        4: {
            caption: '구조공작차(MRU)',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 2,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: '소방서를 4개 이상 건설한 후 필요합니다',
        },
        5: {
            caption: '구급차',
            color: '#9c6d1c',
            coins: 25,
            credits: 5000,
            minPersonnel: 3,
            maxPersonnel: 3,
            possibleBuildings: [2, 20],
        },
        6: {
            caption: '물탱크차',
            color: '#990000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 2,
            maxPersonnel: 2,
            wtank: 6000,
            possibleBuildings: [0, 18],
            special: '소방서를 7개 이상 건설한 후 필요합니다',
        },
        7: {
            caption: '생화학 인명구조차',
            color: '#770000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 4,
            maxPersonnel: 4,
            possibleBuildings: [0, 18],
            schooling: {
                '소방서': {
                    유해물질: {
                        all: true,
                    },
                },
            },
            special: '소방서를 11개 이상 건설한 후 필요합니다',
        },
        8: {
            caption: '사고 대응차량(IRV)',
            color: '#488b18',
            coins: 25,
            credits: 5000,
            minPersonnel: 2,
            maxPersonnel: 4,
            possibleBuildings: [6, 19],
        },
        9: {
            caption: '구급 헬리콥터',
            color: '#552222',
            coins: 30,
            credits: 300_000,
            minPersonnel: 3,
            maxPersonnel: 5,
            possibleBuildings: [5],
        },
        10: {
            caption: '이동식 호흡 장비',
            color: '#aa0000',
            coins: 25,
            credits: 11_860,
            minPersonnel: 3,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: '소방서를 5개 이상 건설한 후 필요합니다',
        },
        11: {
            caption: '구조 공작차',
            color: '#e68319',
            coins: 25,
            credits: 19_000,
            minPersonnel: 9,
            maxPersonnel: 9,
            wtank: 3000,
            ftank: 500,			
            possibleBuildings: [0, 18],
        },
        12: {
            caption: '사다리차',
            color: '#791515',
            coins: 25,
            credits: 19_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [0, 18],
        },
        13: {
            caption: '긴급 이송차',
            color: '#92702e',
            coins: 20,
            credits: 4000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [2, 20],
        },
        14: {
            caption: '구급 지휘차,
            color: '#415a30',
            coins: 25,
            credits: 20_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            possibleBuildings: [2, 20],
            special:
					'구급대를 6개 이상 건설한 후 필요합니다',
        },
		15: {
            caption: '일반의',
            color: '#cc2222',
            coins: 20,
            credits: 4000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [2, 20],
            schooling: {
                '응급실': {
                    '중환자 치료 훈련': {
                        all: true,
                    },
                },
            },
			special:
					'특별 교육이 필요합니다 (중환자 치료 훈련)',
        }
        },,
        16: {
            caption: '긴급 이송용 오토바이',
            color: '#a4752e',
            coins: 25,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 1,
			schooling: {
                '응급실': {
                    '긴급 이송용 오토바이': {
                        all: true,
                    },
                },
            },	
            possibleBuildings: [2, 20],
            special:
					'특별 교육이 필요합니다 (긴급 이송용 오토바이)',
        },
        17: {
            caption: '기본 인명 지원(BLS) 구급차',
            color: '#f59f00',
            coins: 12,
            credits: 5000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [2, 20],
		},
        18: {
            caption: '기동형 지휘차량',
            color: '#dc1818',
            coins: 10,
            credits: 25_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [0, 18],
            schooling: {
                '소방서': {
                    이동 지휘: {
                        all: true,
                    },
                },
            },
            special:
				'소방서를 13개 이상 건설한 후 필요합니다,<br>특별 교육이 필요합니다 (이동 지휘)',
        },
        19: {
            caption: '포장치 운반차',
            color: '#70ca16',
            coins: 15,
            credits: 35_000,
            minPersonnel: 2,
            maxPersonnel: 3,
			ftank: 3000,
            possibleBuildings: [0, 18],	
        },
        20: {
            caption: '엔진 펌프 트레일러',
            color: '#b88f14',
            coins: 10,
            credits: 10_000,
            minPersonnel: 0,
            maxPersonnel: 0,
			wtank: 1000,
            possibleBuildings: [0, 18],
            special:
				'견인 차량 필요 (구조사다리, 전술 대응 차량(TRV), 물탱크차, 포장치 운반차)',
        },
        21: {
            caption: '무장 개입',
            color: '#cc2222',
            coins: 15,
            credits: 10_000,
            minPersonnel: 4,
            maxPersonnel: 6,
            possibleBuildings: [6, 19],
            schooling: {
                '경찰서': {
                    '특수화기전술조': {
                        all: true,
                    },
                },
            },
        },
        22: {
            caption: 'SWAT 자동차',
            color: '#68a512',
            coins: 10,
            credits: 7000,
            minPersonnel: 2,
            maxPersonnel: 4,
            possibleBuildings: [6, 19],
            schooling: {
                경찰서: {
                    특수화기전술조: {
                        all: true,
                    },
                },
            },
            special: '특별 교육이 필요합니다 (특수화기전술조)',
        },
        23: {
            caption: '물대포',
            color: '#bb2222',
            coins: 15,
            credits: 35_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            possibleBuildings: [6, 19],
            schooling: {
                '경찰서': {
                    '물대포 작전 훈련': {
                        all: true,
                    },
                },
            },			
        },
        24: {
            caption: '철도 경찰',
            color: '#30aa22',
            coins: 10,
            credits: 25_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
        },
        25: {
            caption: '죄수 수송 차량',
            color: '#996d22',
            coins: 25,
            credits: 25_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            possibleBuildings: [6, 19],
		},
        26: {
            caption: '진압경찰단 차량',
            color: '#882222',
            coins: 15,
            credits: 10_000,
            minPersonnel: 9,
            maxPersonnel: 9,
            possibleBuildings: [6, 19],
            schooling: {
                '경찰서': {
                    '진압 경찰 교육': {
                        all: true,
                    },
                },
            },
            special:
                '특별 교육이 필요합니다 (진압 경찰 교육)',
        },
        27: {
            caption: '진압 경찰 장비 차량',
            color: '#772222',
            coins: 10,
            credits: 25_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
			schooling: {
                '경찰서': {
                    '진압경찰장비교육': {
                        all: true,
                    },
                },
            },		
		},
        28: {
            caption: '승무원 캐리어',
            color: '#638a2a',
            coins: 10,
            credits: 15_000,
            minPersonnel: 9,
            maxPersonnel: 9,
            possibleBuildings: [6, 19],
        },
    },
    buildingCategories: {
        '소방서': {
            buildings: [0, 18],
            color: '#ff2d2d',
        },
        '응급실': {
            buildings: [2, 20],
            color: '#ffa500',
        },
        '경찰서': {
            buildings: [6, 19],
            color: '#00ac00',
        },
        'Other': {
            buildings: [1, 3, 4, 5, 7, 8, 14],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        '소방 차량': {
            vehicles: {
                '소방차': [0, 1, 11, 12],
                '물탱크차': [6],
                '특수차량': [2,3,4,6,7,10,18,19,20],
            },
            color: '#ff2d2d',
        },
        '응급 차량': {
            vehicles: {
                '구급차': [5, 17],
                'HEMS': [9],
                '다른 응급차량': [13,14,15, 16],
            },
            color: '#ffa500',
        },
        '경찰 차량': {
            vehicles: {
                '경찰차': [8],
                'SWAT': [21, 22],
				'물대포': [23],
				'철도 경찰': [24],
				'수송 차량': [25,28],
				'진압 경찰': [26,27],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 13,
        3: 16,
        5: 15,
    },
    schoolings: {
        '소방학교': [
            {
                caption: '유해물질',
                duration: '3 Days',
                staffList: '유해물질',
            },
            {
                caption: '이동 지휘',
                duration: '5 Days',
                staffList: '이동 지휘',
            },
            {
                caption: '항공구조 및 소방 훈련',
                duration: '3 Days',
                staffList: 'ARFF',
            },
            {
                caption: '신속 수상 구조',
                duration: '4 Days',
                staffList: '신속 수상 구조',
            },
            {
                caption: '원양 항해',
                duration: '5 Days',
                staffList: '원양 항해',
            },
        ],
        '경찰 학교': [
            {
                caption: '특수화기전술조',
                duration: '5 Days',
                staffList: '특수화기전술조',
            },
            {
                caption: '싸이카',
                duration: '3 Days',
                staffList: '싸이카',
            },
            {
                caption: '진압 경찰 교육',
                duration: '2 Days',
                staffList: '진압 경찰 교육',
            },
            {
                caption: '진압경찰장비교육',
                duration: '5 Days',
                staffList: '진압경찰장비교육',
            },
            {
                caption: '물대포 작전 훈련',
                duration: '7 Days',
                staffList: '물대포 작전 훈련',
            },
        ],
        '응급구조학과(응급 의료 서비스)': [
            {
                caption: '중환자 치료 훈련',
                duration: '5 Days',
                staffList: '중환자 치료 훈련',
            },
            {
                caption: '긴급 이송용 오토바이',
                duration: '3 Days',
                staffList: '긴급 이송용 오토바이',
            },
        ],
    },
    amount: 'Quantity',
    search: 'Search',
    mapSearch: 'Location search',
    alliance: 'Alliance',
    premiumNotice:
        'This feature extends a premium feature of the game and is therefore only available for players with a Missionchief game premium account!',
    credits: 'Credits',
    coins: 'Coins',
    close: 'Close',
    fullscreen: {
        expand: 'Activate full screen mode',
        compress: 'Disable full screen mode',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Buildings',
    station: 'Stations | Station | Stations',
    distance: 'Distance | Distances',
    vehicleType: 'Vehicle type',
    noOptions: 'Sorry, no matching options.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        '공원',
        '호수',
        '병원',
        '숲',
        '버스 정류장',
        '전차 정류장',
        '기차역(지역 교통)',
        '기차역(지역 교통 및 장거리 여행역)',
        '화물역',</select        '
        '슈퍼마켓(소형)',
        '슈퍼마켓(대형)',
        '주유소',
        '학교',
        '박물관',
        '쇼핑몰',
        '차량 정비소',
        '고속도로 출구',
        '크리스마스 마켓',
        '저장소',
        '디스코텍',
        '경기장',
        '농장',
        '사무용 건물',
        '수영장',
        '철길 건널목',
        '극장',
        '박람회장',
        '강',
        '소형 공항(활주로)',
        '대형 공항(활주로)',
        '공항 터미널',
        '은행',
        '창고',
        '다리',
        '패스트푸드 레스토랑',
        '적하구',
        '재활용 센터',
        '고층 건물',
        '유람선 부두',
        '정박지',
        '철도 건널목',
        '터널',
        '냉동 창고',
        '발전소',
        '공장',
        '고철 처리장',
        '지하철역',
        '소형 화학물질 저장 탱크',
        '대형 화학물질 저장 탱크',
        '호텔',
        '술집',
        '매립지',
        '주차장',
        '신호등에 따라 횡단하기',
        '목수 작업장',
        '레스토랑',
        '도시 중심가',
        '언덕',
        '부두',
        '운동장',
        '더트 레이스 트랙',
        '안전 가옥 내',
        '원자력 발전소',
        '절벽',
        '제재소',
        '정유 공장',
        '교회',
    ],
    only_alliance_missions: [41, 61, 62, 112],
    transfer_missions: [246],
    ranks: {
        missionchief: {
            0: '견습생',
            200: '소방사',
            10_000: '소방교',
            100_000: '소방 장비 오퍼레이터',
            1_000_000: '소방위',
            5_000_000: '소방경',
            20_000_000: '소방대위',
            50_000_000: '소방대장',
            1_000_000_000: '소방준감',
            2_000_000_000: '소방정감',
            5_000_000_000: '소방총감',
        },
        policechief: {
            0: 'Police recruit',
            200: 'Police cadet',
            10_000: 'Police officer',
            100_000: 'Police detective',
            1_000_000: 'Police corporal',
            5_000_000: 'Police sergeant',
            20_000_000: 'Police lieutenant',
            50_000_000: 'Police captain',
            1_000_000_000: 'Police commander',
            2_000_000_000: 'Deputy chief',
            5_000_000_000: 'Chief of police',
        },
    },
};
