
export type Greeter = {
    id: number;
    name: string;
    year: number | null;
    province: Province;
};

export enum Province {
    pangasinan = 'Pangasinan',
    pampanga = 'Pampanga',
    nuevaEcija = 'Nueva Ecija',
    cagayan = 'Cagayan',
    manila = 'Manila',
    bataan = 'Bataan',
    tarlac = 'Tarlac',
    nuevaVizcaya = 'Nueva Vizcaya',
    llocosSur = 'Llocos Sur',
    bulacan = 'Bulacan',
    camarinesSur = 'Camarines Sur',
}

export const Greeters: Greeter[] = [
    {
        id: 0,
        name: 'Agnes Dauz Cadlaon',
        year: 1981,
        province: Province.pangasinan,
    },

    {
        id: 1,
        name: 'Alice Pinky Ramirez Oreas',
        year: 1987,
        province: Province.pangasinan,
    },

    {
        id: 2,
        name: 'Araceli Gorospe Lambinicio',
        year: 1961,
        province: Province.pampanga,
    },

    {
        id: 3,
        name: 'Brenda Faye Reyes DePano',
        year: 1983,
        province: Province.nuevaEcija,

    },

    {
        id: 4,
        name: 'Crispina Estaris',
        year: 1954,
        province: Province.cagayan,
    },

    {
        id: 5,
        name: 'Edna Soriano Santos',
        year: 1959,
        province: Province.manila,

    },

    {
        id: 6,
        name: 'Eunice Bautista Laureano',
        year: 1955,
        province: Province.bataan,
    },

    {
        id: 7,
        name: 'Fe Isabel Cruz Gorospe',
        year: 1957,
        province: Province.manila,

    },

    {
        id: 8,
        name: 'Helen Rabina Sicat',
        year: null,
        province: Province.tarlac,
    },

    {
        id: 9,
        name: 'Lila Valencia Lusung',
        year: 1952,
        province: Province.tarlac,
    },

    {
        id: 10,
        name: 'Noemi Bagasin Villanueva',
        year: 1983,
        province: Province.cagayan,
    },

    {
        id: 11,
        name: 'Olive Asis Dugay',
        year: 1981,
        province: Province.nuevaVizcaya,
    },

    {
        id: 12,
        name: 'Pacita Gomintong DelAmen',
        year: 1967,
        province: Province.llocosSur,
    },

    {
        id: 13,
        name: 'Rosario Nicolas Pangilinan',
        year: 1963,
        province: Province.bulacan,
    },

    {
        id: 14,
        name: 'Fabiola Sanchez Carreon',
        year: 1973,
        province: Province.pampanga,
    },

    {
        id: 15,
        name: 'Cecil Bucud Arceo',
        year: 1996,
        province: Province.pampanga,
    },

    {
        id: 16,
        name: 'Erlinda Villanueva Pastrana',
        year: 1961,
        province: Province.camarinesSur,
    },

    {
        id: 17,
        name: 'Perla Cunanan Baker',
        year: 1971,
        province: Province.tarlac,
    },
];