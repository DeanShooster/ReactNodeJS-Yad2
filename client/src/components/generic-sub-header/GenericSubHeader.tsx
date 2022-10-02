import { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './generic-sub-header.scss';
import {BiCheckShield} from 'react-icons/bi'; //Checkmark
import {TbGavel} from 'react-icons/tb'; // Gavel
import {FaMoneyBillAlt} from 'react-icons/fa'; // Money
import {GiPriceTag} from 'react-icons/gi'; // Price tag
import {IoCalculatorOutline} from 'react-icons/io5'; // Calc
import {AiFillGift} from 'react-icons/ai'; // Gift

import useWindow from '../../utils/customHook/useWindow';

type Props = {title: string};

const GenericSubHeader = ( props: Props ) => {

    const [subHeaderContent,setSubHeaderContent] = useState<any>(null);
    const [mainPath,setMainPath] = useState<string | null>(null); 
    const windowWidth = useWindow(); 
    
    useEffect( ()=>{
        const content = [
            {
                key: 'realestate',
                listOne: ['מכירה','השכרה','דירות שותפים','נדל"ן מסחרי'],
                listOnePath: ['sell','rent','roommates','commercial'],
                listTwo: ['יד2 ביטוח דירה','כונס נכסים','דורון - העוזר האישי','יד1 דירות חדשות','yadata הערכת שווי נכס'],
                icons: [<BiCheckShield /> ,<TbGavel />,<img className='doron' alt='doron_helper' src={require('../../assets/header_doron-orange.png')}/>,<img className='yad2-logo' alt='yad1 logo' src={require('../../assets/yad2Logo.png')}/>]
            },
            {
                key: 'vehicles',
                listOne: ['כל הרכבים','מסחרי','גיפים','אופנועים','קטנועים','משאיות','כלי שייט','מיוחדים','אביזרים'],
                listOnePath: ['cars','commercial','jeep','motorcycle','moped','truck','Watercraft','special','accessory'],
                listTwo: ['יד2 ביטוח רכב','מחירון רכב','מכרזים וכינוס','מימון רכב'],
                icons: [<BiCheckShield />,<FaMoneyBillAlt />,<GiPriceTag />, <IoCalculatorOutline />]
            },
            {
                key: 'products',
                listOne: ['סמארטפונים','לבית ולגינה','אלקטרוניקה','ספורט ופנאי','לתינוק ולילד','אופנה וטיפוח','עסקים','שונות','בחינם'],
                listOnePath: ['smartphones','home&garden','electronics','sports','children','fashion&care','business','others','free'],
                listTwo: ['יד2 מכל הלב'],
                icons: [<AiFillGift />]
            },
            {
                key: 'businesses-for-sale',
                listOne: ['בתי קפה ומסעדות','זכיינות','קווי חלוקה','הזדמנויות עסקיות','מינימרקטים וסופרמרקטים','קיוסקים ופיצוציות','לכל העסקים'],
                listOnePath: ['restaurant&coffee','franchising','distribution_lines','opportunities','mini&super_markets','stands','everyone'],
            },
            {
                key: 'pets',
                listOne: ['כלבים','חתולים','תוכים ובעלי כנף','דגים','זוחלים','מכרסמים','סוסים','תרנגולים','חיות משק','חמוסים'],
                listOnePath: ['dogs','cats','birds','fish','crawlers','rodents','horses','chickens','farm','ferrets'],
            }
        ];        
        for(let i = 0; i < content.length; i++)
            if( props.title.trim().includes(content[i].key) ) { setSubHeaderContent( content[i] ); break; }
        setMainPath(props.title.split('/')[0]);        
    },[props.title]);
    
    
    return (
        <Fragment>
            { windowWidth > 1300 ?  <div className='generic-sub-header-container'>
                    <ul style={ {marginRight: '50px'} }>
                        { subHeaderContent?.listOne?.map( (item: string,index: number)=>{
                            return <li key={'list-one: '+item}><NavLink to={mainPath+'/'+subHeaderContent?.listOnePath[index]}
                            style={ (state)=> { return state.isActive ? {color: '#FF7100',fontWeight: 'bold',borderBottom: '3px solid #FF7100'} : {color: ''}}}>{item}</NavLink></li>
                        } )}
                    </ul>
                    <ul>
                        { subHeaderContent?.listTwo?.map( (item:string, index:number)=>{
                            return <li key={'list-two: '+item}>
                                <span>{subHeaderContent.icons ? subHeaderContent.icons[index] : null} </span>
                                <NavLink to='/'>{item}</NavLink>
                            </li>})
                        }
                    </ul>
                </div> 
            : null }
        </Fragment>
    );
};

export default GenericSubHeader;