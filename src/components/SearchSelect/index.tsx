import React, {FC, useState} from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import SerachInput from '@/components/SearchInput';

import {
    search,
    img,
    pdf,
    xls,
    word,
    ppt,
    video,
    radio,
} from '@/config/img-url';

interface SearchSelectProps {
    
}

const data = [
    {
        img: img,
        text: '图片',
    },
    {
        img: pdf,
        text: 'PDF文档',
    },
    {
        img: xls,
        text: 'XLS文档',
    },
    {
        img: word,
        text: 'WORD文档',
    },
    {
        img: ppt,
        text: 'PPT文档',
    },
    {
        img: video,
        text: '视频',
    },
    {
        img: radio,
        text: '音频',
    },
]

const SearchSelect: FC<SearchSelectProps> = (props) => {
    const {} = props;
    const [active, setActive] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div className={styles.search}>
            <SerachInput 
                onFocus={() => {setActive(true)}} 
                onClickOutside={() => {setActive(false)}}
                placeholder={value ? '类型：' + value : '搜索'}
            />
            <ul className={classnames(styles.search_list, {[styles.visible]: active})}>
                {
                    data.map(item => (
                        <li onClick={() => { setValue(item.text)}}>
                            <img src={item.img}/>
                            <span>{item.text}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchSelect;