import './states-commercial.scss';

import StateCommercial from './state-commercial/StateCommercial';

type Props = { states: any[], sort: string }

const StatesCommercials = ( props: Props ) => {
    return (
        <section className='states-commercials-container'>
            {props.states?.map( (state,index)=>{ return <StateCommercial key={index} state={state}/> })}
            {props.states?.length === 0 && <h1 style={{textAlign: 'center'}}>לא נמצאו תוצאות</h1>}
        </section>
    );
};

export default StatesCommercials;