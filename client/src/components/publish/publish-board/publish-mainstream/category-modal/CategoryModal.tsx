import {Fragment} from 'react';
import { useNavigate } from 'react-router';

import './category-modal.scss';
import {VscChromeClose} from 'react-icons/vsc'; // X button
import {FcHome} from 'react-icons/fc'; // House

type Props = {setModal: Function};

const CategoryModal = (props: Props) => {

    const closeModalHandler = () => {props.setModal(false);}
    const navigate = useNavigate();

    return (
        <Fragment>
            <section className='publish-background-wall'></section>
            <section className='category-modal'>
                <VscChromeClose className='publish-close-modal' onClick={closeModalHandler}/>
                <FcHome className='publish-house-icon'/>
                <h4>איזה סוג מודעה תרצו לפרסם?</h4>
                <section className='publish-kind-selection-container'>
                    <span onClick={()=>navigate('/publish/realestate')}>פרטי</span>
                    <span>מתווך</span>
                </section>
            </section>
        </Fragment>
    );
};

export default CategoryModal;