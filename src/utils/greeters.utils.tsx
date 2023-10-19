import map1 from '../assets/maps/map_1.jpg';
import map2 from '../assets/maps/map_2.jpg';
import map3 from '../assets/maps/map_3.jpg';

export type Greeter = {
    id: number;
    name: string;
    year: number | null;
    province: Province;
    video: string;
    map: string | null;
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
        id: 1,
        name: 'Agnes Dauz Cadlaon',
        year: 1981,
        province: Province.pangasinan,
        video: 'nW-0ltKiihk',
        map: map1,
    },

    {
        id: 2,
        name: 'Alice Pinky Ramirez Oreas',
        year: 1987,
        province: Province.pangasinan,
        video: '0W1DXrWKgIA',
        map: map2,
    },

    {
        id: 3,
        name: 'Araceli Gorospe Lambinicio',
        year: 1961,
        province: Province.pampanga,
        video: 'JQ-hGgHnfkU',
        map: map3,
    },

    {
        id: 4,
        name: 'Brenda Faye Reyes DePano',
        year: 1983,
        province: Province.nuevaEcija,
        video: 'ruwI5LtLRik',
        map: null
    },

    {
        id: 5,
        name: 'Crispina Estaris',
        year: 1954,
        province: Province.cagayan,
        video: 'zd98LgqBE_k',
        map: null
    },

    {
        id: 6,
        name: 'Edna Soriano Santos',
        year: 1959,
        province: Province.manila,
        video: 'R04A61eibZs',
        map: null
    },

    {
        id: 7,
        name: 'Eunice Bautista Laureano',
        year: 1955,
        province: Province.bataan,
        video: 'LdbiHvpe21s',
        map: null
    },

    {
        id: 8,
        name: 'Fe Isabel Cruz Gorospe',
        year: 1957,
        province: Province.manila,
        video: 'E9c87o7XdPU',
        map: null
    },

    {
        id: 9,
        name: 'Helen Rabina Sicat',
        year: null,
        province: Province.tarlac,
        video: 'WZ7XEu7VfLU',
        map: null
    },

    {
        id: 10,
        name: 'Lila Valencia Lusung',
        year: 1952,
        province: Province.tarlac,
        video: '3MMnPVWWiuw',
        map: null
    },

    {
        id: 11,
        name: 'Noemi Bagasin Villanueva',
        year: 1983,
        province: Province.cagayan,
        video: 'baHKDQeQjDk',
        map: null
    },

    {
        id: 12,
        name: 'Olive Asis Dugay',
        year: 1981,
        province: Province.nuevaVizcaya,
        video: 'JpNm8uFMVuQ',
        map: null
    },

    {
        id: 13,
        name: 'Pacita Gomintong DelAmen',
        year: 1967,
        province: Province.llocosSur,
        video: 'E334hDk7L2w',
        map: null
    },

    {
        id: 14,
        name: 'Rosario Nicolas Pangilinan',
        year: 1963,
        province: Province.bulacan,
        video: '9uJGq3gzRjY',
        map: null
    },

    {
        id: 15,
        name: 'Fabiola Sanchez Carreon',
        year: 1973,
        province: Province.pampanga,
        video: 'Q5jruwiClJ8',
        map: null
    },

    {
        id: 16,
        name: 'Cecil Bucud Arceo',
        year: 1996,
        province: Province.pampanga,
        video: 'yYNAn8z3I7Y',
        map: null
    },

    {
        id: 17,
        name: 'Erlinda Villanueva Pastrana',
        year: 1961,
        province: Province.camarinesSur,
        video: 'kqqbl59kWyI',
        map: null
    },

    {
        id: 18,
        name: 'Perla Cunanan Baker',
        year: 1971,
        province: Province.tarlac,
        video: 'LonZ5Pu3u4M',
        map: null
    },
];