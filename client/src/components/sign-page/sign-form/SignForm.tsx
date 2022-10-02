import { useState } from "react";

import './sign-form.scss';
import MobilePhoneIcon from "./mobile-sign-icon/MobilePhoneIcon";

import LoginForm from "./login-form/LoginForm";
import SignUpForm from "./signup-form/SignUpForm";

type Props = {windowWidth: number};

const SignForm = ( props: Props ) => {

    const [isLoginForm,setIsLoginForm] = useState(true);
    const onFormChangeHandler = () => setIsLoginForm(!isLoginForm);

    return (
        <div className='login'>
            { props.windowWidth <= 900 && <MobilePhoneIcon />}
            {isLoginForm ? <h1>היי טוב לראות אותך</h1> : <h1>היי, נעים להכיר</h1>}
            {isLoginForm ?  <LoginForm signUpForm={onFormChangeHandler}/> : <SignUpForm loginForm={onFormChangeHandler}/> }
        </div>
    );
};

export default SignForm;