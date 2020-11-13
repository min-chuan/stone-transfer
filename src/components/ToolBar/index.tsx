import React, {FC, useState} from 'react';
import styles from './index.module.scss';
import { down, message, logo28} from '@/config/img-url';

interface ToolBarProps {
    className?: string;
    isOpen: boolean;
    setIsOpen: Function;
}

const ToolBar: FC<ToolBarProps> = (props) => {
    const {className, isOpen, setIsOpen} = props;
    const [isLogin, setLogin] = useState(true);
    return (
        <div className={styles.toolbar}>
            <div className={styles.tip}>我们两岁啦！感恩有你！</div>
            <ul className={styles.navlist}>
                <li className={styles.language}>中文/<span>EN</span></li>
                <li>关于我们</li>
                <li className={styles.more}>更多<img src={down}/></li>
                {
                    isLogin ? (
                        <>
                            <li className={styles.vip}>升级会员<span className={styles.dot}></span></li>
                            <li>我的云盘</li>
                            <li className={styles.message}><img src={message}/></li>
                        </>
                    ) : (
                        <li 
                            className={styles.vip} 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {
                                isOpen ? (
                                        <i className={`iconfont icon-X ${styles.close}`}></i>
                                    ) : (
                                        <i>
                                            <span>注册/登录</span>
                                            <span className={styles.dot}></span>
                                        </i>
                                    )
                            }
                        </li>
                    )
                }
            </ul>
            {
                isLogin && (
                    <div className={styles.logo}>
                        <img src={logo28}/>
                    </div>
                )
            }
        </div>
    )
}

export default ToolBar;