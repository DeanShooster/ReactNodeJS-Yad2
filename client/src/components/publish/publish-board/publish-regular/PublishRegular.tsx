
import './publish-regular.scss';
import {BsShop} from 'react-icons/bs'; // Shop
import {GrUserWorker} from 'react-icons/gr'; // Worker
import {FaRegBuilding} from 'react-icons/fa'; // Building
import {HiOutlineDesktopComputer} from 'react-icons/hi'; // Computer
import CategoryItem from '../publish-mainstream/category-item/CategoryItem';

const PublishRegular = () => {

    const categoryItems = [
        {
            icon: <BsShop className='publish-regular-icon'/>,
            title: 'עסקים למכירה',
            subTitle: 'הייטק,בתי קפה וכו'
        },
        {
            icon: <GrUserWorker className='publish-regular-icon'/>,
            title: 'בעלי מקצוע',
            subTitle: 'הובלות, מוסכים, שיפוצים'
        },
        {
            icon: <FaRegBuilding className='publish-regular-icon'/>,
            title: 'נדל"ן מסחרי',
            subTitle: 'מחסנים, קליניקות, משרדים'
        },
        {
            icon: <HiOutlineDesktopComputer className='publish-regular-icon'/>,
            title: 'סלולר',
            subTitle: 'מכשירים, אביזרים ושעונים חכמים'
        }
    ];

    return (
        <div className='publish-regular-container'>
            {categoryItems.map( (item,index)=> {return <CategoryItem key={`publish regular categoryItem`+index} icon={item.icon} title={item.title} subTitle={item.subTitle}/> })}
        </div>
    );
};

export default PublishRegular;