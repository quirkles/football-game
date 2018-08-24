import React from 'react';

const Signup = () => {
  return (
    <div>
      <h3>Sign up</h3>
      <div>
        <form>
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="text" name="confirm" placeholder="Confirm password" />
          <button>Sign up</button>
          <p>or</p>
          <button>Sign up with Facebook</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
