import {useState,useEffect} from 'react';

type Props = {dispatchForm: Function, sizeRange: {start: number|null|string,end: number|null|string} };

const ApartmentSize = (props: Props) => {

    const [sizeRange,setSizeRange] = useState<{start: number|null|string,end: number|null|string}>({start: 'מ-',end: 'עד-'});

    useEffect(()=>{setSizeRange(props.sizeRange)},[props.sizeRange]);

    return (
        <div className="apartment-size-container">
            <h5>גודל דירה במ"ר</h5>
            <div className="size-container">
                <input type='number' placeholder={sizeRange.start ? ''+sizeRange.start : 'מ-'}
                    onBlur={ (event:any) => props.dispatchForm( { type: 'SIZE_RANGE' , payload: { value: event.target.value}, option: 'START' } )}/>
                <input type='number' placeholder={sizeRange.end ? ''+sizeRange.end : 'מ-'}
                    onBlur={ (event:any) => props.dispatchForm( { type: 'SIZE_RANGE' , payload: { value: event.target.value}, option: 'END' } )}/>
            </div>
        </div>
    );
};

export default ApartmentSize;