import React, {FC} from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';


interface PageContainerProps {
    className?: string;
}


const PageContainer: FC<PageContainerProps> = (props) => {
    const {className, children} = props;


    return (
        <div className={classnames(styles.page_container, className)}>
            {children}
        </div>
    )
}


export default PageContainer;