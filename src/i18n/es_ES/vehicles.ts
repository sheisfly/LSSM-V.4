import type { InternalVehicle } from 'typings/Vehicle';

export default {
    0: {
        caption: 'Camión BUP',
        color: '#cc0000',
        credits: 5000,
        coins: 25,
        staff: { min: 1, max: 6 },
        icon: 'car-side',
        possibleBuildings: [0, 18],
        waterTank: 3000,
        foamTank: 500,
    },
    1: {
        caption: 'Camión BUL',
        color: '#bb0000',
        credits: 5000,
        coins: 25,
        staff: { min: 1, max: 3 },
        icon: 'car-side',
        possibleBuildings: [0, 18],
        waterTank: 1500,
        foamTank: 250,
    },
    2: {
        caption: 'Camión AE',
        color: '#d92626',
        credits: 10_000,
        coins: 30,
        staff: { min: 1, max: 3 },
        icon: 'car-side',
        possibleBuildings: [0, 18],
        special: 'Necesario cuando hayas construido 3 parques de bomberos',
    },
    3: {
        caption: 'Vehículo UMC',
        color: '#d02525',
        credits: 10_000,
        coins: 25,
        staff: { min: 1, max: 3 },
        icon: 'car-side',
        possibleBuildings: [0, 18],
        special: 'Necesario cuando hayas construido 6 parques de bomberos',
    },
    4: {
        caption: 'FUV',
        color: '#ad1f1f',
        credits: 12_180,
        coins: 25,
        staff: { min: 1, max: 4 },
        icon: 'car-side',
        possibleBuildings: [0, 18],
        special: 'Necesario cuando hayas construido 4 parques de bomberos',
    },
    5: {
        caption: 'Ambulancia',
        color: '#9c6d1c',
        credits: 5000,
        coins: 25,
        staff: { min: 1, max: 2 },
        icon: 'car-side',
        possibleBuildings: [0, 2, 20],
    },
    6: {
        caption: 'Camión BNP',
        color: '#aa0000',
        credits: 17_300,
        coins: 25,
        staff: { min: 1, max: 3 },
        icon: 'car-side',
        possibleBuildings: [0, 18],
        waterTank: 6000,
        special: 'Necesario cuando hayas construido 7 parques de bomberos',
    },
    7: {
        caption: 'Camión TPP',
        color: '#990000',
        credits: 19_200,
        coins: 25,
        staff: {
            min: 1,
            max: 3,
            training: {
                'Parque de bomberos': {
                    gw_gefahrgut: {
                        all: true,
                    },
                },
            },
        },
        icon: 'car-side',
        possibleBuildings: [0, 18],
        special: 'Necesario cuando hayas construido 11 parques de bomberos',
    },
    8: {
        caption: 'Coche Patrulla',
        color: '#880000',
        credits: 5000,
        coins: 25,
        staff: { min: 1, max: 2 },
        icon: 'car-side',
        possibleBuildings: [6, 19],
    },
    9: {
        caption: 'HEMS',
        color: '#770000',
        credits: 300_000,
        coins: 30,
        staff: { min: 1, max: 1 },
        icon: 'car-side',
        possibleBuildings: [5],
    },
    10: {
        caption: 'Vehículo aéreo',
        color: '#488b18',
        credits: 11_680,
        coins: 25,
        staff: { min: 1, max: 3 },
        icon: 'car-side',
        possibleBuildings: [0, 18],
        special: 'Necesario cuando hayas construido 5 parques de bomberos',
    },
    11: {
        caption: 'Vehículo de mando móvil',
        color: '#e68319',
        credits: 25_500,
        coins: 25,
        staff: {
            min: 1,
            max: 6,
            training: {
                'Parque de bomberos': {
                    elw2: {
                        all: true,
                    },
                },
            },
        },
        icon: 'car-side',
        possibleBuildings: [0, 18],
        special: 'Necesario cuando hayas construido 13 parques de bomberos',
    },
    12: {
        caption: 'Vehículo de rescate',
        color: '#791515',
        credits: 19_000,
        coins: 25,
        staff: { min: 1, max: 6 },
        icon: 'car-side',
        possibleBuildings: [0, 18],
        waterTank: 3000,
        foamTank: 500,
    },
    13: {
        caption: 'Helicóptero de Policía',
        color: '#dc1818',
        credits: 300_000,
        coins: 30,
        staff: {
            min: 1,
            max: 3,
            training: {
                ['Policía']: {
                    polizeihubschrauber: {
                        all: true,
                    },
                },
            },
        },
        icon: 'car-side',
        possibleBuildings: [13],
    },
    14: {
        caption: 'Unidad Antidisturbios',
        color: '#70ca16',
        credits: 10_000,
        coins: 25,
        staff: {
            min: 6,
            max: 6,
            training: {
                ['Policía']: {
                    swat: {
                        all: true,
                    },
                },
            },
        },
        icon: 'car-side',
        possibleBuildings: [6, 19],
        special: 'Necesario cuando hayas construido 8 comisarías de policía',
    },
    15: {
        caption: 'Unidad GEO',
        color: '#b88f14',
        credits: 7000,
        coins: 23,
        staff: {
            min: 2,
            max: 4,
            training: {
                ['Policía']: {
                    swat: {
                        all: true,
                    },
                },
            },
        },
        icon: 'car-side',
        possibleBuildings: [6, 19],
        special: 'Necesario cuando hayas construido 8 comisarías de policía',
    },
    16: {
        caption: 'Unidad Canina',
        color: '#68a512',
        credits: 7000,
        coins: 25,
        staff: {
            min: 1,
            max: 2,
            training: {
                ['Policía']: {
                    k9: {
                        all: true,
                    },
                },
            },
        },
        icon: 'car-side',
        possibleBuildings: [6, 19],
        special: 'Necesario cuando hayas construido 6 comisarías de policía',
    },
    17: {
        caption: 'Moto de Policía',
        color: '#cc2222',
        credits: 2500,
        coins: 18,
        staff: {
            min: 1,
            max: 1,
            training: {
                ['Policía']: {
                    police_motorcycle: {
                        all: true,
                    },
                },
            },
        },
        icon: 'car-side',
        possibleBuildings: [6, 19],
    },
    18: {
        caption: 'VIR',
        color: '#770000',
        credits: 4000,
        coins: 20,
        staff: { min: 2, max: 2 },
        icon: 'car-side',
        possibleBuildings: [0, 2, 20],
    },
    19: {
        caption: 'Unidad logística de AMV',
        color: '#770000',
        credits: 20_000,
        coins: 25,
        staff: { min: 2, max: 3 },
        icon: 'car-side',
        possibleBuildings: [2, 20],
        special: 'Necesario cuando hayas construido 6 estaciones de rescate',
    },
    20: {
        caption: 'Médico de cabecera',
        color: '#770000',
        credits: 4000,
        coins: 20,
        staff: {
            min: 1,
            max: 1,
            training: {
                Rescate: {
                    critical_care: {
                        all: true,
                    },
                },
            },
        },
        icon: 'car-side',
        possibleBuildings: [2],
    },
    21: {
        caption: 'Motocicleta de intervención rápida',
        color: '#770000',
        credits: 12_000,
        coins: 15,
        staff: {
            min: 1,
            max: 1,
            training: {
                Rescate: {
                    rapid_response_motorcycle: {
                        all: true,
                    },
                },
            },
        },
        icon: 'car-side',
        possibleBuildings: [2, 20],
    },
    22: {
        caption: 'Ambulancia SVB',
        color: '#770000',
        credits: 5000,
        coins: 12,
        staff: { min: 2, max: 2 },
        icon: 'car-side',
        possibleBuildings: [0, 2, 20],
    },
    23: {
        caption: 'Vehículo de extinción por espuma',
        color: '#791515',
        credits: 35_000,
        coins: 15,
        staff: { min: 2, max: 3 },
        icon: 'car-side',
        possibleBuildings: [0],
        foamTank: 3000,
    },
    24: {
        caption: 'Remolque con bomba accionada por motor',
        color: '#791515',
        credits: 10_000,
        coins: 10,
        staff: { min: 0, max: 0 },
        icon: 'car-side',
        possibleBuildings: [0],
        special:
            'Se necesita un vehículo de remolque (Camión BUP, Camión BUL, Camión BNP, Vehículo de extinción por espuma)',
    },
} satisfies Record<number, InternalVehicle>;
