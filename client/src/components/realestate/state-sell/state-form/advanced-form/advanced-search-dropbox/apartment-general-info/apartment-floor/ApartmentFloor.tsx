import { useState,useEffect } from "react";

import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";
import FloorDropbox from "./floor-dropbox/FloorDropbox";

type Props = {dispatchForm: Function, floorRange: {value: {start: string|null, end: string|null}, valid: boolean}};

const ApartmentFloor = (props: Props) => {

    const [dropbox,setDropbox] = useState<{start: boolean, end: boolean}>({start: false, end: false});

    const openStartDropboxHandler = () => setDropbox({start: true, end: false});
    const openEndDropboxHandler = () => setDropbox({start: false, end: true});
    const closeDropbox = () => setDropbox({start: false, end: false});

    const [floors,setFloors] = useState<{start: string | null , end: string | null}>({start: null , end: null});

    useEffect(()=>{setFloors(props.floorRange.value)},[props.floorRange.value]);

    return (
        <div className="apartment-floor-container">
            <h5>קומה</h5>
            <div className="floor-input-container">
                <div>
                    <input placeholder={floors.start ? floors.start : 'מ-'}/>
                    {dropbox.start ? <RiArrowDropUpLine className="floor-input-arrow-icon" onClick={closeDropbox}/> 
                        : <RiArrowDropDownLine className="floor-input-arrow-icon" onClick={openStartDropboxHandler}/> }
                    { dropbox.start && <FloorDropbox floorState='min' dispatchForm={props.dispatchForm} floors={floors} setDropbox={setDropbox}/> }
                </div>
                <div>
                    <input placeholder={floors.end ? floors.end : 'עד-'}/>
                    {dropbox.end ? <RiArrowDropUpLine className="floor-input-arrow-icon" onClick={closeDropbox}/> 
                        : <RiArrowDropDownLine className="floor-input-arrow-icon" onClick={openEndDropboxHandler}/> }
                    { dropbox.end && <FloorDropbox floorState='max' dispatchForm={props.dispatchForm} floors={floors} setDropbox={setDropbox}/> }
                </div>
            </div>
        </div>
    );
};

export default ApartmentFloor;