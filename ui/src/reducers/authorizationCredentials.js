import { Map } from 'immutable';

import { EDIT_USER } from '../actions/authorizationCredentialsActions';

const defaultState = Map({
  email: '',
  password: '',
  confirmPassword: '',
});

const authorizationCredentialsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case EDIT_USER:
      return state.merge(action.data);
    default:
      return state;
  }
};

export default authorizationCredentialsReducer;
