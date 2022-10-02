import {useContext} from 'react';
import { userContext } from '../../../../context/UserContext';

import {BiUser} from 'react-icons/bi';

const PublishProfile = () => {

    const userInfo = useContext(userContext);        

    return (
        <div className='publish-profile-container'>
            <span><BiUser className='publish-profile-icon'/></span>
            {userInfo?.user ? userInfo.user.name : 'Incognito' }
        </div>
    );
};

export default PublishProfile;