
import './publish-category.scss';
import {FcHome} from 'react-icons/fc'; // House
import {GiHouseKeys} from 'react-icons/gi'; // Keys
import {BiBuildings,BiShekel} from 'react-icons/bi'; // Towers , Shekel

import CategoryIcon from './category-icon/CategoryIcon';
import PublishTitle from '../publish-title/PublishTitle';

type Props = {formStage: any , setFormStage: Function };

const PublishCategory = (props : Props) => {

    const inActive = 'inactive-publish-realestate-section-card';
    const categoryIcons = [
        {
            icon: <FcHome className='category-icon'/>,
            title: 'מכירה'
        },
        {
            icon: <span><FcHome className='category-icon'/><BiShekel className='shekels'/></span>,
            title: 'השכרה'
        },
        {
            icon: <GiHouseKeys className='category-icon'/>,
            title: 'שותפים'
        },
        {
            icon: <BiBuildings className='category-icon'/>,
            title: 'מסחרי'
        }
    ];    

    return (
        <section className={"publish-realestate-section-card " + (props.formStage.one.active ? '' : inActive)}>
            <PublishTitle number='1' title='באיזו קטגוריה נפרסם היום?' itemState={props.formStage.one}/>
            { props.formStage.one.active &&
                <div className='category-icons-container'>
                    {categoryIcons.map( (item,index)=> { return <CategoryIcon key={`publish realestate icon`+index} icon={item.icon} title={item.title} setFormStage={props.setFormStage}/> } )}
                </div> }
        </section>
    );
};

export default PublishCategory;