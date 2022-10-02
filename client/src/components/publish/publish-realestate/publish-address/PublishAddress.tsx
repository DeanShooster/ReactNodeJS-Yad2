
import './publish-address.scss';

import PublishTitle from "../publish-title/PublishTitle";
import PublishAddressForm from './publish-address-form/PublishAddressForm';

type Props = {formStage: any , setFormStage: Function, dispatchForm: Function };

const PublishAddress = (props: Props) => {

    const inActive = 'inactive-publish-realestate-section-card';

    return (
        <section className={"publish-realestate-section-card " + (props.formStage.two.active ? '' : inActive)}>
            <PublishTitle number='2' title='כתובת הנכס' itemState={props.formStage.two}/>
            { props.formStage.two.active &&  <PublishAddressForm dispatchForm={props.dispatchForm} setFormStage={props.setFormStage} formStage={props.formStage}/>}
        </section>
    );
};

export default PublishAddress;