import {useState , useEffect} from 'react';

type Props= {roomState: string , rooms: {min: number|null, max: number|null}, setRooms: Function, setRoomsDropbox: Function, dispatchForm: Function};

const RoomNumbersList = ( props: Props ) => {

    const [roomAmount,setRoomAmount] = useState<JSX.Element[]>([]);

    useEffect(()=>{
        const amount : JSX.Element[] = [], limit = (props.roomState === 'min' ? props.rooms.max : props.rooms.min);        
        if( props.roomState === 'min'){
            if(limit === null)
                for(let i = 1 ; i <= 10; i= i + 0.5 ) amount.push(<li key={'min-room'+i}>{i}</li>);
            else
                for(let i = 1 ; i <= limit; i= i + 0.5 ) amount.push(<li key={'min-room'+i}>{i}</li>);
        } else{
            if(limit === null)
                for(let i = 1 ; i <= 10; i= i + 0.5 ) amount.push(<li key={'min-room'+i}>{i}</li>);
            else
                for(let i = limit/1 ; i <= 10; i= i + 0.5 ) amount.push(<li key={'min-room'+i}>{i}</li>);
        }
        setRoomAmount(amount);
    },[props.roomState,props.rooms.min,props.rooms.max]);

    
    const roomChoiceHandler = (event: any) =>{
        if(props.roomState === 'min') {
            if(event.target.innerHTML === 'הכל' ) props.setRooms({...props.rooms, min: null});
            else props.setRooms({...props.rooms, min: event.target.innerHTML});
            props.dispatchForm({type: 'ROOMS_RANGE',payload: {value: (event.target.innerHTML==='הכל' ? null : event.target.innerHTML)} , option: 'START'});
        } else{
            if(event.target.innerHTML === 'הכל' ) props.setRooms({...props.rooms, max: null});
            else props.setRooms({...props.rooms, max: event.target.innerHTML});
            props.dispatchForm({type: 'ROOMS_RANGE',payload: { value: (event.target.innerHTML==='הכל' ? null : event.target.innerHTML)} , option: 'END'});
        }
        props.setRoomsDropbox({minRooms: false, maxRooms: false});
    }

    return (
        <ul style={props.roomState==='min' ? {right: '10%'} : {left: '10%'}} onClick={roomChoiceHandler}>
            <li>הכל</li>
            {roomAmount}
        </ul>
    );
};

export default RoomNumbersList;