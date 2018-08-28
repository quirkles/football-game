import HelloWorld from './containers/HelloWorld';
import App from './containers/App';
import NotFound from './containers/NotFound';
import SignUp from './containers/Signup';
import Login from './containers/Login';

const routes = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/hello-world',
        component: HelloWorld,
      },
      {
        path: '/signup',
        component: SignUp,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
];

export default routes;
