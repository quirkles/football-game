import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { pipe } from 'ramda';

import { updateAuthorizationCredentials } from '../../../actions/authorizationCredentialsActions';

import './SignUpForm.scss';

const UnconnectedSignUpForm = ({
  email,
  password,
  confirmPassword,
  updateAuthorizationCredentials,
}) => {
  const updateField = fieldName => event =>
    updateAuthorizationCredentials({ [fieldName]: event.target.value });
  return (
    <div className="sign-up-form-component">
      <h2>Sign up</h2>
      <div className="form-container">
        <form>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="cell">
                <label>
                  Email
                  <input
                    type="text"
                    placeholder="user@mail.com"
                    value={email}
                    onChange={updateField('email')}
                  />
                </label>
              </div>
              <div className="cell">
                <label>
                  Password
                  <input
                    type="text"
                    placeholder="1234abcd"
                    value={password}
                    onChange={updateField('password')}
                  />
                </label>
              </div>
              <div className="cell">
                <label>
                  Confirm Password
                  <input
                    type="text"
                    placeholder="1234abcd"
                    value={confirmPassword}
                    onChange={updateField('confirmPassword')}
                  />
                </label>
              </div>
              <div className="cell">
                <button type="button" className="success button">
                  Submit
                </button>
                <p>or</p>
                <Link to="/login" type="button" className="info button">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

UnconnectedSignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  updateAuthorizationCredentials: PropTypes.func.isRequired,
};

const mapStateToProps = ({ authorizationCredentials }) => ({
  email: authorizationCredentials.get('email'),
  password: authorizationCredentials.get('password'),
  confirmPassword: authorizationCredentials.get('confirmPassword'),
});

const mapDispatchToProps = dispatch => ({
  updateAuthorizationCredentials: pipe(
    updateAuthorizationCredentials,
    dispatch,
  ),
});

const SignUpForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedSignUpForm);

export default SignUpForm;
