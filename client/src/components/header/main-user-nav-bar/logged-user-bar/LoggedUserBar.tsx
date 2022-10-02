
import { useState } from 'react';
import './logged-user-bar.scss';
import LoggedUserDropbox from './logged-user-dropbox/LoggedUserDropbox';

type Props = { email: string, name: string, windowWidth: number };

const LoggedUserBar = ( props: Props ) => {

    const [showDropbox,setShowDropbox] = useState(false);

    const onMouseOverShowDropboxHandler = () => setShowDropbox(true);
    const onMouseLeaveRemoveDropboxHandler = () => setShowDropbox(false);

    return (
        <li className='logged-user-bar-container' onMouseOver={onMouseOverShowDropboxHandler} onMouseLeave={onMouseLeaveRemoveDropboxHandler}>
            <div className='email-container'>{props.email[0].toLocaleUpperCase()+props.email[1].toLocaleUpperCase()}</div>
            { props.windowWidth >= 1500 && <span>{props.name ? props.name : 'אנונימי'}</span> }
            {showDropbox && <LoggedUserDropbox /> }
        </li>
    );
};

export default LoggedUserBar;