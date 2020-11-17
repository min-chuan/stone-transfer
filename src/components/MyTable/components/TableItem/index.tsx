import React, {FC} from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import {
    upload_file,
    send,
    send_active,
    more,
    more_active,
    preview,
    download,
    move,
    rename,
    remove,
} from '@/config/img-url';

interface TableItemProps {

}

const TableItem: FC<TableItemProps> = (props) => {
    const {} = props;
    return (
        <div className={styles.table_item}>
            <div className={classnames(styles.check_box, styles.active)}>
                <i className="iconfont icon-iconfontcheck"></i>
            </div>
            <div className={styles.name}>
                <img src={upload_file} />
                <span>未命名.txt</span>
            </div>
            <div className={styles.time}>2020-11-17 11:00</div>
            <div className={styles.size}>
                <span>3.27MB</span>
                <div className={classnames(styles.img_wrapper, styles.more)}>
                    <img src={more}/>
                    <img src={more_active} />
                    <ul className={styles.menu}>
                        <li>
                            <img src={preview}/>
                            <span>预览</span>
                        </li>
                        <li>
                            <img src={download}/>
                            <span>下载</span>
                        </li>
                        <li>
                            <img src={send}/>
                            <span>分享</span>
                        </li>
                        <li>
                            <img src={move}/>
                            <span>移动</span>
                        </li>
                        <li>
                            <img src={rename}/>
                            <span>重命名文件</span>
                        </li>
                        <li>
                            <img src={remove}/>
                            <span>删除</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.img_wrapper}>
                    <img src={send}/>
                    <img src={send_active}/>
                </div>
            </div>
        </div>
    )
}

export default TableItem;