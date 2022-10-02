
import './publish-contact.scss';

import PublishTitle from "../publish-title/PublishTitle";
import PublishContactForm from './publish-contact-form/PublishContactForm';

type Props = {formStage: any , setFormStage: Function, form: any };

const PublishContact = (props: Props) => {

    const inActive = 'inactive-publish-realestate-section-card';

    return (
        <section className={"publish-realestate-section-card " + (props.formStage.six.active ? '' : inActive)}>
            <PublishTitle number='6' title='פרטים ליצירת קשר' itemState={props.formStage.six}/>
            { props.formStage.six.active && <PublishContactForm formStage={props.formStage} setFormStage={props.setFormStage} form={props.form}/> }
        </section>
    );
};

export default PublishContact;