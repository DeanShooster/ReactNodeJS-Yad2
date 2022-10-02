import {useState} from 'react';

import PublishDateEntrance from './publish-date-entrance/PublishDateEntrance';
import PublishInputSize from './publish-input-size/PublishInputSize';

type Props = {setFormStage: Function, formStage: any, dispatchForm: Function };

const PublishSizePriceDateForm = (props: Props) => {

    const [sizePriceForm,setSizePriceForm] = useState<any>({ size: '', price: '', entranceDate: null, immediateEntrance: null });

    const submitSizePriceFormHandler = (event: any)=>{
        event.preventDefault();
        props.dispatchForm({type: 'FORM_3',payload: sizePriceForm});
        const four = {active: false, check: true}, five = {active: true, check: props.formStage.five.check };
        props.setFormStage({...props.formStage,four,five});
    }

    const previousFormHandler = () => {
        const three = {active: true, check: props.formStage.three.check}, four = {active: false, check: props.formStage.four.check };
        props.setFormStage({...props.formStage,three,four});
    }

    return (
        <section className="publish-realestate-form-card">
            <form autoComplete="off" onSubmit={submitSizePriceFormHandler}>
                <PublishInputSize sizePriceForm={sizePriceForm} setSizePriceForm={setSizePriceForm}/>
                <PublishDateEntrance sizePriceForm={sizePriceForm} setSizePriceForm={setSizePriceForm}/>
                <div className="publish-buttons-wrapper">
                    <span onClick={previousFormHandler}>חזרה</span>
                    <button>להמשיך לשלב הבא</button>
                </div>
            </form>
        </section>
    );
};

export default PublishSizePriceDateForm;