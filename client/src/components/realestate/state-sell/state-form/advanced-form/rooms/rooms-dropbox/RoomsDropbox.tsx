import { useState } from "react";

import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";

import RoomNumbersList from "./room-numbers-list/RoomNumbersList";

type Props = {rooms: {min: number|null, max: number|null}, setRooms: Function, dispatchForm: Function};

const RoomsDropbox = (props: Props) => {

    const [roomsDropbox,setRoomsDropbox] = useState<{minRooms: boolean, maxRooms:boolean}>( {minRooms: false, maxRooms: false} );

    const minRoomsDropboxHandler = () => setRoomsDropbox( {minRooms: !roomsDropbox.minRooms, maxRooms: false} );
    const maxRoomsDropboxHandler = () => setRoomsDropbox( {minRooms: false, maxRooms: !roomsDropbox.maxRooms } );

    return (
        <div className="rooms-dropbox">
            <div>
                <input type='text' placeholder={props.rooms.min === null ? 'מ-' : '' + props.rooms.min}/>
                { roomsDropbox.minRooms ? <RiArrowDropUpLine className="rooms-arrow-icon" onClick={minRoomsDropboxHandler}/> 
                        : <RiArrowDropDownLine className="rooms-arrow-icon" onClick={minRoomsDropboxHandler}/>}
            </div>
            { roomsDropbox.minRooms && <RoomNumbersList roomState='min' rooms={props.rooms} setRooms={props.setRooms} 
                                        setRoomsDropbox={setRoomsDropbox} dispatchForm={props.dispatchForm}/>}
            <div>
                <input type='text' placeholder={props.rooms.max === null ? 'עד-' : '' + props.rooms.max}/>
                { roomsDropbox.maxRooms ? <RiArrowDropUpLine className="rooms-arrow-icon" onClick={maxRoomsDropboxHandler}/> 
                        : <RiArrowDropDownLine className="rooms-arrow-icon" onClick={maxRoomsDropboxHandler}/>}
            </div>
            { roomsDropbox.maxRooms && <RoomNumbersList roomState='max' rooms={props.rooms} setRooms={props.setRooms} 
                                        setRoomsDropbox={setRoomsDropbox} dispatchForm={props.dispatchForm}/> }
        </div>
    );
};

export default RoomsDropbox;