import App from './App';
import { LoginPage, SignUpPage, NotFoundPage } from './pages';

const routes = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/login',
        component: LoginPage,
      },
      {
        path: '/sign-up',
        component: SignUpPage,
      },
      {
        path: '*',
        component: NotFoundPage,
      },
    ],
  },
];

export default routes;
