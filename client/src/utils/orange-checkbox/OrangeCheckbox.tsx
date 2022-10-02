import './orange-checkbox.scss';

type Props = {value: string, checked: boolean };

const OrangeCheckbox = (props: Props) => {    
    return (
        <input type='checkbox' className='orange-checkbox' value={props.value} checked={props.checked} readOnly/>
    );
};

export default OrangeCheckbox;