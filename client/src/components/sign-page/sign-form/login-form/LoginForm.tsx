import { Fragment, useContext, useEffect, useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

import { SignReducer } from "../../../../utils/reducer/SignReducer";
import { UserLogin } from "../../../../api/UserRequests";
import { userContext } from "../../../../context/UserContext";

type Props={ signUpForm : Function}

const LoginForm = ( props: Props ) => {

    const navigate = useNavigate();
    const userInfo = useContext(userContext);
    const [showPassword,setShowPassword] = useState<string>('password');
    const [errorMsg,setErrorMsg] = useState<string>('');
    const [loginForm,dispatchLoginForm] = useReducer( SignReducer,{ values: { email: null, password: null } } );

    const [showClear,setShowClear] = useState<boolean>(false);
    const inputEl = useRef<HTMLInputElement>(null);

    useEffect(()=>{ if( (loginForm.values.email || loginForm.values.password ) ) setErrorMsg(''); },[loginForm]);

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

    const onLoginHandler = async (event : any) =>{
        event.preventDefault();
        const credentials = { email: event.target[0].value , password: event.target[1].value };
        if( loginForm.values.email && loginForm.values.password ){
            const result = await UserLogin(credentials);
            if(result.status === 404 ) { setErrorMsg(result.error); return;}
            if( result.status === 500 ){ setErrorMsg('שגיאת שרת. נסה מאוחר יותר.'); return;};
            localStorage.setItem('token',result.token);
            userInfo?.updateUser( {email: credentials.email, name: (result.name ? result.name : 'אנונימי') } );
            navigate('/');
        }
        setErrorMsg('לא לשכוח להזין פרטים!')
    }

    return (
        <Fragment>
            <form onSubmit={onLoginHandler}>
                <label>מייל</label>
                <div>
                    <input ref={inputEl} autoComplete='username' placeholder='yourmail@email.co.il' type='text' onChange={onChangeHandler}
                        style={ loginForm.values.email === null ? {} : (loginForm.values.email ? {} : { border : '1px solid red'} ) }
                        onBlur={ (event)=> { dispatchLoginForm( { type: 'EMAIL' , payload: event.target.value } ) } }/>
                    {showClear && <VscChromeClose className='input-icon' onClick={onClearClickHandler}/>}
                </div>
                {loginForm.values.email === null ? null : (loginForm.values.email ? null : <p className="error-email">אימייל חייב להכיל @ וגם להיות משוייך לארגון.</p>)}
                <label>סיסמה</label>
                <div>
                    <input placeholder='הקלדת סיסמה' type={showPassword} autoComplete='new-password'
                        style={ loginForm.values.password === null ? {} : (loginForm.values.password ? {} : { border : '1px solid red'} ) }
                        onBlur={ (event)=> { dispatchLoginForm( { type: 'PASSWORD' , payload: event.target.value } ) } }/>
                    {showPassword === 'password' ? <BsFillEyeFill className='input-icon' onClick={()=> setShowPassword('text')}/> 
                        : <BsFillEyeSlashFill className='input-icon' onClick={()=> setShowPassword('password')}/>}
                </div>
                {loginForm.values.password === null ? null : (loginForm.values.password ? null : <p className="error-password">סיסמה חייבת להכיל אות גדולה, מספר ובאורך 4 לפחות.</p>)}
                <span onClick={ ()=> alert('Not Functional') }>שכחתי סיסמה</span>
                { errorMsg && <p className="error-password">{errorMsg}</p>}
                <button>התחברות</button>
            </form>
            <div className='sign-up-link'>
                אין לך חשבון?
                <span onClick={ ()=> props.signUpForm() }>להרשמה</span>
            </div>
        </Fragment>
    );
};

export default LoginForm;