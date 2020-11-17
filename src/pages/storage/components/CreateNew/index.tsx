import React, {FC} from 'react';
import { plus } from '@/config/img-url';
import styles from './index.module.scss';
import classnames from 'classnames';
import {
    upload_file,
    upload_folder,
    new_folder
} from '@/config/img-url';

interface CreateNewProps {
    
}

const CreateNew: FC<CreateNewProps> = (props) => {
    const {} = props;
    return (
        <div className={styles.create_new} >
            <div className={styles.inner} >
                <div className={styles.btn} >
                    <img src={plus} />
                    <span>新建</span>
                </div>
                <ul className={classnames(styles.list)} >
                    <li>
                        <img src={upload_file} />
                        <span>上传文件</span>
                    </li>
                    <li>
                        <img src={upload_folder} />
                        <span>上传文件夹</span>
                    </li>
                    <li>
                        <img src={new_folder} />
                        <span>新建文件夹</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CreateNew;