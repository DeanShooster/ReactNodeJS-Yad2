
import './advanced-search-dropbox.scss';

import ApartmentGeneralInfo from './apartment-general-info/ApartmentGeneralInfo';

import ApartmentProps from './apartment-props/ApartmentProps';
import FreeSearch from './free-search/FreeSearch';
import SearchCleanButton from './search-clean/SearchCleanButton';

type Props = { dispatchForm: Function, formState: any };

const AdvancedSearchDropbox = (props: Props) => {
    return (
        <div className='advanced-search-dropbox-container'>
            <ApartmentProps dispatchForm={props.dispatchForm} stateProperties={props.formState.stateProperties}/>
            <ApartmentGeneralInfo dispatchForm={props.dispatchForm} formState={props.formState}/>
            <FreeSearch dispatchForm={props.dispatchForm} openSearch={props.formState.openSearch}/>
            <SearchCleanButton dispatchForm={props.dispatchForm}/>
        </div>
    );
};

export default AdvancedSearchDropbox;