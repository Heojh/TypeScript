import {COUNT_DATA, STR_DATA, NUM_DATA} from '../_actions/type';

const initialize = {
  count_data: 0,
  str_data: '',
  num_data: 0,
};

export default function (state = initialize, action) {
  switch (action.type) {
    case COUNT_DATA:
      return {
        ...state,
        count_data: action.payload,
      };
    case STR_DATA:
      return {
        ...state,
        str_data: action.payload,
      };
    case NUM_DATA:
      return {
        ...state,
        num_data: action.payload,
      };
    default:
      return state;
  }
}
