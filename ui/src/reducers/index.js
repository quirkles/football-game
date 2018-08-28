import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import userReducer from './sessionUserReducer';

const rootReducer = combineReducers({
  router,
  userReducer,
});

export default rootReducer;
