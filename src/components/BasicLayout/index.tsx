import React, {FC, useState} from 'react';
import styles from './index.module.scss';
import ToolBar from '@/components/ToolBar';
import LoginDrawer from './components/LoginDrawer';
import {RouteConfig, renderRoutes} from 'react-router-config';

interface BasicLayoutProps {
    route?: RouteConfig
}

const BasicLayout: FC<BasicLayoutProps> = (props) => {
    const {route} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    console.log('route', route);
    return (
        <div className={styles.basic_layout}>
            <div className={styles.toolbar_wrapper}>
                <ToolBar isOpen={isOpen} setIsOpen={setIsOpen} isLogin={isLogin}/>
            </div>
            <div className={styles.login_drawer_wrapper}>
                <LoginDrawer isOpen={isOpen}/>
            </div>
            {
                route && renderRoutes(route.routes)
            }
        </div>
    )
}

export default BasicLayout;