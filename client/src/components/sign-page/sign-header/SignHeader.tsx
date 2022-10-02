import { useNavigate } from 'react-router';

import './sign-header.scss';
import logo from '../../../assets/yad2Logo.png';

const SignHeader = () => {

    const navigate = useNavigate();

    return (
        <header className='sign-header'>
            <div onClick={ ()=> navigate('/') }>
                <img alt='yad2 logo' src={logo}/>
            </div>
        </header>
    );
};

export default SignHeader;