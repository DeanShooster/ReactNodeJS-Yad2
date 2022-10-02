
const server = 'http://localhost:4000';

/**
 * API User Login request.
 * @param {User Credentials} credentials 
 * @returns Token on success otherwise failure object.
 */
async function UserLogin( credentials )
{
    const res = await fetch(`${server}/login`, {
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    });
    return await errorHandler(await res.json());
}

/**
 * API User creation request.
 * @param {User Credentials} credentials 
 * @returns Token on success otherwise failure object
 */
async function UserRegister( credentials )
{
    const res = await fetch(`${server}/register`, {
        method: 'POST',
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    });
    return await errorHandler(await res.json());
}

/**
 * API Initial states on page load ( amount defined by the server ).
 * @returns Array of states otherwise failure object
 */
async function GetInitialStates()
{
    const res = await fetch(`${server}/initial_states`,{method: 'GET'});
    return await errorHandler(await res.json());
}

/**
 * API Owner contact info request.
 * @param {Owner Email} email 
 * @returns Owner contact info object otherwise failure object
 */
async function GetOwnerInfo( email )
{
    const res = await fetch(`${server}/owner/${email}`,{ method: 'GET' });
    return await errorHandler(await res.json());
}

/**
 * Checks if a user exist given a token.
 * @param {User Token} token 
 * @returns User information otherwise failure object
 */
async function IsLoggedIn( token )
{
    const res = await fetch(`${server}/validate`,{
        method: 'GET',
        headers: {token}
    });
    return await errorHandler(await res.json());
}

/**
 * API Realestate user publish request.
 * @param {Estate and User information} estate 
 * @param {User Token} token 
 * @returns 
 */
async function PublishRealestate( estate, token )
{
    const res = await fetch(`${server}/publish/realestate`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json', token },
        body: JSON.stringify(estate)
    });
    return await errorHandler(await res.json());
}

/**
 * API Realestate user search request.
 * @param {User Search Form Data} form 
 */
async function GetSearchStates( form )
{
    const res = await fetch(`${server}/realestate/search`,{
        method: 'POST',
        headers:  { 'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    });
    return await errorHandler(await res.json());
}

/**
 * General error handler.
 * @param {Result Server Object} ob 
 * @returns Results otherwise failure object.
 */
async function errorHandler( ob )
{
    if( ob.Message ) return { error: ob.Message, status: ob.status };
    else return ob;
}

module.exports = { UserLogin,UserRegister,GetInitialStates,GetOwnerInfo,IsLoggedIn ,PublishRealestate,GetSearchStates};