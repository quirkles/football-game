/* globals document, window */

import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import createBrowserHistory from 'history/createBrowserHistory';

import routes from './routes';
import reducers from './reducers';

const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const rootEl = document.getElementById('app');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(middleware)),
);

export const getDomTree = () => (
  <Provider store={store}>
    <Router history={history}>{renderRoutes(routes)}</Router>
  </Provider>
);

ReactDOM.hydrate(getDomTree(), rootEl);
