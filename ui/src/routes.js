import App from './App';
import { SignUpPage, NotFoundPage } from './pages';

const routes = [
  {
    path: '/',
    component: App,
    routes: [
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
