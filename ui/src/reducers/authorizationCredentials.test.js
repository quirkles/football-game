import { Map } from 'immutable';
import authorizationCredentialsReducer from './authorizationCredentials';

describe('authorizationCredentialsReducer', () => {
  it('initializes state to expected default state', () => {
    const expectedFinalState = Map({
      email: '',
      password: '',
      confirmPassword: '',
    });
    expect(authorizationCredentialsReducer()).toEqual(expectedFinalState);
  });
});
