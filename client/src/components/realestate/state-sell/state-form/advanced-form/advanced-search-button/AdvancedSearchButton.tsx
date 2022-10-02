import {useState,useEffect} from 'react';

import {BiPlusCircle} from 'react-icons/bi';

type Props= { advancedDropboxHandler: Function, isAdvancedSearchActive: boolean, formState: any };

const AdvancedSearchButton = ( props: Props ) => {

    const [advancedActiveStates,setAdvancedActiveStates] = useState<number|null>(null);

    useEffect(()=>{
        let counter = 0;
        counter += props.formState.stateProperties.values.length;
        if(props.formState.floorRange.value.start || props.formState.floorRange.value.end) counter ++;
        if(props.formState.sizeRange.value.start || props.formState.sizeRange.value.end) counter ++;
        if(props.formState.entranceDate.value ) counter++;
        if(props.formState.immediateEntrance.value) counter++;
        if(props.formState.openSearch.value) counter++;

        if(counter === 0 ) setAdvancedActiveStates(null);
        else setAdvancedActiveStates(counter);
    },[props.formState.stateProperties,props.formState.floorRange.value.start,props.formState.floorRange.value.end,props.formState.sizeRange.value.start
        ,props.formState.sizeRange.value.end,props.formState.entranceDate.value,props.formState.immediateEntrance.value,props.formState.openSearch.value]);

    const dropboxHandler = () => props.advancedDropboxHandler();

    return (
        <div className='advanced-search-button' onClick={dropboxHandler}>
            {props.isAdvancedSearchActive ? <BiPlusCircle className='plus-icon plus-icon-rotate-right'/> : <BiPlusCircle className='plus-icon plus-icon-rotate-right plus-icon-rotate-left'/>}
            <span>חיפוש מתקדים {advancedActiveStates ? `(${advancedActiveStates})` : ''}</span>
            {advancedActiveStates && <div className='advanced-search-button-orange-circle'><div className='orange-circle-inner-circle'></div> </div> }
        </div>
    );
};

export default AdvancedSearchButton;