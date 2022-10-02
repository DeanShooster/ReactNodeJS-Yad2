
import alert from '../../../assets/login-icons/icon_alert.svg';
import chat from '../../../assets/login-icons/icon_chat.svg';
import publish from '../../../assets/login-icons/icon_publish.svg';
import profile from '../../../assets/login-icons/icon_profile.svg';

const LoginIcons = () => {
    return (
        <div className='login-commercial-icon-container'>
            <div>
                <img alt='alert' src={alert}/>
                <span>התראות</span>
            </div>
            <div>
                <img alt='chat' src={chat}/>
                <span>צ'אט</span>
            </div>
            <div>
                <img alt='publish' src={publish}/>
                <span>פרסום מודעה</span>
            </div>
            <div>
                <img alt='profile' src={profile}/>
                <span>אזור אישי</span>
            </div>
        </div>
    );
};

export default LoginIcons;