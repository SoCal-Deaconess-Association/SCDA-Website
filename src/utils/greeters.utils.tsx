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

import story_1_1 from '../assets/stories/1/story_1_01.png';
import story_1_2 from '../assets/stories/1/story_1_02.png';
import story_1_3 from '../assets/stories/1/story_1_03.png';

import story_2_1 from '../assets/stories/2/story_2_01.png';
import story_2_2 from '../assets/stories/2/story_2_02.png';
import story_2_3 from '../assets/stories/2/story_2_03.png';

import story_3_1 from '../assets/stories/3/story_3_01.png';
import story_3_2 from '../assets/stories/3/story_3_02.png';
import story_3_3 from '../assets/stories/3/story_3_03.png';

import story_4_1 from '../assets/stories/4/story_4_01.png';
import story_4_2 from '../assets/stories/4/story_4_02.png';
import story_4_3 from '../assets/stories/4/story_4_03.png';

import story_5_1 from '../assets/stories/5/story_5_01.png';
import story_5_2 from '../assets/stories/5/story_5_02.png';
import story_5_3 from '../assets/stories/5/story_5_03.png';
import story_5_4 from '../assets/stories/5/story_5_04.png';

import story_6_1 from '../assets/stories/6/story_6_01.png';
import story_6_2 from '../assets/stories/6/story_6_02.png';
import story_6_3 from '../assets/stories/6/story_6_03.png';

import story_7_1 from '../assets/stories/7/story_7_01.png';
import story_7_2 from '../assets/stories/7/story_7_02.png';
import story_7_3 from '../assets/stories/7/story_7_03.png';
import story_7_4 from '../assets/stories/7/story_7_04.png';

import story_8_1 from '../assets/stories/8/story_8_01.png';
import story_8_2 from '../assets/stories/8/story_8_02.png';
import story_8_3 from '../assets/stories/8/story_8_03.png';

import story_9_1 from '../assets/stories/9/story_9_01.png';
import story_9_2 from '../assets/stories/9/story_9_02.png';
import story_9_3 from '../assets/stories/9/story_9_03.png';

import story_10_1 from '../assets/stories/10/story_10_01.png';
import story_10_2 from '../assets/stories/10/story_10_02.png';
import story_10_3 from '../assets/stories/10/story_10_03.png';

import story_11_1 from '../assets/stories/11/story_11_01.png';
import story_11_2 from '../assets/stories/11/story_11_02.png';
import story_11_3 from '../assets/stories/11/story_11_03.png';

import story_12_1 from '../assets/stories/12/story_12_01.png';
import story_12_2 from '../assets/stories/12/story_12_02.png';
import story_12_3 from '../assets/stories/12/story_12_03.png';

import story_13_1 from '../assets/stories/13/story_13_01.png';
import story_13_2 from '../assets/stories/13/story_13_02.png';
import story_13_3 from '../assets/stories/13/story_13_03.png';
import story_13_4 from '../assets/stories/13/story_13_04.png';

import story_14_1 from '../assets/stories/14/story_14_01.png';
import story_14_2 from '../assets/stories/14/story_14_02.png';
import story_14_3 from '../assets/stories/14/story_14_03.png';

import story_15_1 from '../assets/stories/15/story_15_01.png';
import story_15_2 from '../assets/stories/15/story_15_02.png';
import story_15_3 from '../assets/stories/15/story_15_03.png';
import story_15_4 from '../assets/stories/15/story_15_04.png';
import story_15_5 from '../assets/stories/15/story_15_05.png';

import story_16_1 from '../assets/stories/16/story_16_01.png';
import story_16_2 from '../assets/stories/16/story_16_02.png';
import story_16_3 from '../assets/stories/16/story_16_03.png';

import story_17_1 from '../assets/stories/17/story_17_01.png';
import story_17_2 from '../assets/stories/17/story_17_02.png';
import story_17_3 from '../assets/stories/17/story_17_03.png';
import story_17_4 from '../assets/stories/17/story_17_04.png';
import story_17_5 from '../assets/stories/17/story_17_05.png';

import story_18_1 from '../assets/stories/18/story_18_01.png';
import story_18_2 from '../assets/stories/18/story_18_02.png';
import story_18_3 from '../assets/stories/18/story_18_03.png';
import story_18_4 from '../assets/stories/18/story_18_04.png';
import story_18_5 from '../assets/stories/18/story_18_05.png';
import story_18_6 from '../assets/stories/18/story_18_06.png';


