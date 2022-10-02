import {useContext,useEffect} from 'react';
import {Outlet, useNavigate } from 'react-router';
import { userContext } from '../../context/UserContext';

import './publish.scss';

import PublishHeader from "./publish-header/PublishHeader";
import { IsLoggedIn } from '../../api/UserRequests';

const Publish = () => {

    const userInfo = useContext(userContext);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchUser = async () =>{
            const user = await IsLoggedIn(localStorage.getItem('token'));
            if(user.error) { navigate('/login'); return;}
            userInfo?.updateUser( {email: user.Email, name: (user.FirstName ? user.FirstName : 'אנונימי') } );
        }
        fetchUser();
    },[userInfo]);

    return (
        <section className="publish-page">
            <PublishHeader />
            <Outlet />
        </section>
    );
};

export default Publish;