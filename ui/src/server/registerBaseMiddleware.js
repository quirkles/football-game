/* global process */
import express from 'express';
import cookieParser from 'cookie-parser';
import { BASENAME } from '../constants';

const registerBaseMiddlewares = app => {
  app.use(
    `${BASENAME}/static`,
    express.static(
      'dist',
      process.env.NODE_ENV === 'development' ? {} : { maxAge: '365d' },
    ),
  );
  app.use(cookieParser());
  return app;
};

export default registerBaseMiddlewares;
