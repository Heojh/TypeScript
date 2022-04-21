import {COUNT_DATA, STR_DATA, NUM_DATA} from './type';

export const CountData = payload => ({type: COUNT_DATA, payload});
export const StrData = payload => ({type: STR_DATA, payload});
export const NumData = payload => ({type: NUM_DATA, payload});
