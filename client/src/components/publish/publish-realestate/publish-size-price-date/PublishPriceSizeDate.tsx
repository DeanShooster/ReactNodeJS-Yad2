
import './publish-price-size-date.scss';

import PublishTitle from "../publish-title/PublishTitle";
import PublishSizePriceDateForm from "./publish-size-price-date-form/PublishSizePriceDateForm";

type Props = {formStage: any , setFormStage: Function, dispatchForm: Function };

const PublishPriceSizeDate = (props: Props) => {

    const inActive = 'inactive-publish-realestate-section-card';

    return (
        <section className={"publish-realestate-section-card " + (props.formStage.four.active ? '' : inActive)}>
            <PublishTitle number='4' title='תשלומים, תאריכים ועוד' itemState={props.formStage.four}/>
            { props.formStage.four.active &&  <PublishSizePriceDateForm formStage={props.formStage} setFormStage={props.setFormStage} dispatchForm={props.dispatchForm}/>}
        </section>
    );
};

export default PublishPriceSizeDate;