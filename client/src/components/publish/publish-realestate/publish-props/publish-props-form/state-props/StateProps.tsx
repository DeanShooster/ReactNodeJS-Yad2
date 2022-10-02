import {useState} from 'react';

import {IoIosSnow} from 'react-icons/io'; // AC
import {MdOutlineWindow, MdOutlineImagesearchRoller,MdOutlineAir} from 'react-icons/md'; // Window , Roller , AC Tadiran
import {GiElevator,GiWaterTank} from 'react-icons/gi'; // Elevator , Boiler
import {FaFaucet,FaHouseDamage,FaWarehouse} from 'react-icons/fa'; // Faucet , Shelter , Warehouse
import {TbDisabled} from 'react-icons/tb'; // Disabled
import {BiCabinet} from 'react-icons/bi'; // Cabinet

type Props = { propsForm: any ,setPropsForm: Function};

const StateProps = (props: Props) => {

    const [stateProps,setStateProps] = useState<string[]>([]);
    const background = '#ccc';

    const propsHandler = (event: any) => {
        const prop = event.target.getAttribute('data-value');
        const allProps = [...stateProps];
        if(allProps.includes(prop)) allProps.splice(allProps.indexOf(prop),1);
        else allProps.push(prop);
        setStateProps(allProps);
        props.setPropsForm({...props.propsForm,stateProps: allProps});
    }

    return (
        <div className='props-container' onClick={propsHandler}>
            <h3>מאפייני הנכס</h3>
            <div data-value='AC' style={stateProps.includes('AC') ? {background} : {}}>
                <IoIosSnow data-value='AC'/>
                <span data-value='AC'>מיזוג</span>
            </div>
            <div data-value='Mamad' style={stateProps.includes('Mamad') ? {background} : {}}>
                <FaHouseDamage data-value='Mamad'/>
                <span data-value='Mamad'>ממ"ד</span>
            </div>
            <div data-value='Warehouse' style={stateProps.includes('Warehouse') ? {background} : {}}>
                <FaWarehouse data-value='Warehouse'/>
                <span data-value='Warehouse'>מחסן</span>
            </div>
            <div data-value='Furnished' style={stateProps.includes('Furnished') ? {background} : {}}>
                <BiCabinet data-value='Furnished'/>
                <span data-value='Furnished'>ריהוט</span>
            </div>
            <div data-value='DisabledAccess' style={stateProps.includes('DisabledAccess') ? {background} : {}}>
                <TbDisabled data-value='DisabledAccess'/>
                <span data-value='DisabledAccess'>גישה לנכים</span>
            </div>
            <div data-value='Elevator' style={stateProps.includes('Elevator') ? {background} : {}}>
                <GiElevator data-value='Elevator'/>
                <span data-value='Elevator'>מעלית</span>
            </div>
            <div data-value='TadiranAC' style={stateProps.includes('TadiranAC') ? {background} : {}}>
                <MdOutlineAir data-value='TadiranAC'/>
                <span data-value='TadiranAC'>מזגן תדיראן</span>
            </div>
            <div data-value='Renovated' style={stateProps.includes('Renovated') ? {background} : {}}>
                <MdOutlineImagesearchRoller data-value='Renovated'/>
                <span data-value='Renovated'>משופצת</span>
            </div>
            <div data-value='KosherKitchen' style={stateProps.includes('KosherKitchen') ? {background} : {}}>
                <FaFaucet data-value='KosherKitchen'/>
                <span data-value='KosherKitchen'>מטבח כשר</span>
            </div>
            <div data-value='SunHeatedWaterTank' style={stateProps.includes('SunHeatedWaterTank') ? {background} : {}}>
                <GiWaterTank data-value='SunHeatedWaterTank'/>
                <span data-value='SunHeatedWaterTank'>דוד שמש</span>
            </div>
            <div data-value='Bars' style={stateProps.includes('Bars') ? {background} : {}}>
                <MdOutlineWindow data-value='Bars'/>
                <span data-value='Bars'>סורגים</span>
            </div>
        </div>
    );
};

export default StateProps;