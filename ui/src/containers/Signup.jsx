import React from 'react';

const Signup = () => {
  return (
    <form>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="small-12 cell">
            <label>
              Email
              <input type="text" placeholder=".medium-6.cell" />
            </label>
          </div>
          <div className="small-12 cell">
            <label>
              Password
              <input type="text" placeholder=".medium-6.cell" />
            </label>
          </div>
          <div className="small-12 cell">
            <label>
              Confirm Password
              <input type="text" placeholder=".medium-6.cell" />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
