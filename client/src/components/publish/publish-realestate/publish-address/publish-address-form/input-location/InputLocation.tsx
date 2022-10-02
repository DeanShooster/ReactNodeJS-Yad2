import {Fragment,useState} from 'react';

import InputSVG from "../../../../../../utils/input-svg/InputSVG";
import OrangeCheckbox from "../../../../../../utils/orange-checkbox/OrangeCheckbox";

type Props = { addressForm: any, setAddressForm: Function};

const InputLocation = (props: Props) => {

    const [onPoles,setOnPoles] = useState<boolean>(false);

    const checkboxHandler = (event: any) => { 
        if(event.target.value === 'onPoles'){
            props.setAddressForm({...props.addressForm, onPoles: !onPoles});
            setOnPoles(!onPoles);
        }
    }

    const inputHandler = (event: any) => {
        switch(event.target.placeholder){
            case 'איפה נמצא הנכס?':{ props.setAddressForm({...props.addressForm, city: event.target.value}); break; }
            case 'הכנסת שם הרחוב': { props.setAddressForm({...props.addressForm, street: event.target.value}); break; }
            case '': { props.setAddressForm({...props.addressForm, houseNumber: event.target.value}); break; }
            case 'הכנס מספר קומה' : { props.setAddressForm({...props.addressForm, floor: event.target.value}); break; }
            case 'הכנס סהכ קומות': { props.setAddressForm({...props.addressForm, totalFloors: event.target.value}); break; }
        }
    }

    return (
        <Fragment>
            <div className="publish-form-div-wrapper" onChange={inputHandler}>
                <label>ישוב*</label>
                <InputSVG placeholder="איפה נמצא הנכס?" type='text'/>
            </div>
            <div className="publish-form-div-wrapper" onChange={inputHandler}>
                <label>רחוב</label>
                <InputSVG placeholder="הכנסת שם הרחוב" type='text'/>
                <span className="span-notes">המידע הזה מגיע מגוף ממשלתי, אם הרחוב שלך לא מופיע מומלץ לבחור רחוב קרוב אליך.</span>
            </div>
            <div className="publish-form-div-wrapper house-number-input-wrapper disable-arrows-number-input" onChange={inputHandler}>
                <label>מס' בית</label>
                <InputSVG placeholder="" type='number'/>
            </div>
            <div className="publish-floors-container disable-arrows-number-input" >
                <div className="publish-form-div-wrapper floor-number-wrapper" onChange={inputHandler}>
                    <label>קומה*</label>
                    <InputSVG placeholder="הכנס מספר קומה" type='number'/>
                </div>
                <div className="publish-form-div-wrapper floor-number-wrapper" onChange={inputHandler}>
                    <label>סה"כ קומות בבניין*</label>
                    <InputSVG placeholder="הכנס סהכ קומות" type='number'/>
                </div>
                <div className="floor-checkbox-wrapper" onClick={checkboxHandler}>
                    <OrangeCheckbox value='onPoles' checked={onPoles}/>
                    <span>על עמודים</span>
                </div>
            </div>
            <div className="publish-form-div-wrapper">
                <label>שכונה</label>
                <InputSVG placeholder="" type='text'/>
            </div>
        </Fragment>
    );
};

export default InputLocation;