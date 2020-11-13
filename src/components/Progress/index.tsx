import React, {FC} from 'react';
import styles from './index.module.scss';

interface ProgressProps {
    percentage: number;
    width?: number;
    className?: string;
}

const Progress: FC<ProgressProps> = (props) => {
    const {percentage, className, width = 100} = props;
    return (
        <div style={{width: width + 'px'}} className={`${styles.progress} ${className || ''}`}>
            <div style={{width: width * percentage / 100 + 'px'}} className={styles.rate}></div>
        </div>
    )
}

export default Progress;