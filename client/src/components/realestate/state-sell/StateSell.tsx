import {useState , Fragment, useEffect } from 'react';

import './state-sell.scss';

import StateForm from './state-form/StateForm';
import States from './states/States';

import { GetInitialStates } from '../../../api/UserRequests';

const StateSell = () => {

    const [states,setStates] = useState<any[]>([]);

    useEffect(()=>{
        const fetchData = async () => {
            const data = await GetInitialStates();
            if( data.length > 0 ) setStates(data);            
        }
        fetchData();
    },[]);

    return (
        <Fragment>
            <StateForm setStates={setStates}/>
            <States states={states}/>
        </Fragment>
    );
};

export default StateSell;