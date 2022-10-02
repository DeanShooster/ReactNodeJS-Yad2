
import './publish-props.scss';

import PublishTitle from '../publish-title/PublishTitle';
import PublishPropsForm from './publish-props-form/PublishPropsForm';

type Props = {formStage: any , setFormStage: Function, dispatchForm: Function };

const PublishProps = (props: Props) => {

    const inActive = 'inactive-publish-realestate-section-card';

    return (
        <section className={"publish-realestate-section-card " + (props.formStage.three.active ? '' : inActive)}>
            <PublishTitle number='3' title='על הנכס' itemState={props.formStage.three}/>
            { props.formStage.three.active && <PublishPropsForm dispatchForm={props.dispatchForm} setFormStage={props.setFormStage} formStage={props.formStage}/> }
        </section>
    );
};

export default PublishProps;