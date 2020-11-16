import React, {FC, useState} from 'react';
import styles from './index.module.scss';
import SearchSelect from '../../components/SearchSelect'
import PageConatiner from '@/components/PageContainer';


interface StorageProps {

}

const Storage: FC<StorageProps> = (props) => {
    const {} = props;

    return (
        <PageConatiner className={styles.storage}>
            <SearchSelect />
        </PageConatiner>
    )
}

export default Storage;