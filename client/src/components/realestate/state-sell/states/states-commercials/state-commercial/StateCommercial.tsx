import { Fragment, useState, useEffect } from 'react';

import {FaRegHeart} from 'react-icons/fa';
import {IoOpenOutline} from 'react-icons/io5';
import {AiOutlinePhone} from 'react-icons/ai';

import useWindow from '../../../../../../utils/customHook/useWindow';
import StateCommercialDropbox from './state-commercial-dropbox/StateCommercialDropbox';
import ContactUserDropbox from './contact-user-dropbox/ContactUserDropbox';

type Props = { state: any }

const StateCommercial = ( props : Props ) => {

    const [hover,setHover] = useState<boolean>(false);
    const [dropbox,setDropbox] = useState<boolean>(false);
    const [propertySellerInfo,setPropertySellerInfo] = useState<boolean>(false);
    const width = useWindow();

    const [propertyState,setPropertyState] = useState<string>('');
    const [propertyKind,setPropertyKind] = useState<string>('');
    const [propertyPrice,setPrice] = useState<string>('');

    useEffect(()=>{
        const state = props.state.PropertyState;
        switch(state){
            case 'Completely New':{ setPropertyState('חדשה'); break; }
            case 'New': { setPropertyState('חדשה'); break; }
            case 'Renovated': { setPropertyState('משופצת'); break; }
            case 'Fine': { setPropertyState('מצב טוב'); break; }
            case 'Poor': { setPropertyState('מצב סביר'); break; }
        };
        const kind = props.state.PropertyKind;
        switch(kind){
            case 'Apartment': { setPropertyKind('דירה'); break; }
            case 'Garden Apartment': { setPropertyKind('דירת גן'); break; }
            case 'Private House': { setPropertyKind('בית פרטי'); break; }
            case 'Penthouse': { setPropertyKind('פנטהאוז'); break; }
            case 'Field': { setPropertyKind('מגרש'); break; }
            case 'Duplex': { setPropertyKind('דופלקס'); break; }
            case 'Holiday Apartment': { setPropertyKind('דירת חג'); break; }
            case 'Family Duplex': { setPropertyKind('דופלקס משפחתי'); break; }
            case 'Basement': { setPropertyKind('מרתף'); break; }
            case 'Triplex': { setPropertyKind('טריפלקס'); break; }
            case 'Studio': { setPropertyKind('סטודיו'); break; }
            case 'Farm': { setPropertyKind('חוה חקלאית'); break; }
            case 'Nursing Home': { setPropertyKind('דיור מוגן'); break; }
            case 'Tower': { setPropertyKind('מגדל'); break; }
            case 'Studio Loft': { setPropertyKind('סטודיו לופט'); break; }
            case 'Warehouse': { setPropertyKind('מחסן'); break; }
            case 'Purchase Group': { setPropertyKind('חברת מכירה'); break; }
            case 'General': { setPropertyKind('כללי'); break; }
        }
        let price = props.state.Price, count = 0,finalPrice = '';
        while(price > 0.1 ){
            const module = price%10;
            if(count === 3){ count = 0; finalPrice += ','; }
            count++; finalPrice += (module + '');
            price /= 10;
            price = parseInt(price);
        }
        setPrice(finalPrice.split('').reverse().join(''));
    },[props.state.PropertyState,props.state.PropertyKind,props.state.Price]);

    return (
        <Fragment>
            <div className='state-commercial' onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={()=>setDropbox(!dropbox)}>
                <div className="image-info-container">
                    <div className="image-container">
                        <img alt='nada' src='https://img.yad2.co.il/Pic/202207/14/2_1/o/y2_2_01831_20220714161530.jpeg?l=5&c=3&w=195&h=117'/>
                        <div className='heart-icon-container'><FaRegHeart className='heart-icon'/></div>
                    </div>
                    <div className="street-info-container">
                        { width <= 750 && <h3 className='price-view-ipad'>{propertyPrice}</h3> }
                        <h3>{props.state.Street} {props.state.HouseNumber}</h3>
                        <p>{propertyKind}, {props.state.City}, {propertyState}</p>
                    </div>
                </div>
                <div className="state-rooms-floor-size-info-container">
                    <div>
                        <span>{props.state.RoomNumber}</span>
                        <span>חדרים</span>
                    </div>
                    <div>
                        <span>{props.state.Floor}</span>
                        <span>קומה</span>
                    </div>
                    <div>
                        <span>{props.state.Size}</span>
                        <span>מ"ר</span>
                    </div>
                </div>
                { width > 750 && 
                    <div className="price-update-container">
                        <h3>{propertyPrice}</h3>
                        { hover ? <p className='click-info-link'>לחצו לפרטים</p> : <p>עודכן היום</p> }
                    </div> 
                }
                <div className='open-new-tab-container'>
                    { width > 750 ? (hover && <span>פתיחה בטאב חדש</span>) : <span>עודכן היום</span> }
                    { width > 750 && <IoOpenOutline  className='open-tab-icon'/> }
                </div>
                { dropbox && <div className='contact-user-container' onMouseOver={()=>setPropertySellerInfo(true)} onMouseLeave={()=>setPropertySellerInfo(false)}>
                    <AiOutlinePhone className='phone-icon'/>
                    <span>הצג טלפון</span>
                    { propertySellerInfo && <ContactUserDropbox owner={props.state.Owner}/> }
                </div> }
            </div>
            { dropbox && <StateCommercialDropbox state={props.state} propertyState={propertyState}/> }
        </Fragment>
    );
};

export default StateCommercial;