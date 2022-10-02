import {useState,useEffect} from 'react';

import OrangeCheckbox from "../../../../../../../../utils/orange-checkbox/OrangeCheckbox";

type Props = {dispatchForm: Function, immediateEntrance: {value: boolean}}

const ImmediateEntrance = (props: Props) => {

    const [checked,setChecked] = useState<boolean>(false);

    useEffect(()=>{setChecked(props.immediateEntrance.value)},[props.immediateEntrance.value]);

    const checkboxHandler = (event: any) => {
        if(event.target.value === 'immediate_entrance')
            props.dispatchForm({type:'IMMEDIATE_ENTRANCE', payload: {value: !checked}});
    }

    return (
        <div className="immediate-entrance-container" onClick={checkboxHandler}>
            <OrangeCheckbox value='immediate_entrance' checked={checked}/>
            <span>כניסה מיידית</span>
        </div>
    );
};

export default ImmediateEntrance;