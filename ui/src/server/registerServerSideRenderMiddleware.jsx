/* globals console process*/
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';

import Html from './Html';
import { BASENAME } from '../constants';
import routes from '../routes';
import { createStore } from 'redux';
import reducers from '../reducers';

const registerServerSideRenderMiddleware = app => {
  const bundleInfo =
    process.env.NODE_ENV === 'development'
      ? {
          bundle: { js: `${BASENAME}/static/bundle.js` },
          vendor: { js: `${BASENAME}/static/vendor.js` },
        }
      : require('../../bundleInfo.json'); // eslint-disable-line import/no-unresolved
  app.use((req, res, next) => {
    const t = new Date().getTime();
    res.on('finish', () => {
      const ssrTime = new Date().getTime() - t;
      if (ssrTime > 100) {
        console.log( // eslint-disable-line
          'warn',
          `Server side render to ${
            req.url
          } took ${ssrTime}ms which is longer than the required 100ms threshold`,
        );
      }
    });
    next();
  });

  app.use((req, res) => {
    console.log(req.url); // eslint-disable-line
    let context = {};
    const store = createStore(reducers);
    const childComponent = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
    const children = ReactDOMServer.renderToString(childComponent);
    const resourceHints = [
      {
        type: 'hint',
        rel: 'preload',
        as: 'style',
        link:
          process.env.NODE_ENV !== 'development' ? bundleInfo.styles.css : '',
      },
      {
        type: 'hint',
        rel: 'preload',
        as: 'script',
        link: bundleInfo.vendor.js,
      },
      {
        type: 'hint',
        rel: 'preload',
        as: 'script',
        link: bundleInfo.bundle.js,
      },
    ];
    const additionalHeadResources = [
      {
        type: 'css',
        link:
          process.env.NODE_ENV !== 'development' ? bundleInfo.vendor.css : '',
      },
      {
        type: 'css',
        link:
          process.env.NODE_ENV !== 'development' ? bundleInfo.styles.css : '',
      },
    ];
    const additionalBodyResources = [
      {
        type: 'js',
        link: bundleInfo.vendor.js,
      },
      {
        type: 'js',
        link: bundleInfo.bundle.js,
      },
    ];
    if (process.env.NODE_ENV === 'production') {
      additionalBodyResources.push({
        type: 'js',
        link: bundleInfo.styles.js,
      });
    }
    const htmlProps = {
      head: Helmet.rewind(),
      children,
      resourceHints,
      additionalHeadResources,
      additionalBodyResources,
    };
    const stream = ReactDOMServer.renderToStaticNodeStream(
      <Html {...htmlProps} />,
    );
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Transfer-Encoding': 'chunked',
    });
    res.write('<!doctype html>');
    stream.pipe(
      res,
      { end: false },
    );
    stream.on('end', res.end.bind(res));
  });
  return app;
};

export default registerServerSideRenderMiddleware;
