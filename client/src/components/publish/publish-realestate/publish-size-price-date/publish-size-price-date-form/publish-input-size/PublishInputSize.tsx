import {Fragment} from 'react';

import InputSVG from '../../../../../../utils/input-svg/InputSVG';

type Props = {setSizePriceForm: Function, sizePriceForm: any};

const PublishInputSize = (props: Props) => {

    const inputHandler = (event: any) => {
        switch(event.target.placeholder){
            case 'כמה מר יש בנכס':{props.setSizePriceForm({...props.sizePriceForm, size: event.target.value}); break;}
            case 'סכום מינימלי 100,000':{props.setSizePriceForm({...props.sizePriceForm, price: event.target.value}); break;}
        }
    }

    return (
        <Fragment>
            <div className="publish-form-div-wrapper disable-arrows-number-input" onChange={inputHandler}>
                <label>מ"ר בנוי</label>
                <InputSVG placeholder="כמה מר יש בנכס" type='number'/>
            </div>
            <div className="publish-form-div-wrapper disable-arrows-number-input">
                <label>גודל במ"ר סך הכל*</label>
                <InputSVG placeholder='' type='number'/>
            </div>
            <div className="publish-form-div-wrapper disable-arrows-number-input" onChange={inputHandler}>
                <label>מחיר</label>
                <InputSVG placeholder="סכום מינימלי 100,000" type='number'/>
            </div>
        </Fragment>
    );
};

export default PublishInputSize;