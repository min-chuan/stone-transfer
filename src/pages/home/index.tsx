import React, {FC, useState} from 'react';
import styles from './index.module.scss';
import AddFile from '@/components/AddFile';
import PictureSwitch from './components/PictureSwitch';
import {logo48} from '@/config/img-url';
import autograph from '@/images/autograph.png';
import question from '@/images/question.png';

interface HomeProps {

}

const Home: FC<HomeProps> = (props) => {
    const {} = props;
    return (
        <div className={styles.home}>
            <img className={styles.logo} src={logo48} alt="logo"/>
            <div className={styles.center}>
                <AddFile/>
            </div>
            <img className={styles.autograph} src={autograph}/>
            <div className={styles.copyright}>
                <img className={styles.question} src={question}/>
                <p>
                    <span>服务协议</span> &copy;2019-2020  xxxxx有限公司版权所有。ICP:  蜀ICP备xxxxxxxx号-x
                </p>
            </div>
            <PictureSwitch />
        </div>
    )
}

export default Home;