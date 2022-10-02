import {useState,useEffect} from 'react';

type Props = {floorState: string, dispatchForm: Function, floors: {start: string|null, end: string|null}, setDropbox: Function};

const FloorDropbox = (props: Props) => {

    const [floorAmount,setFloorAmount] = useState<JSX.Element[]>([]);

    useEffect(()=>{
        const amount : JSX.Element[] = [], limit = (props.floorState === 'min' ? props.floors.end : props.floors.start);
        if( props.floorState === 'min'){
            if(limit === null)
                for(let i = 0 ; i <= 17; i++ ) amount.push(<li key={'min-room'+i}>{i}</li>);
            else
                for(let i = 0 ; i <= parseInt(limit); i++ ) amount.push(<li key={'min-room'+i}>{i}</li>);
        } else{
            if(limit === null)
                for(let i = 0 ; i <= 17; i++ ) amount.push(<li key={'min-room'+i}>{i}</li>);
            else
                for(let i = parseInt(limit) ; i <= 17; i++ ) amount.push(<li key={'min-room'+i}>{i}</li>);
        }  
        setFloorAmount(amount);
    },[props.floorState,props.floors.start,props.floors.end]);

    const floorHandler = (event: any) =>{
        if(props.floorState === 'min'){
            let value;
            if(event.target.innerHTML === 'הכל') value = null;
            else value = event.target.innerHTML;
            props.dispatchForm({type: 'FLOOR_RANGE', payload: {value}, option: 'START'});
        } else{
            let value;
            if(event.target.innerHTML === 'הכל') value = null;
            else value = event.target.innerHTML;
            props.dispatchForm({type: 'FLOOR_RANGE', payload: {value}, option: 'END'});
        }
        props.setDropbox(false);
    }

    return (
        <ul className="floor-dropbox" onClick={floorHandler}>
            <li>הכל</li>
            {floorAmount}
        </ul>
    );
};

export default FloorDropbox;