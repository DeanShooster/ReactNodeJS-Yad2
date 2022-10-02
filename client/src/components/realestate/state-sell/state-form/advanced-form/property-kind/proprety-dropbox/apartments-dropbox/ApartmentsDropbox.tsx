import { useState,useEffect } from "react";
import IfExistRemoveOtherwisePush from "../../../../../../../../utils/functions/IfExistRemoveOtherwisePush";

import OrangeCheckbox from "../../../../../../../../utils/orange-checkbox/OrangeCheckbox";

type Props = {checkedAll: boolean,dispatchForm: Function, checked: string[]};

const ApartmentsDropbox = (props: Props) => {

    const [checked,setChecked] = useState<string[]>([]);

    useEffect(()=>{ setChecked(props.checked); },[props.checked]);

    const checkHandler = (event: any) =>{
        if(event.target.value === 0 || event.target.value === undefined) return;
        const checkboxes = ['apartment','garden_apartment','penthouse','duplex','holiday_apartment','basement','triplex','studio','studio_loft'];
        if(checkboxes.includes(event.target.value)){
            const finalCheckboxes = IfExistRemoveOtherwisePush(event.target.value, [...checked]);
            setChecked(finalCheckboxes); 
            props.dispatchForm({type: 'PROPERTY_KIND', payload: {value: finalCheckboxes}, option: 'APARTMENTS'});
        }
    }

    return (
        <ul className='dropbox-list' onClick={checkHandler}>
            <li>
                <OrangeCheckbox value='apartment' checked={props.checkedAll || checked.includes('apartment')}/>
                <span>דירה</span>
            </li>
            <li>
                <OrangeCheckbox value='garden_apartment' checked={props.checkedAll || checked.includes('garden_apartment')}/>
                <span>דירת גן</span>
            </li>
            <li>
                <OrangeCheckbox value='penthouse' checked={props.checkedAll || checked.includes('penthouse')}/>
                <span>גג/פנטהאוז</span>
            </li>
            <li>
                <OrangeCheckbox value='duplex' checked={props.checkedAll || checked.includes('duplex')}/>
                <span>דופלקס</span>
            </li>
            <li>
                <OrangeCheckbox value='holiday_apartment' checked={props.checkedAll || checked.includes('holiday_apartment')}/>
                <span>דירת נופש</span>
            </li>
            <li>
                <OrangeCheckbox value='basement' checked={props.checkedAll || checked.includes('basement')}/>
                <span>מרתף/פרטר</span>
            </li>
            <li>
                <OrangeCheckbox value='triplex' checked={props.checkedAll || checked.includes('triplex')}/>
                <span>טריפלקס</span>
            </li>
            <li>
                <OrangeCheckbox value='studio' checked={props.checkedAll || checked.includes('studio')}/>
                <span>יחידת דיור</span>
            </li>
            <li style={ {borderBottom: 'none'} }>
                <OrangeCheckbox value='studio_loft' checked={props.checkedAll || checked.includes('studio_loft')}/>
                <span>סטודיו/לופט</span>
            </li>
        </ul>
    );
};

export default ApartmentsDropbox;