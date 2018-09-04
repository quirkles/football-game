import routeConfig from './routes.js';

jest.mock('./App', () => 'App component');
jest.mock('./pages', () => ({
  SignUpPage: 'SignUpPage component',
  NotFoundPage: 'NotFoundPage component',
}));

describe('routes', () => {
  it('is an array', () => {
    expect(Array.isArray(routeConfig)).toBeTruthy();
  });
  it('contains the expected subroute config', () => {
    expect(routeConfig[0]).toEqual({
      path: '/',
      component: 'App component',
      routes: [
        {
          path: '/sign-up',
          component: 'SignUpPage component',
        },
        {
          path: '*',
          component: 'NotFoundPage component',
        },
      ],
    });
  });
});
