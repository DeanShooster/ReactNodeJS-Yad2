import { useContext,useEffect } from "react";
import { userContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

import './main-user-nav-bar.scss';
import {TbBellRinging2} from 'react-icons/tb'; //Bell icon
import {AiOutlineHeart} from 'react-icons/ai'; // Heart icon
import {BsPerson} from 'react-icons/bs'; // User icon
import {GoPlus} from 'react-icons/go'; // Plus icon

import LoggedUserBar from "./logged-user-bar/LoggedUserBar";
import { IsLoggedIn } from "../../../api/UserRequests";

type Props={windowWidth: number};

const MainUserNavBar = ( props: Props ) => {

    const navigate = useNavigate();
    const userInfo = useContext(userContext);

    const newAdvertHandler = () => navigate('/publish');
    const alertHandler = () => alert('Not functional.');
    const loginHandler = () => navigate('/login');

    useEffect(()=>{
        const fetchUser = async () =>{
            const user = await IsLoggedIn(localStorage.getItem('token'));
            if(user.error) return;
            userInfo?.updateUser( {email: user.Email, name: (user.FirstName ? user.FirstName : 'אנונימי') } );
        }
        fetchUser();
    },[userInfo]);

    return (
        <div className="user-nav-bar">
            {props.windowWidth > 600 && <ul>
                <li onClick={alertHandler}><TbBellRinging2 className="user-nav-bar-icon"/>{props.windowWidth >= 1500 && <span>התראות</span>}</li>
                <li onClick={alertHandler}><AiOutlineHeart className="user-nav-bar-icon"/>{props.windowWidth >= 1500 && <span>מודעות שאהבתי</span>}</li>
                { userInfo?.user ? <LoggedUserBar email={userInfo.user.email} name={userInfo.user.name} windowWidth={props.windowWidth}/> : <li onClick={loginHandler}><BsPerson className="user-nav-bar-icon"/>{props.windowWidth > 1500 ? <span>התחברות</span> : null}</li>}
            </ul>}
            <button onClick={newAdvertHandler}>
                <GoPlus className="new-advert-icon"/>
                <span>פרסום מודעה חדשה</span>
            </button>
        </div>
    );
};

export default MainUserNavBar;