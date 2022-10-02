
import './publish-mainstream.scss';
import {GiFamilyHouse} from 'react-icons/gi'; // House
import {IoCarSport} from 'react-icons/io5'; // Car
import {FaCouch} from 'react-icons/fa'; // Couch

import CategoryItem from './category-item/CategoryItem';

const PublishMainstream = () => {

    const categoryItems = [
        {
            icon: <GiFamilyHouse className='publish-mainstream-icon'/>,
            title: 'נדל"ן',
            subTitle: 'מכירה,השכרה,מסחרי'
        },
        {
            icon: <IoCarSport className='publish-mainstream-icon'/>,
            title: 'כלי רכב',
            subTitle: 'כלי רכב, דו גלגלי, כלי שיט, מיוחדים'
        },
        {
            icon: <FaCouch className='publish-mainstream-icon'/>,
            title: 'יד שניה',
            subTitle: 'לבית לגינה ולמשרד, חשמל, ספורט פנאי ושונות'
        }
    ];

    return (
        <div className='publish-mainstream-container'>
            {categoryItems.map( (item,index)=> {return <CategoryItem key={`publish-mainstream-categoryItem`+index} icon={item.icon} title={item.title} subTitle={item.subTitle}/>})}
        </div>
    );
};

export default PublishMainstream;