
import './publish-nav.scss';
import {BiHelpCircle} from 'react-icons/bi';

import PublishProfile from './publish-profile/PublishProfile';

type Props = {windowWidth: Number};

const PublishNav = (props: Props) => {
    return (
        <nav className='publish-nav-container'>
            <PublishProfile />
            <div className='publish-contact-container' onClick={()=> alert('Not functional.')}>
                {props.windowWidth > 600 ? <span>צור קשר</span> : <BiHelpCircle className='contact-mobile-icon'/>}
            </div>
        </nav>
    );
};

export default PublishNav;