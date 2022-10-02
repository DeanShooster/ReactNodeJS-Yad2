import { Fragment, useContext, useEffect, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

import { UserRegister } from "../../../../api/UserRequests";
import { SignReducer } from "../../../../utils/reducer/SignReducer";
import { userContext } from "../../../../context/UserContext";

type Props={loginForm: Function}

const SignUpForm = (props: Props) => {

    const navigate = useNavigate();
    const userInfo = useContext(userContext);
    const [showPassword,setShowPassword] = useState<{p1: string, p2: string}>( {p1: 'password', p2: 'password'} );
    const [errorMsg,setErrorMsg] = useState<string>('');
    const [signUpForm,dispatchSignUpForm] = useReducer( SignReducer,{ values: { email: null, password: null, repeatPassword: null } } );

    const [showClear,setShowClear] = useState<boolean>(false);
    const inputEl = useRef<HTMLInputElement>(null);

    useEffect(()=>{ if( (signUpForm.values.email || signUpForm.values.password || signUpForm.values.repeatPassword ) ) setErrorMsg(''); },[signUpForm]);

    // On Email input show X button.
    const onChangeHandler = (event: any) => {
        if( event.target.value.length > 0 ) setShowClear(true);
        else setShowClear(false);
    }
    // on Email X click clears input.
    const onClearClickHandler = () => {
        const input = inputEl.current;
        input!.value = ''; setShowClear(false);
    }

    const onSignUpHandler = async ( event: any ) =>{
        event.preventDefault();       
        if(signUpForm.values.email && signUpForm.values.password && signUpForm.values.repeatPassword ){
            const credentials = { email: event.target[0].value , password: event.target[1].value, repeatPassword: event.target[2].value };
            if( credentials.password !== credentials.repeatPassword ){ setErrorMsg('סיסמאות לא תואמות.'); return;}
            const result = await UserRegister(credentials);
            if( result.status === 403 ){ setErrorMsg(result.error); return; };
            if( result.status === 500 ){ setErrorMsg('שגיאת שרת. נסה מאוחר יותר.'); return;};
            userInfo?.updateUser( {email: credentials.email, name: 'אנונימי'} );
            localStorage.setItem('token',result.token);
            navigate('/');
        }
        setErrorMsg('לא לשכוח להזין פרטים!')
    }

    return (
        <Fragment>
            <form onSubmit={onSignUpHandler}>
                <label>מייל</label>
                <div>
                    <input ref={inputEl} autoComplete='username' placeholder='yourmail@email.co.il' type='text' onChange={onChangeHandler}
                        style={ signUpForm.values.email === null ? {} : (signUpForm.values.email ? {} : { border : '1px solid red'} ) }
                        onBlur={ (event)=> { dispatchSignUpForm( { type: 'EMAIL' , payload: event.target.value } ) } } />
                    {showClear && <VscChromeClose className='input-icon' onClick={onClearClickHandler}/>}
                </div>
                {signUpForm.values.email === null ? null : (signUpForm.values.email ? null : <p className="error-email">אימייל חייב להכיל @ וגם להיות משוייך לארגון.</p>)}
                <label>סיסמה</label>
                <div>
                    <input placeholder='הקלדת סיסמה' type={showPassword.p1} autoComplete='new-password'
                    style={ signUpForm.values.password === null ? {} : (signUpForm.values.password ? {} : { border : '1px solid red'} ) }
                    onBlur={ (event)=> { dispatchSignUpForm( { type: 'PASSWORD' , payload: event.target.value } ) } } />
                    {showPassword.p1 === 'password' ? <BsFillEyeFill className='input-icon' onClick={()=> setShowPassword( {p1: 'text',p2: showPassword.p2})}/> 
                        : <BsFillEyeSlashFill className='input-icon' onClick={()=> setShowPassword( {p1: 'password',p2: showPassword.p2} )}/>}
                </div>
                {signUpForm.values.password === null ? null : (signUpForm.values.password ? null : <p className="error-password">סיסמה חייבת להכיל אות גדולה, מספר ובאורך 4 לפחות.</p>)}
                <label>אימות סיסמה</label>
                <div>
                    <input placeholder='הקלדת סיסמה' type={showPassword.p2} autoComplete='new-password'
                    style={ signUpForm.values.repeatPassword === null ? {} : (signUpForm.values.repeatPassword ? {} : { border : '1px solid red'} ) }
                    onBlur={ (event)=> { dispatchSignUpForm( { type: 'REPEAT_PASSWORD' , payload: event.target.value } ) } }/>
                    {showPassword.p2 === 'password' ? <BsFillEyeFill className='input-icon' onClick={()=> setShowPassword( {p1: showPassword.p1,p2: 'text'} )}/> 
                        : <BsFillEyeSlashFill className='input-icon' onClick={()=> setShowPassword({p1: showPassword.p1,p2: 'password'})}/>}
                </div>
                {signUpForm.values.repeatPassword === null ? null : (signUpForm.values.repeatPassword ? null : <p className="error-password">סיסמה חייבת להכיל אות גדולה, מספר ובאורך 4 לפחות.</p>)}
                { errorMsg && <p className="error-password">{errorMsg}</p>}
                <button>המשך</button>
            </form>
            <div className='sign-up-link'>
                כבר יש לך חשבון?
                <span onClick={ ()=> props.loginForm() }>להתחברות</span>
            </div>
        </Fragment>
    );
};

export default SignUpForm;