import React, {FC, useState} from 'react';
import {view_01, view_02} from '@/config/img-url';
import styles from './index.module.scss';
import classnames from 'classnames';

interface ViewSwitchProps {

}

const ViewSwitch: FC<ViewSwitchProps> = (props) => {
    const {} = props;
    const [mode, setMode] = useState(0);
    
    return (
        <div className={styles.view_switch} onClick={() => {setMode(mode ? 0 : 1)}}>
            <img src={view_01} className={classnames({[styles.visible]: mode === 0})}/>
            <img src={view_02} className={classnames({[styles.visible]: mode === 1})}/>
        </div>
    )
}

export default ViewSwitch;