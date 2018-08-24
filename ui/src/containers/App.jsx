import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <div>
    <ul>
      <li>
        <NavLink to="/home">home</NavLink>
      </li>
      <li>
        <NavLink to="/list">list</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign up</NavLink>
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
