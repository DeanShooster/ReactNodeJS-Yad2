import AdvancedForm from "./advanced-form/AdvancedForm";
import StateFormTitle from "./state-form-title/StateFormTitle";

type Props = {setStates: Function};

const StateForm = (props: Props) => {
    return (
        <section className="state-form-section-wrapper">
            <div className="state-form-container">
                <StateFormTitle />
                <AdvancedForm setStates={props.setStates}/>
            </div>
        </section>
    );
};

export default StateForm;