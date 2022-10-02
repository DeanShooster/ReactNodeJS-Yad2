import { Fragment, useState } from 'react';

import {TbBellRinging2} from 'react-icons/tb';

const StateFormTitle = () => {

    const [popup,setPopup] = useState(false);

    const showPopupHandler = () => setPopup(true);
    const hidePopupHandler = () => setPopup(false);

    return (
        <Fragment>
            <div className="state-form-title-container">
                <h4 className="state-form-title">איזה נכס ל<span>מכירה</span> תרצו לחפש?</h4>
                <div className='mail-notification-button' onMouseOver={showPopupHandler} onMouseLeave={hidePopupHandler}>
                    <TbBellRinging2 className='bell-icon'/>
                    קבלו התראות במייל על החיפוש
                    {popup && <div className='popup'>בחרו אזור וכמות חדרים או אזור ומחיר כדי להתחיל <div className='popup-triangle'></div> </div>}
                </div>
            </div>
        </Fragment>
    );
};

export default StateFormTitle;