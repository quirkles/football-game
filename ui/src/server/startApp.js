/* globals process console */
import { BASENAME, PORT } from '../constants';

const startApplication = app => {
  const { APP_ENV } = process.env;
  app.listen(PORT, () => {
    console.log( //eslint-disable-line
      `server running in ${APP_ENV} mode, listening on: http://localhost:${PORT}/${BASENAME}`,
    );
  });
};

export default startApplication;
