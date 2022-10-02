
import './publish-header.scss';
import Logo from '../../header/logo/Logo';

import PublishNav from '../publish-nav/PublishNav';

import useWindow from '../../../utils/customHook/useWindow';

const PublishHeader = () => {

    const windowWidth = useWindow();

    return (
        <div className='publish-header'>
            <div className='logo-title-wrapper'>
                <Logo />
                { windowWidth > 600 && <h3>פרסום מודעה חדשה</h3> }
            </div>
            <PublishNav windowWidth={windowWidth}/>
        </div>
    );
};

export default PublishHeader;