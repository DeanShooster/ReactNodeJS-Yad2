import {useState} from 'react';

import {BsPlusLg} from 'react-icons/bs'; // Plus
import {AiOutlineVideoCamera,AiOutlinePicture} from 'react-icons/ai'; // Picture Camera

import PublishPicInput from "./publish-pic-input/PublishPicInput";

type Props = {formStage: any, setFormStage : Function, dispatchForm: Function};

const PublishPicVidForm = (props: Props) => {

    const [file,setFile] = useState<any>();

    const mediaFormHandler = (event: any) =>{
        event.preventDefault();
        if( !file ) return;
        props.dispatchForm({type: 'FORM_4', payload: file });
        const five = {active: false, check: true}, six = {active: true, check: props.formStage.six.check };
        props.setFormStage({...props.formStage,five,six});        
    }

    const fileSelectHandler = (event: any) => setFile(event.target.files[0]);

    const previousFormHandler = () => {
        const four = {active: true, check: props.formStage.four.check}, five = {active: false, check: props.formStage.five.check };
        props.setFormStage({...props.formStage,four,five});
    }

    return (
        <section className='publish-realestate-form-card'>
            <div className='intro-text'>
                <p>ידעת שהמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות?</p>
                <p>לא להסס להעלות לפה תמונות - אפשר עד 10 + וידאו, ולהבליט את הצדדים הטובים ביותר של הנכס</p>
            </div>
            <form autoComplete="off" onSubmit={mediaFormHandler}>
                <div className='upload-main-pic-video-container' onChange={fileSelectHandler}>
                    <PublishPicInput icon={<AiOutlineVideoCamera className='upload-icon'/>} title='העלאת סרטון'/>
                    <PublishPicInput icon={<AiOutlinePicture className='upload-icon'/>} title='תמונה ראשית'/>
                </div>
                <hr className='main-pic-sub-pic-hr-seperator'/>
                <h2 style={{fontWeight: 500}}>תמונות שיופיעו בגוף המודעה</h2>
                <div className='upload-sub-pictures-container'>
                    <PublishPicInput icon={<BsPlusLg className='upload-icon'/>} title='העלאת תמונות'/>
                    <PublishPicInput icon={<BsPlusLg className='upload-icon'/>} title='העלאת תמונות'/>
                    <PublishPicInput icon={<BsPlusLg className='upload-icon'/>} title='העלאת תמונות'/>
                    <PublishPicInput icon={<BsPlusLg className='upload-icon'/>} title='העלאת תמונות'/>
                    <PublishPicInput icon={<BsPlusLg className='upload-icon'/>} title='העלאת תמונות'/>
                    <PublishPicInput icon={<BsPlusLg className='upload-icon'/>} title='העלאת תמונות'/>
                    <PublishPicInput icon={<BsPlusLg className='upload-icon'/>} title='העלאת תמונות'/>
                    <PublishPicInput icon={<BsPlusLg className='upload-icon'/>} title='העלאת תמונות'/>
                    <PublishPicInput icon={<BsPlusLg className='upload-icon'/>} title='העלאת תמונות'/>
                </div>
                <div className="publish-buttons-wrapper">
                    <span onClick={previousFormHandler}>חזרה</span>
                    <button>להמשיך לשלב הבא</button>
                </div>
            </form>
        </section>
    );
};

export default PublishPicVidForm;