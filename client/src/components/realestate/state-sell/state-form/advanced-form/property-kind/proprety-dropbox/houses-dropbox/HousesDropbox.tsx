import {useState,useEffect} from 'react';

import IfExistRemoveOtherwisePush from '../../../../../../../../utils/functions/IfExistRemoveOtherwisePush';
import OrangeCheckbox from "../../../../../../../../utils/orange-checkbox/OrangeCheckbox";

type Props = {checkedAll: boolean,dispatchForm: Function, checked: string[]};

const HousesDropbox = (props: Props) => {

    const [checked,setChecked] = useState<string[]>([]);

    useEffect(()=>{ setChecked(props.checked); },[props.checked]);

    const checkHandler = (event: any) =>{
        if(event.target.value === 0 || event.target.value === undefined) return;
        const checkboxes = ['private_house','farm'];
        if(checkboxes.includes(event.target.value)){
            const finalCheckboxes = IfExistRemoveOtherwisePush(event.target.value,[...checked]);
            setChecked(finalCheckboxes);
            props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: finalCheckboxes}, option: 'HOUSES'});
        }
    }

    return (
        <ul className='dropbox-list' onClick={checkHandler}>
            <li>
                <OrangeCheckbox value='private_house' checked={props.checkedAll || checked.includes('private_house')}/>
                <span>בית פרטי/קוט'ג</span>
            </li>
            <li>
                <OrangeCheckbox value='farm' checked={props.checkedAll || checked.includes('farm')}/>
                <span>משק חקלאי/נחלה</span>
            </li>
        </ul>
    );
};

export default HousesDropbox;