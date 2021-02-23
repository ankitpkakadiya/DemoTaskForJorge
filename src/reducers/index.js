import {combineReducers} from 'redux';

import dataReducer from './dataReducers';

const appReducer = combineReducers({
  data: dataReducer,
});

export default appReducer;
