import HelloWorld from './components/HelloWorld';
import App from './components/App';
import NotFound from './components/NotFound';
import Login from './components/Login';

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
        path: '*',
        component: NotFound,
      },
      {
        path: '/login',
        component: Login,
      },
    ],
  },
];

export default routes;
