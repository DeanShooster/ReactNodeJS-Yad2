import {useState,useEffect} from 'react';

import IfExistRemoveOtherwisePush from '../../../../../../../utils/functions/IfExistRemoveOtherwisePush';
import OrangeCheckbox from "../../../../../../../utils/orange-checkbox/OrangeCheckbox";

type Props = { dispatchForm: Function , stateProperties: {values: string[], valid: boolean } };

const ApartmentProps = (props: Props) => {

    const [checked,setChecked] = useState<string []>([]);

    useEffect(()=>{ setChecked(props.stateProperties.values); },[props.stateProperties.values]);

    const checkboxHandler = (event: any) => {
        const checkboxes = ['parking','elevator','AC','balcony','mamad','bars','warehouse','disabled_access','renovated','furnished','exclusive'];
        if(checkboxes.includes(event.target.value)){
            const finalCheckboxes = IfExistRemoveOtherwisePush(event.target.value,[...checked]);
            setChecked(finalCheckboxes);
            props.dispatchForm({type: 'STATE_PROPERTIES', payload: {value: finalCheckboxes} });
        }
    }

    return (
        <div className="apartment-props-container" onClick={checkboxHandler}>
            <h3>מאפייני דירה</h3>
            <div className="props-container">
                <div>
                    <OrangeCheckbox value='parking' checked={checked.includes('parking')}/>
                    <span>חניה</span>
                </div>
                <div>
                    <OrangeCheckbox value='elevator' checked={checked.includes('elevator')}/>
                    <span>מעלית</span>
                </div>
                <div>
                    <OrangeCheckbox value='AC'checked={checked.includes('AC')}/>
                    <span>מיזוג</span>
                </div>
                <div>
                    <OrangeCheckbox value='balcony' checked={checked.includes('balcony')}/>
                    <span>מרפסת</span>
                </div>
                <div>
                    <OrangeCheckbox value='mamad' checked={checked.includes('mamad')}/>
                    <span>ממ"ד</span>
                </div>
                <div>
                    <OrangeCheckbox value='bars' checked={checked.includes('bars')}/>
                    <span>סורגים</span>
                </div>
                <div>
                    <OrangeCheckbox value='warehouse' checked={checked.includes('warehouse')}/>
                    <span>מחסן</span>
                </div>
                <div>
                    <OrangeCheckbox value='disabled_access' checked={checked.includes('disabled_access')}/>
                    <span>גישה לנכים</span>
                </div>
                <div>
                    <OrangeCheckbox value='renovated' checked={checked.includes('renovated')}/>
                    <span>משופצת</span>
                </div>
                <div>
                    <OrangeCheckbox value='furnished' checked={checked.includes('furnished')}/>
                    <span>מרוהטת</span>
                </div>
                <div>
                    <OrangeCheckbox value='exclusive' checked={checked.includes('exclusive')}/>
                    <span>בבלעדיות</span>
                </div>
            </div>
        </div>
    );
};

export default ApartmentProps;