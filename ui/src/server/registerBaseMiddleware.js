/* global process $dirname*/
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { BASENAME } from '../constants';

const staticDir = path.join($dirname, '..', 'dist');
const registerBaseMiddlewares = app => {
  app.use(
    `${BASENAME}/static`,
    express.static(
      staticDir,
      process.env.NODE_ENV === 'development' ? {} : { maxAge: '365d' },
    ),
  );
  app.use(cookieParser());
  return app;
};

export default registerBaseMiddlewares;
