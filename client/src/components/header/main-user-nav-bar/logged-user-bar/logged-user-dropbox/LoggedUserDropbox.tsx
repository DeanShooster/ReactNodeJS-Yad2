import { useContext } from 'react';

import { userContext } from '../../../../../context/UserContext';

import {TbUser,TbArrowsRightLeft} from 'react-icons/tb';
import {MdOutlineHistory} from 'react-icons/md';
import {RiDoorOpenLine} from 'react-icons/ri';

const LoggedUserDropbox = () => {

    const userInfo = useContext(userContext);

    const onLogoutHandler = () => {
        localStorage.clear();
        userInfo?.updateUser(null);
    }

    return (
        <div className="logged-user-dropbox">
            <div onClick={()=> alert('Not Functional.')}>
                <TbUser className='logged-user-dropbox-icon'/>
                <span>אזור אישי</span>
            </div>
            <div onClick={()=> alert('Not Functional.')}>
                <TbArrowsRightLeft className='logged-user-dropbox-icon'/>
                <span>השוואת רכבים</span>
            </div>
            <div onClick={()=> alert('Not Functional.')}>
                <MdOutlineHistory className='logged-user-dropbox-icon'/>
                <span>חיפושים אחרונים</span>
            </div>
            <div onClick={onLogoutHandler}>
                <RiDoorOpenLine className='logged-user-dropbox-icon'/>
                <span>התנתקות</span>
            </div>
        </div>
    );
};

export default LoggedUserDropbox;