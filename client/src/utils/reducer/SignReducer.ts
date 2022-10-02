type Action<T>= { type: string, payload: T };

export function SignReducer( state : any, action: Action<string>)
{
    switch(action.type){
        case 'EMAIL':{
            let email = false;
            if( EmailValidator( action.payload ) ) email = true;
            const values = { ...state.values, email };
            return {...state,values };
        }
        case 'PASSWORD':{
            let password = false;
            if( PasswordValidator( action.payload ) ) password = true;
            const values = {...state.values,password};
            return {...state,values };
        }
        case 'REPEAT_PASSWORD':{
            let repeatPassword = false;
            if( PasswordValidator( action.payload ) ) repeatPassword = true;
            const values = {...state.values,repeatPassword};
            return {...state,values };
        }
    }
    return state;
}

/**
 * Checks if a given email is valid under the rules of: has @ , ends with .com, .co.il , .org
 * @param email User input email
 * @returns true if valid otherwise false
 */
function EmailValidator( email: string )
{
    if( email !== null && email.length <= 5 ) return false;        
    if( email.includes('@') && (email.includes('.com') || email.includes('.co.il') || email.includes('.org')) ) return true;
    return false;
}
/**
 * Checks if a given password is valid under the rules of: longer than 4, has 1 number , has 1 uppercase.
 * @param password User input password
 * @returns True if valid false otherwise
 */
function PasswordValidator( password: string )
{
    if( password !== null && password.length <= 4 ) return false;
    const passwordValid = { numbers: false, uppercase: false };
    for(let i = 0; i < password.length ; i++){
        const char = password[i].charCodeAt(0);
        if( char > 122 || (char < 97 && char > 90) || char < 48 ) return false; // Invalid characters
        if( char > 47 && char < 58 ) passwordValid.numbers = true;
        if( char > 64 && char < 91 ) passwordValid.uppercase = true;
    }
    if( passwordValid.numbers && passwordValid.uppercase ) return true;
    else return false;
}