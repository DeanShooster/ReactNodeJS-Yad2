import { useReducer, useState,Fragment } from 'react';

import './advanced-form.scss';

import CityStreet from './city-street/CityStreet';
import PropertyKind from './property-kind/PropertyKind';
import Rooms from './rooms/Rooms';
import Price from './price/Price';
import AdvancedSearchButton from './advanced-search-button/AdvancedSearchButton';
import SearchButtonOne from './search-button-one/SearchButtonOne';
import AdvancedSearchDropbox from './advanced-search-dropbox/AdvancedSearchDropbox';

import { AdvancedFormReducer } from '../../../../../utils/reducer/AdvancedFromReducer';
import SearchErrorModal from './search-error-modal/SearchErrorModal';
import { GetSearchStates } from '../../../../../api/UserRequests';

type Props = {setStates: Function};

const AdvancedForm = (props: Props) => {

    const [advancedSearchDropbox,setAdvancedSearchDropbox] = useState<boolean>(false);
    const [searchErrorModal,setSearchErrorModal] = useState<boolean>(false);
    const [form,dispatchForm] = useReducer(AdvancedFormReducer,{
        city: { value: null, valid: false },
        propertyKind: { values: {apartments: [], houses: [], others: [] } , valid: true },
        roomsRange: { value: { start: null, end: null } , valid: true },
        priceRange: { value: { start: null , end: null } , valid: true },
        stateProperties: { values: [] , valid: true },
        floorRange: { value: {start: null, end: null }, valid: true },
        sizeRange: { value: {start: null, end: null }, valid: true },
        entranceDate: { value: null },
        immediateEntrance: { value: false },
        openSearch: { value: null }
    });

    const advancedDropboxHandler = () => setAdvancedSearchDropbox(!advancedSearchDropbox);

    const submitSearch = async (event: any) => {
        event.preventDefault();
        if(!form.priceRange.valid) {setSearchErrorModal(true); return; }        
        setAdvancedSearchDropbox(false);
        const result = await GetSearchStates(form);        
        props.setStates(result);
    }

    return (
        <Fragment>
            <form className="advanced-form-container" onSubmit={submitSearch}>
                <CityStreet dispatchForm={dispatchForm}/>
                <PropertyKind state={form.propertyKind} dispatchForm={dispatchForm}/>
                <Rooms dispatchForm={dispatchForm}/>
                <Price dispatchForm={dispatchForm}/>
                <AdvancedSearchButton advancedDropboxHandler={advancedDropboxHandler} isAdvancedSearchActive={advancedSearchDropbox} formState={form}/>
                <SearchButtonOne/>
                { advancedSearchDropbox && <AdvancedSearchDropbox formState={form} dispatchForm={dispatchForm} /> }
            </form>
            {searchErrorModal && <SearchErrorModal closeModal={setSearchErrorModal}/>}
        </Fragment>
    );
};

export default AdvancedForm;