import React, {FC} from 'react';
import SideNav from '@/components/SideNav';
import {CSSTransition} from 'react-transition-group';
import styles from './index.module.scss';
import {renderRoutes, RouteConfig} from 'react-router-config';

interface BasicLayoutProps {
    route?: RouteConfig;
}

const BasicLayout: FC<BasicLayoutProps> = (props) => {
    const {
        route
    } = props;
    return (
        <div className={styles.basic}>
            <SideNav />
            <div className={styles.page}>
                {
                    route && renderRoutes(route.routes)
                }
            </div>
        </div>
    )
}

export default BasicLayout;