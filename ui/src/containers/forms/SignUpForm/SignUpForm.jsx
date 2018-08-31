import React from 'react';
import './SignUpForm.scss';

const SignUpForm = () => (
  <div className="sign-up-form-component">
    <h2>Signup form</h2>
    <div className="form-container">
      <form>
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell">
              <label>
                Email
                <input type="text" placeholder="user@mail.com" />
              </label>
            </div>
            <div className="cell">
              <label>
                Password
                <input type="text" placeholder="1234abcd" />
              </label>
            </div>
            <div className="cell">
              <button type="button" className="success button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default SignUpForm;
