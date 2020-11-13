import Home from '@/pages/home';
import NotFound from '@/pages/notFound';
import SecureLayout from '@/components/SecureLayout';
import BasicLayout from '@/components/BasicLayout';
import Account from '@/pages/account';
import Storage from '@/pages/storage';
import History from '@/pages/history';
import Gift from '@/pages/gift';
import Test from '@/pages/test';

import {
    ROOT,
    HOME,
    ACCOUNT,
    STORAGE,
    HISTORY,
    GIFT,
    TEST,
} from './routerConst';

const routes = [
    {
        path: ROOT,
        component: SecureLayout,
        routes: [
            {
                path: HOME,
                component: Home,
                exact: true
            },
            {
                path: '/i',
                component: BasicLayout,
                routes: [
                    {
                        path: ACCOUNT,
                        component: Account,
                        exact: true
                    },
                    {
                        path: STORAGE,
                        component: Storage,
                        exact: true
                    },
                    {
                        path: HISTORY,
                        component: History,
                        exact: true
                    },
                    {
                        path: GIFT,
                        component: Gift,
                        exact: true
                    },
                    {
                        path: TEST,
                        component: Test,
                        exact: true
                    },
                ]
            }
        ],
    },
    {
        component: NotFound
    }
]

export default routes;