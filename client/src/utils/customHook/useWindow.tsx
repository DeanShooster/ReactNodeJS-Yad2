import { useState } from 'react';

const useWindow = () => {
    const [windowWidth,setWindowWidth] = useState<number>(window.innerWidth);
    window.addEventListener('resize',()=>setWindowWidth(window.innerWidth) );
    return windowWidth;
};

export default useWindow;