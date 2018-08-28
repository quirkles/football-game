import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import './App.scss';

const App = ({ route }) => (
  <div>
    <ul>
      <li>
        <NavLink to="/hello-world">hello-world</NavLink>
      </li>
      <li>
        <NavLink to="/notfound">404</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log in</NavLink>
      </li>
    </ul>
    <div>{renderRoutes(route.routes)}</div>
  </div>
);

App.propTypes = {
  route: propTypes.shape({
    routes: propTypes.array.isRequired,
  }).isRequired,
};

export default App;
