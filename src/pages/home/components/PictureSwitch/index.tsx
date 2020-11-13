import React, {FC, useState, useEffect, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './index.module.scss';
import bg1 from '@/images/bg-01.png';
import bg2 from '@/images/bg-02.png';
import bg3 from '@/images/bg-03.png';

interface PictureSwitchProps {

}

const imgs = [bg1, bg2, bg3]

const PictureSwitch: FC<PictureSwitchProps> = (props) => {
    const {} = props;
    const activeRef = useRef(0);
    const [active, setActive] = useState(0);
    let timer: any;

    useEffect(() => {
        // 3s 切换图片
        timer = setInterval(() => {
            let currentActive = activeRef.current + 1;
            if(currentActive === imgs.length){
                currentActive = 0;
            }
            setActive(() => currentActive);
            activeRef.current = currentActive;
        }, 3000);
        return () => {
            clearInterval(timer);
        }
    }, [])
    
    return (
        <div className={styles.picture_switch}>
            {
                imgs.map((img, index) => (
                    <CSSTransition
                        in={activeRef.current === index}
                        classNames="picture-switch"
                        timeout={500}
                    >
                        <img src={img} className={styles.picture} />
                    </CSSTransition>
                ))
            }
        </div>
    )
}

export default PictureSwitch;