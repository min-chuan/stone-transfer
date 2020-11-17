import React, {FC} from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import {
    check_01,
    check_02,
    down_arrow,
} from '@/config/img-url';

interface TableHeaderProps {

}

const TableHeader: FC<TableHeaderProps> = (props) => {
    const {} = props;
    return (
        <div className={styles.table_header}>
            <div className={classnames(styles.check_box, styles.active)}>
                <i className="iconfont icon-iconfontcheck"></i>
            </div>
            <div className={classnames(styles.item, styles.name)}>文件名称<img src={down_arrow}/></div>
            <div className={classnames(styles.item, styles.time)}>上传时间<img src={down_arrow}/></div>
            <div className={classnames(styles.item, styles.size)}>文件大小<img src={down_arrow}/></div>
        </div>
    )
}

export default TableHeader;