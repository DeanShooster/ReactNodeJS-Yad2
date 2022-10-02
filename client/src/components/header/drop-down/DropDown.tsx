import { useEffect, useState } from "react";

import {TbGavel,TbCar} from 'react-icons/tb';
import {CgCalculator} from 'react-icons/cg';
import {GrHome} from 'react-icons/gr';
import {BsShieldCheck} from 'react-icons/bs';
import {FaMoneyBillAlt} from 'react-icons/fa';
import {RiPriceTag3Line} from 'react-icons/ri';
import {AiOutlineGift} from 'react-icons/ai';

type Props={title: string};

const DropDown = ( props: Props ) => {

    const [contentList,setContentList] = useState<any>(null);   

    useEffect( ()=>{
        const dropDownContent : Array<{key:string | null, listOne: string[] | null,listTwo: string[] | null, icons:any | null }> = [
            {
                key: 'נדל"ן', 
                listOne: ['דירות למכירה','דירות להשכרה','שותפים','מסחרי','חיפוש על גבי מפה','יד1 דירות חדשות'] ,
                listTwo: [ 'דורון - העוזר האישי','כונס נכסים' ,'הערכת שווי נכס' ,'משרדי תיווך בישראל' ,'יד2 ביטוח דירה'],
                icons: [ <img alt='doron_helper' src={require('../../../assets/header_doron-orange.png')}/>, <TbGavel /> ,<CgCalculator /> ,<GrHome />, <BsShieldCheck/>  ]
            },
            {
                key: 'רכב',
                listOne: [ 'כל הרכבים', 'מסחרי','גיפים' ,'אופנועים' ,'קטנועים' ,'מיוחדים' ,'אביזרים' , 'משאיות', 'כלי שייט'],
                listTwo: [ 'קטלוג רכבים','מחירון רכב' ,'מכרזים וכינוס' ,'מימון רכב' ,'יד2 ביטוח רכב'],
                icons: [ <TbCar />,<FaMoneyBillAlt />, <RiPriceTag3Line />,<CgCalculator/>,<BsShieldCheck/>]
            },
            {
                key: 'יד שנייה',
                listOne: ['כל המוצרים','מוצרי חשמל' ,'ריהוט' ,'עסקים למכירה' ,'ספורט' ,'סלולרי' ,'לתינוק ולילד' ,'הכל בחינם!'],
                listTwo: ['קונסולות משחק','מחשבים וציוד נלווה' ,'לגינה' ,'אופנה וטיפוח' ,'יד2 מכל הלב'],
                icons: [null,null,null,null,<AiOutlineGift />]
            },
            {
                key: 'דרושים IL',
                listOne: [ 'חיפוש עבודה','פרסום משרות' ,'כתיבת קורות חיים' ,'אודות החברות' ,'דרושים הייטק' ,'דרושים סטודנטים' ,'מגזין הקריירה' ,'כספים' ,'מכירות','שירות לקוחות' ],
                listTwo:  [ 'אדמינסטרציה','מהנדסים' ,'תחבורה' ,'מסעדנות/תיירות' ,'אבטחה' ,'בריאות' ,'בעלי מקצוע' ,'הדרכה/הוראה' ,'שיווק','לתחומים נוספים' ],
                icons: null
            },
            {
                key: 'עסקים למכירה',
                listOne: [ 'בתי קפה ומסעדות','זכיינות' ,'קווי חלוקה' ,'הזדמנויות עסקיות' ,'מינימרקטים וסופרמקטים' ,'קיוסקים ופיצוציות' ,'לכל העסקים' ],
                listTwo: null,
                icons: null
            },
            {
                key: 'חיות מחמד',
                listOne: [ 'כלבים','חתולים' ,'תוכים ובעלי כנף' ,'דגים' ,'זוחלים' ,'מכרסמים' ,'סוסים' ,'תרנגולים' ,'חיות משק','חמוסים' ],
                listTwo:  null,
                icons: null
            },
            {
                key: 'בעלי מקצוע',
                listOne: [ 'מכוני בדיקה ורישוי לרכב','רחיצת רכב' ,'שמאי מקרקעין' ,'חומרי בניין' ,'אינסטלטור' ,'חשמלאים' ,'שיפוצים' ,'הובלות' ,'רהיטים','חברות ניקיון ואחזקה','לכל בעלי המקצוע' ],
                listTwo:  null,
                icons: null
            },
            {
                key: 'עוד...', 
                listOne: [ 'תיירות ונופש','לימודים' ,'מגזין יד2'],
                listTwo: null,
                icons: null
            }
        ];
        for(let i = 0; i < dropDownContent.length; i++)
            if( dropDownContent[i].key === props.title ) { setContentList( dropDownContent[i] ); break; }
        
    },[props.title]);

    return (
        <div className="main-nav-bar-drop-down">
            <ul >
            { contentList && 
                (contentList.listOne?.map( (item:string)=> { 
                    return <li key={'list-one: '+item} >{item}</li>
                 } ) )
            }
            </ul>
            {contentList?.listTwo && <ul>
                { contentList && 
                    (contentList.listTwo?.map( (item:string,index:number)=> { 
                        return <li key={'list-two: '+item}><span>{contentList.icons ? contentList.icons[index] : null}</span>{item}</li> 
                }))}
            </ul>}
        </div>
    );
};

export default DropDown;