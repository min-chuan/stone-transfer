import React, {FC} from 'react';
import styles from './index.module.scss';
import { down, message, logo28} from '@/config/img-url';

interface ToolBarProps {
    className?: string;
}

const ToolBar: FC<ToolBarProps> = (props) => {
    const {className} = props;
    return (
        <div className={styles.toolbar}>
            <div className={styles.message}>我们两岁啦！感恩有你！</div>
            <ul className={styles.navlist}>
                <li className={styles.language}>中文/<span>EN</span></li>
                <li>更多<img src={down}/></li>
                <li>升级会员<span className={styles.dot}></span></li>
                <li>我的云盘</li>
                <li><img src={message}/></li>
            </ul>
            <div className={styles.logo}>
                <img src={logo28}/>
            </div>
        </div>
    )
}

export default ToolBar;