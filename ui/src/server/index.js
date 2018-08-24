import express from 'express';
import { compose } from 'ramda';

import startApp from './startApp';
import registerBaseMiddleware from './registerBaseMiddleware';
import registerServerSideRenderMiddleware from './registerServerSideRenderMiddleware';

export default compose(
  startApp,
  registerServerSideRenderMiddleware,
  registerBaseMiddleware,
)(express());
