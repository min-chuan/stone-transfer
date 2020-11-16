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
    const searchInputRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const cb = (inside: boolean) => {
        if(inside){
            console.log('click')
            if(active){
                inputRef.current!.focus();
            }
        } else {

        }
    }

    useClickOutside(searchInputRef, cb);

    

    return (
        <div ref={searchInputRef} className={classnames(styles.search_input, className, {[styles.active]: active})}>
            <img className={styles.search_icon} src={search}/>
            <input ref={inputRef} {...inputProps}
                onFocus={(e) => {
                    console.log('focus')
                    setActive(true);
                    onFocus && onFocus(e);
                }}
            />
        </div>
    )
}

export default SearchInput;