import React from 'react';
import propTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import './App.scss';

const App = ({ route }) => <div>{renderRoutes(route.routes)}</div>;

App.propTypes = {
  route: propTypes.shape({
    routes: propTypes.array.isRequired,
  }).isRequired,
};

export default App;
