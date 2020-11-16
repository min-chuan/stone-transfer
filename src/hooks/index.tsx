import React, {useEffect} from 'react';
import { render } from 'react-dom';

export const useClickOutside = (
        ref: React.MutableRefObject<HTMLElement | null>, 
        cb: (inside: boolean) => void
    ) => {
    const click_outside = (e: MouseEvent) => {
        // console.log('点击了外面');
        cb(false);
    }

    const click_inside = (e: MouseEvent) => {
        // console.log('点击了内部');
        cb(true);
        e.stopPropagation();
    }

    useEffect(() => {
        // 1. 监听外部点击
        document.addEventListener('click', click_outside)
        // 2. 监听内部点击
        if(ref.current){
            ref.current.addEventListener('click', click_inside)
        }
        // 3. 移除事件
        return () => {
            document.removeEventListener('click', click_outside);
            if(ref.current){
                ref.current.removeEventListener('click', click_inside);
            }
        }
    }, [])
}