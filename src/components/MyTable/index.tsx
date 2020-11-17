import React, {FC} from 'react';
import styles from './index.module.scss';
import TableHeader from './components/TableHeader';
import TableItem from './components/TableItem';


interface MyTableProps {

}

const MyTable: FC<MyTableProps> = (props) => {
    const {} = props;
    return (
        <div className={styles.mytable}>
            <TableHeader />
            <TableItem />
        </div>
    )
}

export default MyTable;