import React, {FC, useEffect, useState} from 'react';
import styles from './index.module.scss';
import {useHistory, useLocation} from 'react-router-dom';
import { down, message, logo28} from '@/config/img-url';
import { ACCOUNT } from '@/router/routerConst';

interface ToolBarProps {
    className?: string;
    isOpen: boolean;
    setIsOpen: Function;
    isLogin: boolean;
}

const ToolBar: FC<ToolBarProps> = (props) => {
    const {className, isOpen, setIsOpen, isLogin} = props;
    const history = useHistory();
    const location = useLocation();
    const [renderList, setRenderList] = useState<JSX.Element[]>();

    const handleClose = () => {
        if(!isLogin && isOpen){
            setIsOpen(false);
        }
        if(isLogin && location.pathname.startsWith('/i')){
            history.push('/');
        }
    }

    // 0-中文/En 1-关于我们 2-更多 3-注册/登录 4-X 5-升级会员 6-我的云盘 7-消息 8-logo 
    const listContent = [
        <li key="language" className={styles.language}>中文/<span>EN</span></li>,
        <li key="about">关于我们</li>,
        <li key="more" className={styles.more}>更多<img src={down}/></li>,
        <li key="login" onClick={() => {setIsOpen(true)}}>
            <span>注册/登录</span>
            <span className={styles.dot}></span>
        </li>,
        <li key="close" className={styles.close} onClick={handleClose}>
            <i className='iconfont icon-X'></i>
        </li>,
        <li key="vip" className={styles.vip}>升级会员<span className={styles.dot}></span></li>,
        <li key="cloud">我的云盘</li>,
        <li key="message" className={styles.message}><img src={message}/></li>,
        <li key="logo" className={styles.logo} onClick={() => {history.push(ACCOUNT)}}>
            <img src={logo28}/>
        </li>,
    ]

    useEffect(() => {
        let combination: number[] = [];
        if(!isLogin){
            if(isOpen){
                combination = [0, 1, 2, 4];
            } else {
                combination = [0, 1, 2, 3];
            }
        } else if(location.pathname.startsWith('/i')){
            combination = [0,2,5,7,8,4]
        } else if(location.pathname === '/'){
            combination = [0, 2, 5, 6, 7, 8]
        }
        const newRenderList = combination.map((item) => listContent[item]);
        setRenderList(newRenderList);
    }, [isOpen, isLogin, location])

    return (
        <div className={`${styles.toolbar} ${className || ''}`}>
            <div className={styles.tip}>我们两岁啦！感恩有你！</div>
            <ul className={styles.navlist}>
                {
                    renderList?.map(item => item)
                }
            </ul>
        </div>
    )
}

export default ToolBar;