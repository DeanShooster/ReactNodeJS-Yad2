

import {MdOutlineArrowBackIos} from 'react-icons/md';
import { useNavigate } from 'react-router';
import mobile from '../../../../assets/login-icons/icon_mobile.svg';

const MobilePhoneIcon = () => {
    const navigate = useNavigate();

    return (
        <div className='login-mobile-container'>
            <MdOutlineArrowBackIos className='login-arrow-home' onClick={ ()=> navigate('/')}/>
            <img alt='mobile' src={mobile}/>
        </div>
    );
};

export default MobilePhoneIcon;