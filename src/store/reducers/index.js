import { combineReducers } from 'redux';

import globalReducer from './global_reducer';

const rootReducer = combineReducers({
  globalState: globalReducer,
});

export default rootReducer;
