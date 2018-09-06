import React from 'react';

import LoginForm from '../../containers/forms/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="page sign-up-page grid-y">
      <div className="cell medium-3" />
      <div className="cell medium-6">
        <div className="grid-x grid-margin-x">
          <div className="cell medium-6 medium-offset-3">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
