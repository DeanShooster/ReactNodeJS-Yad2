import { Fragment, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import './main-nav-bar.scss';

import DropDown from "../drop-down/DropDown";
import BurgerMenu from "./burger-menu/BurgerMenu";

type Props={windowWidth: number};

const MainNavBar = ( props: Props ) => {

    const [dropDown,setDropDown] = useState<number>(-1); // Drop down bar uses indexes in order to "understand" which nav.
    const {pathname} = useLocation();

    const navLinks : Array<{name: string, path: string}> = [
        {name: 'נדל"ן', path: '/realestate/sell' },
        {name: 'רכב', path: '/vehicles/cars'},
        {name: 'יד שנייה', path: '/products'},
        {name: 'דרושים IL', path: '/required'},
        {name: 'עסקים למכירה', path: '/businesses-for-sale'},
        {name: 'חיות מחמד', path: '/pets'},
        {name: 'בעלי מקצוע', path: '/professionals'},
        {name: 'עוד...', path: '/more'}
    ];

    // Drop down handlers
    const onNavOverHandler = ( event: any ) => setDropDown(navLinks.findIndex( (element) => (element.name === event.target.innerHTML.trim())));
    const onNavLeaveHandler = () => setDropDown(-1);

    // Handlers 'ACTIVE' nav with inner nested paths.
    const ActiveMainNavHandler = (index: number) =>{
        const paths = ['realestate','vehicles','products','required','businesses-for-sale','pets','professionals','more'];
        for(let i = 0; i < paths.length ; i ++)
            if(pathname.includes(paths[i]) && index === i) return true;
    }

    return (
        <Fragment>
            { props.windowWidth > 1300 ? <ul className="main-nav-bar">
                {navLinks.map( (nav,index)=>{
                    return <li key={nav.path + '' + nav.name} value={index} onMouseEnter={onNavOverHandler} onMouseLeave={onNavLeaveHandler} >
                        <NavLink to={nav.path} 
                                style={ ()=> { return ActiveMainNavHandler(index) ? {backgroundColor: 'rgb(243, 242, 242)'} : {color: ''}} } 
                                > {nav.name}
                        </NavLink>
                        { (dropDown === index) && <DropDown title={nav.name}/> }
                    </li> })} </ul>
                : <BurgerMenu navLinks={navLinks}/> }
        </Fragment>
    );
};

export default MainNavBar;