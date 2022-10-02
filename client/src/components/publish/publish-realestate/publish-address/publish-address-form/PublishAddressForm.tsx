import {useState} from 'react';

import SelectPropKind from "./select-prop-kind/SelectPropKind";
import SelectPropState from "./select-prop-state/SelectPropState";
import InputLocation from "./input-location/InputLocation";

type Props = { dispatchForm: Function, setFormStage: Function, formStage: any };

const PublishAddressForm = (props: Props) => {

    const [addressForm,setAddressForm] = useState<any>({
        propertyKind: 'Apartment', 
        propertyState: 'Completely New',
        city: '', street: '', houseNumber: '',
        floor: '',totalFloors: '', onPoles: false
    });
    const [error,setError] = useState<boolean>(false);

    const submitAddressFromHandler = (event: any) =>{
        event.preventDefault();
        if(addressForm.city.length === 0 || addressForm.street.length === 0 || addressForm.houseNumber.length === 0 ||
            addressForm.floor.length === 0 || addressForm.totalFloors.length === 0 ){
                setError(true); return;
            }
        setError(false);
        props.dispatchForm({type: 'FORM_1', payload: addressForm});
        const two = {active: false, check: true}, three = {active: true, check: props.formStage.three.check };
        props.setFormStage({...props.formStage,two,three});
    }

    const previousFormHandler = () => {
        const one = {active: true, check: true}, two = {active: false, check: props.formStage.two.check };
        props.setFormStage({...props.formStage,one,two});
    }

    return (
        <section className="publish-realestate-form-card publish-address-form-container">
            <span>סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</span>
            <form autoComplete="off" onSubmit={submitAddressFromHandler} >
                <SelectPropKind addressForm={addressForm} setAddressForm={setAddressForm}/>
                <SelectPropState addressForm={addressForm} setAddressForm={setAddressForm}/>
                <InputLocation addressForm={addressForm} setAddressForm={setAddressForm}/>
                {error && <p className='error-msg' style={{textAlign: 'center'}}>חסר מידע</p>}
                <div className="publish-buttons-wrapper">
                    <span onClick={previousFormHandler}>חזרה</span>
                    <button>להמשיך לשלב הבא</button>
                </div>
            </form>
        </section>
    );
};

export default PublishAddressForm;