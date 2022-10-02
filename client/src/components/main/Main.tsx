import { Fragment } from "react";
import { Outlet, useLocation } from "react-router";

import './main.scss';

import Header from "../header/Header";
import GenericSubHeader from "../generic-sub-header/GenericSubHeader";
import HomePage from "./home-page/HomePage";
import Footer from "../footer/Footer";

const Main = () => {

    const {pathname} = useLocation();

    return (
        <Fragment>
            <Header />
            { pathname?.length > 1 && pathname !== '/professionals' && pathname !== '/required' && pathname !== '/more'
                ? <Fragment>
                    <GenericSubHeader title={pathname.substring(1,pathname.length)}/>  <Outlet />
                </Fragment> 
                : <HomePage /> }
            <Footer />
        </Fragment>
    );
};

export default Main;