import {useEffect,useState} from 'react';

import { GetOwnerInfo } from '../../../../../../../api/UserRequests';

type Props = {owner: string}

const ContactUserDropbox = ( props: Props ) => {

    const [stateOwner,setStateOwner] = useState<{FirstName: string, Phone: string} | null >(null);

    useEffect(()=>{
        const fetchData = async () => {
            const data = await GetOwnerInfo(props.owner);
            if(data.error) setStateOwner({FirstName: 'לא ידוע', Phone: 'לא ידוע'});
            else setStateOwner(data);
        }
        fetchData();
    },[props.owner]);
    
    return (
        <div className="contact-user-dropbox">
            <li>{stateOwner?.FirstName}</li>
            <li>{stateOwner?.Phone}</li>
            <li onClick={()=>alert('Not Functional.')}>שלח מייל</li>
        </div>
    );
};

export default ContactUserDropbox;