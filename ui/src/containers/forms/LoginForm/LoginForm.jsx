import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pipe } from 'ramda';

import { updateAuthorizationCredentials } from '../../../actions/authorizationCredentialsActions';

import './LoginForm.scss';

const UnconnectedLoginForm = ({
  email,
  password,
  updateAuthorizationCredentials,
}) => {
  const updateField = fieldName => event =>
    updateAuthorizationCredentials({ [fieldName]: event.target.value });
  {
    return (
      <div className="login-form-component">
        <h2>Log in</h2>
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
                  <button type="button" className="button login-button">
                    Log in
                  </button>
                  <Link to="/sign-up" className="signuo">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

UnconnectedLoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateAuthorizationCredentials: PropTypes.func.isRequired,
};

const mapStateToProps = ({ authorizationCredentials }) => ({
  email: authorizationCredentials.get('email'),
  password: authorizationCredentials.get('password'),
});

const mapDispatchToProps = dispatch => ({
  updateAuthorizationCredentials: pipe(
    updateAuthorizationCredentials,
    dispatch,
  ),
});

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedLoginForm);

export default LoginForm;
