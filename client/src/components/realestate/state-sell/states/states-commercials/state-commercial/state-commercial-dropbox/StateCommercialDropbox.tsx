import {useState } from 'react';

import './state-commercial-dropbox.scss';
import {IoIosSnow} from 'react-icons/io'; // AC
import {MdOutlineWindow, MdOutlineImagesearchRoller,MdOutlineAir} from 'react-icons/md'; // Window , Roller , AC Tadiran
import {GiElevator,GiWaterTank} from 'react-icons/gi'; // Elevator , Boiler
import {FaFaucet,FaHouseDamage,FaWarehouse,FaGripLinesVertical} from 'react-icons/fa'; // Faucet , Shelter , Warehouse , Pole
import {TbDisabled} from 'react-icons/tb'; // Disabled
import {BiCabinet} from 'react-icons/bi'; // Cabinet
import {AiOutlineHome} from 'react-icons/ai'; // Apartment
import {SiCircle} from 'react-icons/si'; // Versatile

import {FiLink2} from 'react-icons/fi'; // Link
import {AiOutlineWhatsApp, AiOutlinePrinter,AiOutlineMail} from 'react-icons/ai'; // Whats app , Print , Mail
import {CgTab} from 'react-icons/cg'; // Tab

type Props = {state: any , propertyState: string }

const StateCommercialDropbox = ( props : Props ) => {

    const [showInfo,setShowInfo] = useState<boolean>(false);
    
    const mistGray = '#b6b6b6';

    return (
        <div className='state-commercial-dropbox-container'>
            <h5>תיאור הנכנס</h5>
            <p className='property-info' style={showInfo ? {overflow: 'visible',height: '1%'} : {} }>
                {props.state.AboutFurniture} {props.state.About}
                { !showInfo && <span className='property-mist'></span> }
            </p>
            
            {showInfo ? <div className='property-info-extend-reduce-button' onClick={()=>setShowInfo(false)}>פחות</div> : 
                        <div className='property-info-extend-reduce-button' onClick={()=>setShowInfo(true)}>קרא עוד</div>}

            <div className='property-state-container'>
                <div>תאריך כניסה  <span>{props.state.EntranceDate}.22</span></div>
                <div>מצב הנכס <span>{props.propertyState}</span></div>
                <div>תאריך כניסה <span>{props.state.ImmediateEntance ? 'כניסה מיידית' : 'כניסה גמישה'}</span></div>
                <div>קומות בבנין <span>{props.state.TotalFloors}</span></div>
                <div>חניות <span>{props.state.Parking === 0 ? 'ללא' : props.state.Parking}</span></div>
                <div>מרפסות <span>{props.state.Balcony === 0 ? 'ללא' : props.state.Balcony}</span></div>
                <div>מ"ר   <span>{props.state.Size}</span></div>
            </div>

            <h5>מה יש בנכס?</h5>
            <div className='property-props-container'>
                <div style={props.state.AC ? {} : {color: mistGray}}><span><IoIosSnow /></span>מיזוג</div>
                <div style={props.state.Bars ? {} : {color: mistGray}}><span><MdOutlineWindow /></span>סורגים</div>
                <div style={props.state.Elevator ? {} : {color: mistGray}}><span><GiElevator /></span>מעלית</div>
                <div style={props.state.KosherKitchen ? {} : {color: mistGray}}><span><FaFaucet /></span>מטבח כשר</div>
                <div style={props.state.SunHeatedWaterTank ? {} : {color: mistGray}}><span><GiWaterTank /></span>דוד שמש</div>
                <div style={props.state.DisabledAccess ? {} : {color: mistGray}}><span><TbDisabled /></span>גישה לנכים</div>
                <div style={props.state.Renovated ? {} : {color: mistGray}}><span><MdOutlineImagesearchRoller /></span>משופצת</div>
                <div style={props.state.Mamad ? {} : {color: mistGray}}><span><FaHouseDamage /></span>מרחב מוגן</div>
                <div style={props.state.Warehouse ? {} : {color: mistGray}}><span><FaWarehouse /></span>מחסן</div>
                <div style={props.state.TadiranAC ? {} : {color: mistGray}}><span><MdOutlineAir /></span>מזגן תדיראן</div>
                <div style={props.state.Furnished ? {} : {color: mistGray}}><span><BiCabinet /></span>ריהוט</div>
                <div style={props.state.Exclusive ? {} : {color: mistGray}}><span><AiOutlineHome /></span>יחידת דיור</div>
                <div style={props.state.ImmediateEntance ? {} : {color: mistGray}}><span><SiCircle /></span>גמיש</div>
                <div style={props.state.OnPoles ? {} : {color: mistGray}}> <span> <FaGripLinesVertical /> </span>עמודים</div>
            </div>

            <div className='utils-container'>
                <div className='contact-icons-container'>
                    <span><FiLink2 /></span>
                    <span><AiOutlineWhatsApp /></span>
                    <span><AiOutlinePrinter /></span>
                    <span><CgTab /></span>
                    <span><AiOutlineMail /></span>
                </div>
                <div className='commerical-info-error-container'>
                    <span className='error'>מצאתי טעות</span>
                    <span className='info'>מספר מודעה:  {props.state.PropertyID}</span>
                </div>
            </div>
        </div>
    );
};

export default StateCommercialDropbox;