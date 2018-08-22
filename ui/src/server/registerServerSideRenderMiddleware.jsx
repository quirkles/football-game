import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { BASENAME } from '../constants'
import routes from '../routes'

const registerServerSideRenderMiddleware = app => {
    const bundleInfo =
        process.env.NODE_ENV === 'development'
            ? {
                bundle: { js: `${BASENAME}/static/bundle.js` },
                vendor: { js: `${BASENAME}/static/vendor.js` }
            }
            : require('../../bundleInfo.json') // eslint-disable-line import/no-unresolved
    app.use((req, res, next) => {
        const t = new Date().getTime()
        res.on('finish', () => {
            const ssrTime = new Date().getTime() - t
            if (ssrTime > 100) {
                console.log(
                    'warn',
                    `Server side render to ${req.url} took ${ssrTime}ms which is longer than the required 100ms threshold`
                )
            }
        })
        next()
    })

    app.use((req, res) => {
        console.log(req.url)
        let context = {}
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                {renderRoutes(routes)}
            </StaticRouter>,
        );
        const document = `<!doctype html><div id="app">${html}</div><script type="text/javascript" src=${bundleInfo.vendor.js}></script><script type="text/javascript" src=${bundleInfo.bundle.js}></script>`; //eslint-disable-line
        res.write(document);
        res.end();
    })
    return app
}

export default registerServerSideRenderMiddleware