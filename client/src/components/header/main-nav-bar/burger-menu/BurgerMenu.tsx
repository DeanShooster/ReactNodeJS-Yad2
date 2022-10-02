
import './burger-menu.scss';
import {HiMenu} from 'react-icons/hi';

type Props={navLinks : Array<{name: string, path: string}>};

const BurgerMenu = ( props: Props ) => {
    return (
        <div className='burger-menu'>
            <HiMenu className='menu'/>
            <span>תפריט</span>
        </div>
    );
};

export default BurgerMenu;