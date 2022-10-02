import { Fragment } from 'react';

import './home-page.scss';

import IntroNav from './intro-nav/IntroNav';
import IntroCommerical from './IntroCommerical';

const HomePage = () => {
    return (
        <Fragment>
            <IntroCommerical />
            <IntroNav />
        </Fragment>
    );
};

export default HomePage;