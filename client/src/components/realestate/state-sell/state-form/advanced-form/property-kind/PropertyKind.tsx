import { useState } from "react";

import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";

import PropertyDropbox from "./proprety-dropbox/PropertyDropbox";

type Props = { dispatchForm: Function , state: {values: {apartments: string[], houses: string[], others: string[]}, valid: boolean} };

const PropertyKind = (props: Props) => {

    const [dropbox,setDropbox] = useState<boolean>(false);

    return (
        <div className='property-kind-container'>
            <label>סוג הנכס</label>
            <div className="property-kind" onClick={()=> setDropbox(!dropbox)}>
                {/* <span>בחרו סוגי נכסים</span> */}
                <span>{(props.state.values.apartments.length + props.state.values.houses.length + props.state.values.others.length) === 0 ?
                        'בחרו סוגי נכסים' : (props.state.values.apartments.length + props.state.values.houses.length + props.state.values.others.length) + ' סוגי נכסים '}</span>
                { dropbox ? <RiArrowDropUpLine className='arrow-icon'/> : <RiArrowDropDownLine className='arrow-icon'/>}
            </div>
            { dropbox && <PropertyDropbox dispatchForm={props.dispatchForm} state={props.state} closeDropbox={setDropbox}/>}
        </div>
    );
};

export default PropertyKind;