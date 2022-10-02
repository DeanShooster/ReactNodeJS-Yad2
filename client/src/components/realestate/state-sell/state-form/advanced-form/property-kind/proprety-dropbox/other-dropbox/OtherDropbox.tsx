import {useState,useEffect} from 'react';

import IfExistRemoveOtherwisePush from '../../../../../../../../utils/functions/IfExistRemoveOtherwisePush';
import OrangeCheckbox from "../../../../../../../../utils/orange-checkbox/OrangeCheckbox";

type Props = {checkedAll: boolean,dispatchForm: Function, checked: string[]};

const OtherDropbox = (props: Props) => {

    const [checked,setChecked] = useState<string[]>([]);

    useEffect(()=>{ setChecked(props.checked); },[props.checked]);

    const checkHandler = (event: any) =>{
        if(event.target.value === 0 || event.target.value === undefined) return;
        const checkboxes = ['fields','nursing_home','tower','warehouse','parking','purchase_group','general'];
        if(checkboxes.includes(event.target.value)){
            const finalCheckboxes = IfExistRemoveOtherwisePush(event.target.value,[...checked]);
            setChecked(finalCheckboxes);
            props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: finalCheckboxes}, option: 'OTHERS'});
        }
    }

    return (
        <ul className='dropbox-list' onClick={checkHandler}>
            <li>
                <OrangeCheckbox value='fields' checked={props.checkedAll || checked.includes('fields')}/>
                <span>מגרשים</span>
            </li>
            <li>
                <OrangeCheckbox value='nursing_home' checked={props.checkedAll || checked.includes('nursing_home')}/>
                <span>דיור מוגן</span>
            </li>
            <li>
                <OrangeCheckbox value='tower' checked={props.checkedAll || checked.includes('tower')}/>
                <span>בניין מגורים</span>
            </li>
            <li>
                <OrangeCheckbox value='warehouse' checked={props.checkedAll || checked.includes('warehouse')}/>
                <span>מחסן</span>
            </li>
            <li>
                <OrangeCheckbox value='parking' checked={props.checkedAll || checked.includes('parking')}/>
                <span>חניה</span>
            </li>
            <li>
                <OrangeCheckbox value='purchase_group' checked={props.checkedAll || checked.includes('purchase_group')}/>
                <span>קב' רכישה</span>
            </li>
            <li>
                <OrangeCheckbox value='general' checked={props.checkedAll || checked.includes('general')}/>
                <span>כללי</span>
            </li>
        </ul>
    );
};

export default OtherDropbox;