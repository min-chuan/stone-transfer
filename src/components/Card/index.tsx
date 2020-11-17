import React, {FC, ReactElement} from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';


interface CardProps {
    className?: string;
    title?: ReactElement | string;
}


const Card: FC<CardProps> = (props) => {
    const {className, children, title} = props;


    return (
        <div className={classnames(styles.card, className)}>
            <div className={styles.title}>
                {title}
            </div>
            {children}
        </div>
    )
}


export default Card;