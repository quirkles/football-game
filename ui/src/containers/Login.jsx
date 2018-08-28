import React from 'react';

const Login = () => {
  return (
    <div>
      <h3>Sign in</h3>
      <form>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
