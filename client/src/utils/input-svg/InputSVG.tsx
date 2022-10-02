import { useRef, useState } from 'react';

import {VscChromeClose} from 'react-icons/vsc';

type Props = {placeholder: string, type: string }

const InputSVG = ( props: Props ) => {

    const [showClear,setShowClear] = useState<boolean>(false);
    const inputEl = useRef<HTMLInputElement>(null);

    const onChangeHandler = (event: any) => {
        if( event.target.value.length > 0 ) setShowClear(true);
        else setShowClear(false);
    }

    const onClearClickHandler = () => {
        const input = inputEl.current;
        input!.value = ''; setShowClear(false);
    }

    return (
        <div>
            <input ref={inputEl} autoComplete='off' placeholder={props.placeholder} type={props.type} onChange={onChangeHandler}/>
            {showClear && <VscChromeClose className='input-icon' onClick={onClearClickHandler}/>}
        </div>
    );
};

export default InputSVG;