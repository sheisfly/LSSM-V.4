import 'leaflet.heat';

import { Building } from 'typings/Building';
import { LatLng } from 'leaflet';
import { ModuleMainFunction } from 'typings/Module';
import { Vehicle } from 'typings/Vehicle';
import { Settings, UpdateSettings } from './heatmapSettings.vue';

export default <ModuleMainFunction>(async (LSSM, MODULE_ID, $m) => {
    await LSSM.$store.dispatch('api/registerBuildingsUsage', {
        feature: 'heatmap',
    });
    await LSSM.$store.dispatch('api/registerVehiclesUsage', {
        feature: 'heatmap',
    });

    const setSetting = <T>(settingId: string, value: T): Promise<void> =>
        LSSM.$store.dispatch('settings/setSetting', {
            moduleId: MODULE_ID,
            settingId,
            value,
        });

    const getModuleSettings = (): Promise<Settings> =>
        LSSM.$store.dispatch('settings/getModule', MODULE_ID);

    const pxPerMeter = () => {
        const CenterOfMap = window.map.getSize().y / 2;
        return (
            window.map
                .containerPointToLatLng([0, CenterOfMap])
                .distanceTo(
                    window.map.containerPointToLatLng([100, CenterOfMap])
                ) / 100
        );
    };

    const settings = await getModuleSettings();

    let heatmapMode = settings.heatmapMode ?? 'buildings';
    const buildingsSettings = {
        staticRadius: settings.buildingsStaticRadius ?? false,
        radiusM: settings.buildingsRadiusM ?? 31_415,
        radiusPx: settings.buildingsRadiusPx ?? 50,
        intensityMaxZoom:
            settings.buildingsIntensityMaxZoom ?? window.map.getMaxZoom(),
        includes: settings.buildingsIncludes ?? [],
    };
    const vehicleSettings = {
        staticRadius: settings.vehiclesStaticRadius ?? false,
        radiusM: settings.vehiclesRadiusM ?? 31_415,
        radiusPx: settings.vehiclesRadiusPx ?? 50,
        intensityMaxZoom:
            settings.vehiclesIntensityMaxZoom ?? window.map.getMaxZoom(),
        includes: settings.vehiclesIncludes ?? [],
    };

    const getSubsettings = () =>
        heatmapMode === 'buildings' ? buildingsSettings : vehicleSettings;

    const getLayerOptions = () => {
        const subsettings = getSubsettings();
        return {
            radius: subsettings.staticRadius
                ? subsettings.radiusPx
                : subsettings.radiusM / pxPerMeter(),
            maxZoom: window.map.getMaxZoom() - subsettings.intensityMaxZoom,
        };
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const heatLayer = window.L.heatLayer([], getLayerOptions()).addTo(
        window.map
    );

    window.map.on('zoomend', () => {
        heatLayer.setOptions(getLayerOptions());
    });

    const setData = () => {
        if (heatmapMode === 'buildings') {
            const buildingTypes = buildingsSettings.includes.map(
                ({ value }) => value
            );
            const buildings = (LSSM.$store.state.api
                .buildings as Building[]).filter(({ building_type }) =>
                buildingTypes.includes(building_type)
            );
            heatLayer.setLatLngs(
                buildings.map(
                    ({ latitude, longitude }) =>
                        new window.L.LatLng(latitude, longitude, 1)
                )
            );
        } else {
            const vehicleTypes = vehicleSettings.includes.map(
                ({ value }) => value
            );
            const buildingsById = Object.fromEntries(
                (LSSM.$store.state.api
                    .buildings as Building[]).map(
                    ({ id, latitude, longitude }) => [
                        id,
                        { latitude, longitude },
                    ]
                )
            );
            const points: LatLng[] = [];
            (LSSM.$store.state.api.vehicles as Vehicle[])
                .filter(({ vehicle_type }) =>
                    vehicleTypes.includes(vehicle_type)
                )
                .forEach(({ building_id }) => {
                    const { latitude, longitude } = buildingsById[building_id];
                    const point = points.find(
                        ({ lat, lng }) => lat === latitude && lng === longitude
                    );
                    if (point) {
                        point.alt = (point.alt ?? 0) + 1;
                    } else {
                        points.push(
                            new window.L.LatLng(latitude, longitude, 1)
                        );
                    }
                });
            heatLayer.setLatLngs(points);
        }
    };

    setData();

    const update: UpdateSettings = updated => {
        heatmapMode = updated.heatmapMode;
        buildingsSettings.staticRadius = updated.buildingsStaticRadius;
        buildingsSettings.radiusM = updated.buildingsRadiusM;
        buildingsSettings.radiusPx = updated.buildingsRadiusPx;
        buildingsSettings.intensityMaxZoom = updated.buildingsIntensityMaxZoom;
        buildingsSettings.includes = updated.buildingsIncludes;
        vehicleSettings.staticRadius = updated.vehiclesStaticRadius;
        vehicleSettings.radiusM = updated.vehiclesRadiusM;
        vehicleSettings.radiusPx = updated.vehiclesRadiusPx;
        vehicleSettings.intensityMaxZoom = updated.vehiclesIntensityMaxZoom;
        vehicleSettings.includes = updated.vehiclesIncludes;

        setData();

        window.map.fireEvent('zoomend');
    };

    LSSM.$store
        .dispatch('addOSMControl', { position: 'bottom-left' })
        .then((control: HTMLAnchorElement) => {
            control.addEventListener('click', () =>
                LSSM.$modal.show(
                    () =>
                        import(
                            /* webpackChunkName: "modules/heatmap/settings" */ './heatmapSettings.vue'
                        ),
                    {
                        setSetting,
                        getModuleSettings,
                        updateSettings: update,
                        $m,
                    },
                    { name: 'heatmap-settings', height: '90%' }
                )
            );
        });
});