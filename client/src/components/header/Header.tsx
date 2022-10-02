import './header.scss';

import useWindow from '../../utils/customHook/useWindow';

import Logo from './logo/Logo';
import MainNavBar from './main-nav-bar/MainNavBar';
import MainUserNavBar from './main-user-nav-bar/MainUserNavBar';

const Header = () => {

    const windowWidth = useWindow();

    return (
        <header className='header'>
            <Logo />
            <MainNavBar windowWidth={windowWidth}/>
            <MainUserNavBar windowWidth={windowWidth}/>
        </header>
    );
};

export default Header;