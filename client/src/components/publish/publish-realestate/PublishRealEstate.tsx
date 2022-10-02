import { useReducer,useState } from 'react';

import './publish-realestate.scss';

import PublishCategory from './publish-category/PublishCategory';
import PublishAddress from './publish-address/PublishAddress';
import PublishProps from './publish-props/PublishProps';
import PublishPriceSizeDate from './publish-size-price-date/PublishPriceSizeDate';
import PublishPicturesVideos from './publish-pictures-videos/PublishPicturesVideos';
import PublishContact from './publish-contact/PublishContact';

import { NewAddReducer } from '../../../utils/reducer/NewAddReducer';

const PublishRealEstate = () => {

    const [form,dispatchForm] = useReducer(NewAddReducer,{
        formOne: {propertyKind: null, propertyState: null, city: null, street: null, houseNumber: null, floor: null, totalFloors: null, onPoles:null},
        formTwo: { roomNumber: null, parking: null, balcony: null, stateProps: [], about: null },
        formThree: { size: null, price: null, entranceDate: null, immediateEntrance: null },
        formFour: { file: null }
    });
    const [formStage,setFormStage] = useState({
        one: {active: true, check: false},
        two: {active: false, check: false},
        three: {active: false, check: false},
        four: {active: false, check: false},
        five: {active: false, check: false},
        six: {active: false, check: false}
    });

    return (
        <section className='publish-realestate-container'>
            <PublishCategory formStage={formStage} setFormStage={setFormStage}/>
            <PublishAddress formStage={formStage} setFormStage={setFormStage} dispatchForm={dispatchForm} />
            <PublishProps formStage={formStage} setFormStage={setFormStage} dispatchForm={dispatchForm}/>
            <PublishPriceSizeDate formStage={formStage} setFormStage={setFormStage} dispatchForm={dispatchForm}/>
            <PublishPicturesVideos formStage={formStage} setFormStage={setFormStage} dispatchForm={dispatchForm}/>
            <PublishContact formStage={formStage} setFormStage={setFormStage} form={form}/>
        </section>
    );
};

export default PublishRealEstate;