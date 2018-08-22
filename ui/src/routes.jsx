import HelloWorld from './components/HelloWorld'
import App from './components/App'
import NotFound from './components/NotFound'

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
            }
        ],
    },
];

export default routes;