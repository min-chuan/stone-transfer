import React, {FC} from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';


interface ButtonProps {
    className?: string;
    onClick?: () => void
}


const Button: FC<ButtonProps> = (props) => {
    const {className, children, onClick} = props;


    return (
        <div onClick={onClick} className={classnames(styles.button, className)}>{children}</div>
    )
}


export default Button;