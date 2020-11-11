import Home from '@/pages/home';
import NotFound from '@/pages/notFound';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        component: NotFound,
    }
]

export default routes;