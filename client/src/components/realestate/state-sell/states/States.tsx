import {useState,useEffect} from 'react';

import StatesCommercials from "./states-commercials/StatesCommercials";
import StatesSortFilter from "./states-sort-filter/StatesSortFilter";

type Props = { states: any[] }

const States = ( props: Props ) => {

    const [states,setStates] = useState<any[]>([]);
    const [sort, setSort] = useState<string>('');
    
    useEffect(()=>{        
        switch(sort){
            case '': { setStates(props.states); break; }
            case 'cheap': { setStates( props.states.sort( (a,b)=> b.Price-a.Price) ); break; }
            case 'expensive': { setStates( props.states.sort( (a,b)=> a.Price-b.Price) ); break; }
        }
    },[props.states,sort]);

    return (
        <section className="states-section-wrapper">
            <h1>נדל"ן למכירה</h1>
            <StatesSortFilter setSort={setSort}/>
            <StatesCommercials states={states} sort={sort}/>
        </section>
    );
};

export default States;