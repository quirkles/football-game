import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import authorizationCredentials from './authorizationCredentials.js';

const rootReducer = combineReducers({
  router,
  authorizationCredentials,
});

export default rootReducer;
