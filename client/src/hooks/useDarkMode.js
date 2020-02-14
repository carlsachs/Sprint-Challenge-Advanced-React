import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = ( key, initialValue ) => {
    const [ darkMode, setDarkMode ] = useLocalStorage( key, initialValue );
    useEffect(()=>{
        // darkMode ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode') 

        if (darkMode){
            return document.querySelector('body').classList.add('dark-mode')
        }else {
            return document.querySelector('body').classList.remove('dark-mode')
        }
    },[darkMode])


    return [ darkMode, setDarkMode ]
}

export default useDarkMode;