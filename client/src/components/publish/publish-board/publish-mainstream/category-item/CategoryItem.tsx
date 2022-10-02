import {useState,Fragment} from 'react';
import CategoryModal from '../category-modal/CategoryModal';

type Props = {icon: any, title: String, subTitle: String}

const CategoryItem = (props: Props) => {

    const [itemHover,setItemHover] = useState<Boolean>(false);
    const [modal,setModal] = useState<Boolean>(false);
    const modalHandler = () => { if(props.title === 'נדל"ן') setModal(true); }

    return (
        <Fragment>
            <div onMouseOver={()=>setItemHover(true)} onMouseLeave={()=>setItemHover(false)} onClick={modalHandler}>
                <span>{props.icon}</span>
                <h3>{props.title}</h3>
                {itemHover ? <button>מתחילים</button> : <span>{props.subTitle}</span>}
            </div>
            {modal && <CategoryModal setModal={setModal}/>}
        </Fragment>
    );
};

export default CategoryItem;