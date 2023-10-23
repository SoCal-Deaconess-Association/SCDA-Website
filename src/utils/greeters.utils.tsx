import map1 from '../assets/maps/map_1.jpg';
import map2 from '../assets/maps/map_2.jpg';
import map3 from '../assets/maps/map_3.jpg';
import map4 from '../assets/maps/map_4.jpg';
import map5 from '../assets/maps/map_5.jpg';
import map6 from '../assets/maps/map_6.jpg';
import map7 from '../assets/maps/map_7.jpg';
import map8 from '../assets/maps/map_8.jpg';
import map9 from '../assets/maps/map_9.jpg';
import map10 from '../assets/maps/map_10.jpg';
import map11 from '../assets/maps/map_11.jpg';
import map12 from '../assets/maps/map_12.jpg';
import map13 from '../assets/maps/map_13.jpg';
import map14 from '../assets/maps/map_14.jpg';
import map15 from '../assets/maps/map_15.jpg';
import map16 from '../assets/maps/map_16.jpg';
import map17 from '../assets/maps/map_17.jpg';
import map18 from '../assets/maps/map_18.jpg';

import story1 from '../assets/stories/story_1.pdf';
import story2 from '../assets/stories/story_2.pdf';
import story3 from '../assets/stories/story_3.pdf';
import story4 from '../assets/stories/story_4.pdf';
import story5 from '../assets/stories/story_5.pdf';
import story6 from '../assets/stories/story_6.pdf';
import story7 from '../assets/stories/story_7.pdf';
import story8 from '../assets/stories/story_8.pdf';
import story9 from '../assets/stories/story_9.pdf';
import story10 from '../assets/stories/story_10.pdf';
import story11 from '../assets/stories/story_11.pdf';
import story12 from '../assets/stories/story_12.pdf';
import story13 from '../assets/stories/story_13.pdf';
import story14 from '../assets/stories/story_14.pdf';
import story15 from '../assets/stories/story_15.pdf';
import story16 from '../assets/stories/story_16.pdf';
import story17 from '../assets/stories/story_17.pdf';
import story18 from '../assets/stories/story_18.pdf';

export type Greeter = {
    id: number;
    name: string;
    year: number | null;
    province: Province;
    video: string;
    map: string;
    story: string;
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
        story: story1,
    },

    {
        id: 2,
        name: 'Alice Pinky Ramirez Oreas',
        year: 1987,
        province: Province.pangasinan,
        video: '0W1DXrWKgIA',
        map: map2,
        story: story2,
    },

    {
        id: 3,
        name: 'Araceli Gorospe Lambinicio',
        year: 1961,
        province: Province.pampanga,
        video: 'JQ-hGgHnfkU',
        map: map3,
        story: story3,
    },

    {
        id: 4,
        name: 'Brenda Faye Reyes DePano',
        year: 1983,
        province: Province.nuevaEcija,
        video: 'ruwI5LtLRik',
        map: map4,
        story: story4,
    },

    {
        id: 5,
        name: 'Crispina Estaris',
        year: 1954,
        province: Province.cagayan,
        video: 'zd98LgqBE_k',
        map: map5,
        story: story5,
    },

    {
        id: 6,
        name: 'Edna Soriano Santos',
        year: 1959,
        province: Province.manila,
        video: 'R04A61eibZs',
        map: map6,
        story: story6,
    },

    {
        id: 7,
        name: 'Eunice Bautista Laureano',
        year: 1955,
        province: Province.bataan,
        video: 'LdbiHvpe21s',
        map: map7,
        story: story7,
    },

    {
        id: 8,
        name: 'Fe Isabel Cruz Gorospe',
        year: 1957,
        province: Province.manila,
        video: 'E9c87o7XdPU',
        map: map8,
        story: story8,
    },

    {
        id: 9,
        name: 'Helen Rabina Sicat',
        year: null,
        province: Province.tarlac,
        video: 'WZ7XEu7VfLU',
        map: map9,
        story: story9,
    },

    {
        id: 10,
        name: 'Lila Valencia Lusung',
        year: 1952,
        province: Province.tarlac,
        video: '3MMnPVWWiuw',
        map: map10,
        story: story10,
    },

    {
        id: 11,
        name: 'Noemi Bagasin Villanueva',
        year: 1983,
        province: Province.cagayan,
        video: 'baHKDQeQjDk',
        map: map11,
        story: story11,
    },

    {
        id: 12,
        name: 'Olive Asis Dugay',
        year: 1981,
        province: Province.nuevaVizcaya,
        video: 'JpNm8uFMVuQ',
        map: map12,
        story: story12,
    },

    {
        id: 13,
        name: 'Pacita Gomintong DelAmen',
        year: 1967,
        province: Province.llocosSur,
        video: 'E334hDk7L2w',
        map: map13,
        story: story13,
    },

    {
        id: 14,
        name: 'Rosario Nicolas Pangilinan',
        year: 1963,
        province: Province.bulacan,
        video: '9uJGq3gzRjY',
        map: map14,
        story: story14,
    },

    {
        id: 15,
        name: 'Fabiola Sanchez Carreon',
        year: 1973,
        province: Province.pampanga,
        video: 'Q5jruwiClJ8',
        map: map15,
        story: story15,
    },

    {
        id: 16,
        name: 'Cecil Bucud Arceo',
        year: 1996,
        province: Province.pampanga,
        video: 'yYNAn8z3I7Y',
        map: map16,
        story: story16,
    },

    {
        id: 17,
        name: 'Erlinda Villanueva Pastrana',
        year: 1961,
        province: Province.camarinesSur,
        video: 'kqqbl59kWyI',
        map: map17,
        story: story17,
    },

    {
        id: 18,
        name: 'Perla Cunanan Baker',
        year: 1971,
        province: Province.tarlac,
        video: 'LonZ5Pu3u4M',
        map: map18,
        story: story18,
    },
];