export type Greeter = {
    id: number;
    name: string;
    year: number | null;
    province: Province;
    video: string;
    map: string;
    story: any;
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
        story: [story_1_1, story_1_2, story_1_3],
    },

    {
        id: 2,
        name: 'Alice Pinky Ramirez Oreas',
        year: 1987,
        province: Province.pangasinan,
        video: '0W1DXrWKgIA',
        map: map2,
        story: [story_2_1, story_2_2, story_2_3],
    },

    {
        id: 3,
        name: 'Araceli Gorospe Lambinicio',
        year: 1961,
        province: Province.pampanga,
        video: 'JQ-hGgHnfkU',
        map: map3,
        story: [story_3_1, story_3_2, story_3_3],
    },

    {
        id: 4,
        name: 'Brenda Faye Reyes DePano',
        year: 1983,
        province: Province.nuevaEcija,
        video: 'ruwI5LtLRik',
        map: map4,
        story: [story_4_1, story_4_2, story_4_3],
    },

    {
        id: 5,
        name: 'Crispina Estaris',
        year: 1954,
        province: Province.cagayan,
        video: 'zd98LgqBE_k',
        map: map5,
        story: [story_5_1, story_5_2, story_5_3, story_5_4],
    },

    {
        id: 6,
        name: 'Edna Soriano Santos',
        year: 1959,
        province: Province.manila,
        video: 'R04A61eibZs',
        map: map6,
        story: [story_6_1, story_6_2, story_6_3],
    },

    {
        id: 7,
        name: 'Eunice Bautista Laureano',
        year: 1955,
        province: Province.bataan,
        video: 'LdbiHvpe21s',
        map: map7,
        story: [story_7_1, story_7_2, story_7_3, story_7_4],
    },

    {
        id: 8,
        name: 'Fe Isabel Cruz Gorospe',
        year: 1957,
        province: Province.manila,
        video: 'E9c87o7XdPU',
        map: map8,
        story: [story_8_1, story_8_2, story_8_3],
    },

    {
        id: 9,
        name: 'Helen Rabina Sicat',
        year: null,
        province: Province.tarlac,
        video: 'WZ7XEu7VfLU',
        map: map9,
        story: [story_9_1, story_9_2, story_9_3],
    },

    {
        id: 10,
        name: 'Lila Valencia Lusung',
        year: 1952,
        province: Province.tarlac,
        video: '3MMnPVWWiuw',
        map: map10,
        story: [story_10_1, story_10_2, story_10_3],
    },

    {
        id: 11,
        name: 'Noemi Bagasin Villanueva',
        year: 1983,
        province: Province.cagayan,
        video: 'baHKDQeQjDk',
        map: map11,
        story: [story_11_1, story_11_2, story_11_3],
    },

    {
        id: 12,
        name: 'Olive Asis Dugay',
        year: 1981,
        province: Province.nuevaVizcaya,
        video: 'JpNm8uFMVuQ',
        map: map12,
        story: [story_12_1, story_12_2, story_12_3],
    },

    {
        id: 13,
        name: 'Pacita Gomintong DelAmen',
        year: 1967,
        province: Province.llocosSur,
        video: 'E334hDk7L2w',
        map: map13,
        story: [story_13_1, story_13_2, story_13_3, story_13_4],
    },

    {
        id: 14,
        name: 'Rosario Nicolas Pangilinan',
        year: 1963,
        province: Province.bulacan,
        video: '9uJGq3gzRjY',
        map: map14,
        story: [story_14_1, story_14_2, story_14_3],
    },

    {
        id: 15,
        name: 'Fabiola Sanchez Carreon',
        year: 1973,
        province: Province.pampanga,
        video: 'Q5jruwiClJ8',
        map: map15,
        story: [story_15_1, story_15_2, story_15_3, story_15_4, story_15_5],
    },

    {
        id: 16,
        name: 'Cecil Bucud Arceo',
        year: 1996,
        province: Province.pampanga,
        video: 'yYNAn8z3I7Y',
        map: map16,
        story: [story_16_1, story_16_2, story_16_3],
    },

    {
        id: 17,
        name: 'Erlinda Villanueva Pastrana',
        year: 1961,
        province: Province.camarinesSur,
        video: 'kqqbl59kWyI',
        map: map17,
        story: [story_17_1, story_17_2, story_17_3, story_17_4, story_17_5],
    },

    {
        id: 18,
        name: 'Perla Cunanan Baker',
        year: 1971,
        province: Province.tarlac,
        video: 'LonZ5Pu3u4M',
        map: map18,
        story: [
            story_18_1,
            story_18_2,
            story_18_3,
            story_18_4,
            story_18_5,
            story_18_6,
        ],
    },
];