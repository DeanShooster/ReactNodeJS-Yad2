import { useState } from "react";

import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";

import RoomsDropbox from "./rooms-dropbox/RoomsDropbox";

type Props = {dispatchForm: Function};

const Rooms = (props: Props) => {

    const [dropbox,setDropbox] = useState<boolean>(false);
    const [rooms,setRooms] = useState<{min: number | null , max: number | null}>({min: null , max: null});

    return (
        <div className="property-kind-container">
            <label>חדרים</label>
            <div className="property-kind" onClick={()=> setDropbox(!dropbox)}>
                <span>{rooms.min === null && rooms.max === null ? 'חדרים' : ((rooms.min ? rooms.min : 'עד')+' - '+(rooms.max ? rooms.max : 'הכל')) }</span>
                { dropbox ? <RiArrowDropUpLine className='arrow-icon'/> : <RiArrowDropDownLine className='arrow-icon'/>}
            </div>
            { dropbox && <RoomsDropbox rooms={rooms} setRooms={setRooms} dispatchForm={props.dispatchForm}/> }
        </div>
    );
};

export default Rooms;