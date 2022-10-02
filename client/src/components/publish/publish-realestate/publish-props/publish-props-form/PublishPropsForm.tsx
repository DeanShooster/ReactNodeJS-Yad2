import {useState} from 'react';

import SelectRooms from './select-rooms/SelectRooms';
import ParkingBalcony from './parking-balcony/ParkingBalcony';
import StateProps from './state-props/StateProps';
import StateAbout from './state-about/StateAbout';

type Props = {dispatchForm: Function , setFormStage: Function, formStage: any};

const PublishPropsForm = (props: Props) => {

    const [propsForm,setPropsForm] = useState<any>({ roomNumber: 0, parking: 0, balcony: 0, stateProps: [], about: ''});

    const submitPropsFormHandler = (event: any) =>{
        event.preventDefault();        
        props.dispatchForm({type: 'FORM_2',payload: propsForm});
        const three = {active: false,check: true }, four = {active: true, check: props.formStage.four.check };
        props.setFormStage({...props.formStage,three,four});
    };

    const previousFormHandler = () => {
        const two = {active: true,check: props.formStage.two.check }, three = {active: false, check: props.formStage.three.check };
        props.setFormStage({...props.formStage,two,three});
    }

    return (
        <section className="publish-realestate-form-card publish-props-form-container">
            <form autoComplete="off" onSubmit={submitPropsFormHandler}>
                <SelectRooms propsForm={propsForm} setPropsForm={setPropsForm}/>
                <ParkingBalcony propsForm={propsForm} setPropsForm={setPropsForm}/>
                <StateProps propsForm={propsForm} setPropsForm={setPropsForm}/>
                <StateAbout propsForm={propsForm} setPropsForm={setPropsForm}/>
                <div className="publish-buttons-wrapper">
                    <span onClick={previousFormHandler}>חזרה</span>
                    <button>להמשיך לשלב הבא</button>
                </div>
            </form>
        </section>
    );
};

export default PublishPropsForm;