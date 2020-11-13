import Home from '@/pages/home';
import NotFound from '@/pages/notFound';
import BasicLayout from '@/components/BasicLayout';

const routes = [
    {
        path: '/',
        component: BasicLayout,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                component: NotFound,
            }
        ]
    },
]

export default routes;