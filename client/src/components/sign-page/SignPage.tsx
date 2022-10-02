
import './login-page.scss';

import SignHeader from './sign-header/SignHeader';
import SignCommercial from './sign-commercial/SignCommercial';
import SignForm from './sign-form/SignForm';

import useWindow from '../../utils/customHook/useWindow';


const SignPage = () => {
    
    const windowWidth = useWindow();

    return (
        <div className='login-page'>
            { windowWidth > 900 ? <SignHeader /> : null }
            <section className='login-sign-container'>
                <SignForm windowWidth={windowWidth}/>
                { windowWidth > 900 ? <SignCommercial /> : null }
            </section>
        </div>
    );
};

export default SignPage;