import React, {FC, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import styles from './index.module.scss';
import {
    register_reson,
    login_header,
    qrcode
} from '@/config/img-url';

interface LoginDrawerProps {
    isOpen: boolean;
}

const LoginDrawer: FC<LoginDrawerProps> = (props) => {
    const {isOpen} = props;
    const [isFocus, setIsFocus] = useState(false);

    return (
        <CSSTransition
            in={isOpen}
            classNames="login-drawer-open"
            timeout={250}
        >
            <div className={styles.login_drawer}>
                <img className={styles.reason} src={register_reson}/>
                <div className={styles.login_form}>
                    <img className={styles.qrcode} src={qrcode}/>
                    <div className={styles.wechat}>微信登录</div>
                    <img className={styles.login_header} src={login_header}/>
                    <p className={styles.title}>登录/注册</p>
                    <div className={styles.form}>
                        <div className={styles.input}>
                            <input 
                                type="text" 
                                onFocus={() => {setIsFocus(true)}}
                                onBlur={() => {setIsFocus(false)}}
                            />
                            <CSSTransition
                                in={isFocus}
                                classNames="login-drawer-focus"
                                timeout={100}
                            >
                                <div className={styles.tip}>电子邮箱或手机</div>
                            </CSSTransition>
                        </div>
                        <div className={styles.next}>下一步</div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default LoginDrawer;