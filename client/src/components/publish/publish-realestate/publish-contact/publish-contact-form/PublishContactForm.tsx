import {useState} from 'react';
import { useNavigate } from 'react-router';
import { PublishRealestate } from '../../../../../api/UserRequests';

import InputSVG from "../../../../../utils/input-svg/InputSVG";
import OrangeCheckbox from "../../../../../utils/orange-checkbox/OrangeCheckbox";

type Props = {formStage: any, setFormStage: Function, form: any};

const PublishContactForm = (props: Props) => {

    const [contact,setContact] = useState<{name: string, phone: string, email: string, approve: boolean}>({ name: '', phone: '', email: '', approve: false });
    const [approveCheckbox,setApproveCheckbox] = useState<boolean>(false);
    const navigate = useNavigate();

    const publishFormHandler = async (event: any) =>{
        event.preventDefault();
        if(!approveCheckbox) return;
        const publish = { 
            PropertyKind: props.form.formOne.propertyKind,
            PropertyState: props.form.formOne.propertyState,
            City: props.form.formOne.city, Street: props.form.formOne.street, HouseNumber: props.form.formOne.houseNumber/1,
            Floor: props.form.formOne.floor/1, TotalFloors: props.form.formOne.totalFloors/1,
            Price: props.form.formThree.price/1, Parking: props.form.formTwo.parking, Balcony: props.form.formTwo.balcony,
            RoomNumber: props.form.formTwo.roomNumber / 1,
            Elevator: props.form.formTwo.stateProps.includes('Elevator'),
            AC: props.form.formTwo.stateProps.includes('AC'),
            TadiranAC: props.form.formTwo.stateProps.includes('TadiranAC'),
            Mamad: props.form.formTwo.stateProps.includes('Mamad'),
            Bars: props.form.formTwo.stateProps.includes('Bars'),
            Warehouse: props.form.formTwo.stateProps.includes('Warehouse'),
            DisabledAccess: props.form.formTwo.stateProps.includes('DisabledAccess'),
            Renovated: props.form.formTwo.stateProps.includes('Renovated'),
            Furnished: props.form.formTwo.stateProps.includes('Furnished'),
            Exclusive: props.form.formTwo.stateProps.includes('Exclusive'),
            OnPoles: props.form.formOne.onPoles,
            KosherKitchen: props.form.formTwo.stateProps.includes('KosherKitchen'),
            SunHeatedWaterTank: props.form.formTwo.stateProps.includes('SunHeatedWaterTank'),
            Size: props.form.formThree.size/1,
            EntranceDate: props.form.formThree.entranceDate, ImmediateEntance: props.form.formThree.immediateEntrance,
            About: props.form.formTwo.about, AboutFurniture: '',
            Owner: contact.email
        }        
        const result = await PublishRealestate(publish,localStorage.getItem('token'));
        navigate('/realestate/sell');
    }

    const contactChangeHandler = (event: any) =>{
        switch(event.target.placeholder){
            case 'שם מוכר הנכס': { setContact({...contact,name: event.target.value}); break; }
            case 'טלפון מוכר הנכס': { setContact({...contact,phone: event.target.value}); break; }
            case 'אימייל': { setContact({...contact,email: event.target.value}); break; }
        }
        if(event.target.value === 'regulation'){
            setContact({...contact,approve: !approveCheckbox});
            setApproveCheckbox(!approveCheckbox);
        }
    }

    const previousFormHandler = () => {
        const six = {active: false, check: props.formStage.six.check}, five = {active: true, check: props.formStage.five.check };
        props.setFormStage({...props.formStage,six,five});
    }

    return (
        <section className="publish-realestate-form-card">
            <p>רגע לפני שמפרסמים את המודעה, נבדוק שפרטי הקשר נכונים</p>
            <form autoComplete="off" onSubmit={publishFormHandler}>
                <div className="publish-form-div-wrapper" onChange={contactChangeHandler}>
                    <label>שם איש קשר*</label>
                    <InputSVG placeholder="שם מוכר הנכס" type='text'/>
                </div>
                <div className="publish-form-div-wrapper disable-arrows-number-input" onChange={contactChangeHandler}>
                    <label>טלפון ראשי*</label>
                    <InputSVG placeholder="טלפון מוכר הנכס" type='number'/>
                </div>
                <hr className="publish-contact-hr"/>
                <div className="publish-form-div-wrapper" onChange={contactChangeHandler}>
                    <label>דוא"ל</label>
                    <InputSVG placeholder="אימייל" type='text'/>
                </div>
                <div className="regulation-checkbox-container">
                    <div className="regulation" onClick={contactChangeHandler}>
                        <OrangeCheckbox value='regulation' checked={approveCheckbox}/>
                        <span>קראתי ואישרת את <span>התקנון</span>*</span>
                    </div>
                    <div className="regulation">
                        <OrangeCheckbox value='update' checked={false}/>
                        <span>אשמח לקבל עדכונים, הצעות או טיפים לשיפור המודעה שלי לפרטי החשבון או לפרטי המודעה</span>
                    </div>
                </div>
                <div className="publish-buttons-wrapper advertise-container">
                    <span onClick={previousFormHandler}>חזרה</span>
                    <button>פרסם מודעה</button>
                </div>
            </form>
        </section>
    );
};

export default PublishContactForm;