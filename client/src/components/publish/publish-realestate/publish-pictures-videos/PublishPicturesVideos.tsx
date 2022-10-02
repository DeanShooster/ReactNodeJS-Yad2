
import './publish-pictures-videos.scss';

import PublishTitle from "../publish-title/PublishTitle";
import PublishPicVidForm from './publish-pic-vid-form/PublishPicVidForm';

type Props = {formStage: any , setFormStage: Function, dispatchForm: Function };

const PublishPicturesVideos = (props: Props) => {

    const inActive = 'inactive-publish-realestate-section-card';

    return (
        <section className={"publish-realestate-section-card " + (props.formStage.five.active ? '' : inActive)}>
            <PublishTitle number='5' title='תמונות וסרטונים' itemState={props.formStage.five}/>
            { props.formStage.five.active && <PublishPicVidForm formStage={props.formStage} setFormStage={props.setFormStage} dispatchForm={props.dispatchForm}/> }
        </section>
    );
};

export default PublishPicturesVideos;