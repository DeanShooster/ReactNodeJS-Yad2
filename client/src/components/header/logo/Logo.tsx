import { NavLink } from "react-router-dom";

import './logo.scss';
import logo from '../../../assets/yad2Logo.png';

const Logo = () => {
    return (
        <div className='logo-wrapper'>
            <NavLink to='/'>
                <img alt='yad2 logo' src={logo}/>
            </NavLink>
        </div>
    );
};

export default Logo;