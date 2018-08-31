import React from 'react';

import SignUpForm from '../../containers/forms/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="page sign-up-page grid-y">
      <div className="cell medium-3" />
      <div className="cell medium-6">
        <div className="grid-x grid-margin-x">
          <div className="cell medium-6 medium-offset-3">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
