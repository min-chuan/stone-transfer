import React, {FC} from 'react';
import Progress from '@/components/Progress';
import styles from './index.module.scss';
import {setting} from '@/config/img-url';

interface AbstractProps {

}

const Abstract: FC<AbstractProps> = (props) => {
    const {} = props;
    return (
        <div className={styles.abstract}>
            <div className={styles.copacity}>
                <p>我的：0.00 KB/<a href="#">5.00 GB</a></p>
                <div className={styles.expand}>
                    <Progress percentage={10} width={168}/>
                    <a href="#">扩容</a>
                </div>
            </div>
            <div className={styles.setting}>
                <img src={setting} />
                <div className={styles.tip}>
                    <p>账号：免费 <a href="#">立即升级</a><span className="dot"></span></p>
                    <p>剩余：无</p>
                </div>
            </div>
        </div>
    )
}

export default Abstract;