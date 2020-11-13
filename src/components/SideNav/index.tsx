import React, {FC, useState, useEffect} from 'react';
import styles from './index.module.scss';
import {useLocation, useHistory} from 'react-router-dom';
import {ACCOUNT, STORAGE, HISTORY, GIFT} from '@/router/routerConst';
import {
    logo48_2,
    cloud,
    history as history_img,
    gift,
} from '@/config/img-url';
import Abstract from './components/Abstract';

interface SideNavProps {

}

const SideNav: FC<SideNavProps> = (props) => {
    const {} = props;
    const history = useHistory();
    const location = useLocation();
    const [active, setActive] = useState<string>();

    useEffect(() => {
        console.log(location.pathname);
        setActive(location.pathname);
    }, [location])

    return (
        <div className={styles.sidenav}>
            <div className={styles.header}>
                <img src={logo48_2}/>
            </div>
            <ul className={styles.list}>
                <li className={`${active === STORAGE ? 'active' : ''}`} onClick={() => {history.push(STORAGE)}}>
                    <img src={cloud}/>
                    <span>我的云盘</span>
                </li>
                <li className={`${active === HISTORY ? 'active' : ''}`} onClick={() => {history.push(HISTORY)}}>
                    <img src={history_img}/>
                    <span>传输历史</span>
                </li>
                <li className={`${active === GIFT ? 'active' : ''}`} onClick={() => {history.push(GIFT)}}>
                    <img src={gift}/>
                    <span>邀请好友</span>
                </li>
            </ul>
            <div className={styles.abstract_wrapper}>
                <Abstract />
            </div>
        </div>
    )
}

export default SideNav;