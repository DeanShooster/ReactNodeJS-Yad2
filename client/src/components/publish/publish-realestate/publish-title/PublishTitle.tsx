
import './publish-title.scss';
import {ImCheckmark} from 'react-icons/im';

type Props = {number: String, title: String , itemState: { active: Boolean , check: Boolean }};

const PublishTitle = (props: Props) => {   
    
    const green = (props.itemState.active || props.itemState.check) ? 'selected-checked-number' : '';
    const numberORcheckmark = props.itemState.check ? <ImCheckmark className='publish-title-checkmark'/> : props.number;

    return (
        <div className='publish-title-container'>
            <span className={'number-container ' + green }><span>{numberORcheckmark}</span></span>
            <h2>{props.title}</h2>
        </div>
    );
};

export default PublishTitle;