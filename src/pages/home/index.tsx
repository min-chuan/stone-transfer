import React, {FC} from 'react';
import styles from './index.module.scss';
import ToolBar from '@/components/ToolBar';

interface HomeProps {

}

const Home: FC<HomeProps> = (props) => {
    const {} = props;
    return (
        <div>
            <ToolBar />
        </div>
    )
}

export default Home;