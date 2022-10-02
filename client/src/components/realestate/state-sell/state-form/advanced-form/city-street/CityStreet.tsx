
type Props = {dispatchForm: Function};

const CityStreet = (props: Props) => {

    const cityStreetChangeHandler = (event: any)=> props.dispatchForm({type: 'CITY', payload: {value: event.target.value}});

    return (
        <div className='city-street-search-container'>
            <label>חפשו אזור, עיר, שכונה או רחוב</label>
            <input placeholder="לדוגמה: ראשון לציון" onChange={cityStreetChangeHandler}/>
        </div>
    );
};

export default CityStreet;