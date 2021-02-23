import {USER_DATA} from '../action/types';

const INITIAL_STATE = {
  userData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_DATA:
      return {...state, userData: action.payload};
    default:
      return state;
  }
};
