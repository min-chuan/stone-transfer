import React, {FC, useEffect, useState, useRef} from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import { search } from '@/config/img-url';
import { useClickOutside } from '@/hooks';

interface SearchInputProps {
    className?: string;
    [propName: string]: any;
}

const SearchInput: FC<SearchInputProps> = (props) => {
    const {className, onFocus, ...inputProps} = props;
    const [active, setActive] = useState(false);
    const activeRef = useRef(false);
    const searchInputRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // 1. 聚焦input, input添加阴影，显示下拉框 // onFocus, 设置active=true
    // 2. 点击SearchInput不会影响input的聚焦  // 如果clickInside且active=true, 触发input聚焦事件
    // 3. 点击SerachInput外边，取消input阴影，隐藏下拉框 // 如果clickOutside, 设置active=false
    
    const cb = (inside: boolean) => {
        console.log('activeRef.current',  activeRef.current);
        
        if(inside){
            if(activeRef.current){
                inputRef.current!.focus();
            }
        } else {
            activeRef.current = false;
            setActive(false);
        }
    }

    useClickOutside(searchInputRef, cb);

    

    return (
        <div ref={searchInputRef} className={classnames(styles.search_input, className, {[styles.active]: activeRef.current})}>
            <img className={styles.search_icon} src={search}/>
            <input ref={inputRef} {...inputProps}
                onFocus={(e) => {
                    activeRef.current = true;
                    setActive(true);
                    onFocus && onFocus(e);
                }}
                onBlur={() => {
                    console.log('blur')
                }}
            />
        </div>
    )
}

export default SearchInput;