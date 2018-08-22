import React from 'react';
import propTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
    <div>
        <div>{renderRoutes(route.routes)}</div>
    </div>
);

App.propTypes = {
    route: propTypes.shape({
        routes: propTypes.array.isRequired,
    }).isRequired,
};

export default App;