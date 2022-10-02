import {useState} from 'react';

import InputSVG from "../../../../../../utils/input-svg/InputSVG";
import OrangeCheckbox from "../../../../../../utils/orange-checkbox/OrangeCheckbox";

type Props = {setSizePriceForm: Function, sizePriceForm: any};

const PublishDateEntrance = (props: Props) => {

    const [checkbox,setCheckbox] = useState({immediate: false, versatile: false});

    const inputHandler = (event: any)=>{        
        switch(event.target.value){
            case 'מיידי':{
                props.setSizePriceForm({...props.sizePriceForm, immediateEntrance: !checkbox.immediate});
                setCheckbox({immediate: !checkbox.immediate, versatile: false}); break;
            }
            case 'גמיש': {
                props.setSizePriceForm({...props.sizePriceForm, immediateEntrance: false});
                setCheckbox({immediate: false, versatile: !checkbox.versatile}); break;
            }
        }
        if(event.target.placeholder === 'DD/MM/YYYY') props.setSizePriceForm({...props.sizePriceForm,entranceDate: new Date(event.target.value)});
    }

    return (
        <div className="publish-form-div-wrapper">
            <label>תאריך כניסה</label>
            <div className="date-check-box-container" onChange={inputHandler}>
                <InputSVG placeholder="DD/MM/YYYY" type="date"/>
                <div className="date-checkbox">
                    <div className="checkbox">
                        <OrangeCheckbox value='מיידי' checked={checkbox.immediate}/>
                        <label>מיידי</label>
                    </div>
                    <div className="checkbox">
                        <OrangeCheckbox value='גמיש' checked={checkbox.versatile}/>
                        <label>גמיש</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublishDateEntrance;