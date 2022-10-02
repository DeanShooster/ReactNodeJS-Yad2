
type Props = { dispatchForm: Function };

const Price = ( props: Props ) => {
    return (
        <div className="price-container">
             <label>מחיר</label>
             <div>
                <input placeholder="מ-" type='number'  onBlur={ (event:any) => props.dispatchForm( { type: 'PRICE_RANGE' , payload: { value: event.target.value}, option: 'START' } )}/>
                <input placeholder="עד-" type='number' onBlur={ (event:any) => props.dispatchForm( { type: 'PRICE_RANGE' , payload: { value: event.target.value}, option: 'END' } )}/>
             </div>
        </div>
    );
};

export default Price;