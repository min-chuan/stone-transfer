import React, {FC, useState} from 'react';
import styles from './index.module.scss';
import { CSSTransition } from 'react-transition-group';

interface AddFileProps {
    className?: string;
}

const AddFile: FC<AddFileProps> = (props) => {
    const {className} = props;
    const [ leftActive, setLeftActive] = useState(false);
    const [ rightActive, setRightActive] = useState(false);
    const [ text, setText] = useState('添加文件');

    return (
        <CSSTransition
            in={leftActive}
            classNames="addfile-left"
            timeout={500}
            onEnter={() => {setText('哞哞哞～')}}
            onEntered={() => {setText('添加文件')}}
            onExit={() => {setText('添加文件')}}
        >
            <CSSTransition
                in={rightActive}
                classNames="addfile-right"
                timeout={500}
            >
                <div className={styles.addfile}>
                    <div className={styles.inner}>
                            <div 
                                className={styles.button} 
                                onMouseEnter={() => setLeftActive(true)}
                                onMouseLeave={() => setLeftActive(false)}
                            >
                                <div className={styles.plus}>+</div>
                                <div className={styles.text}>
                                    <p className={styles.maintext}>{text}</p>
                                    <p className={styles.subtext}>或者添加文件夹</p>
                                </div>
                            </div>
                        <div 
                            className={styles.receive}
                            onMouseEnter={() => setRightActive(true)}
                            onMouseLeave={() => setRightActive(false)}
                        >接收文件</div>
                    </div>
                </div>
            </CSSTransition>
        </CSSTransition>

    )
}

export default AddFile;