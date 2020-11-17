import React, {FC, useState} from 'react';
import styles from './index.module.scss';
import SearchSelect from '../../components/SearchSelect'
import PageConatiner from '@/components/PageContainer';
import CreateNew from './components/CreateNew';
import ViewSwitch from './components/ViewSwitch';
import MyTable from '@/components/MyTable';



interface StorageProps {

}

const Storage: FC<StorageProps> = (props) => {
    const {} = props;

    return (
        <PageConatiner className={styles.storage}>
            <SearchSelect />
            <div className={styles.toolbar}>
                <CreateNew />
                <ViewSwitch />
            </div>
            <MyTable />
        </PageConatiner>
    )
}

export default Storage;