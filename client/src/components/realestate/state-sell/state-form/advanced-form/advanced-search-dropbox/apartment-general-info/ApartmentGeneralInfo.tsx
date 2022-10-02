import ApartmentEntranceDate from "./apartment-entrance-date/ApartmentEntranceDate";
import ApartmentFloor from "./apartment-floor/ApartmentFloor";
import ApartmentSize from "./apartment-size/ApartmentSize";
import ImmediateEntrance from "./immediate-entrance/ImmediateEntrance";

type Props = {dispatchForm: Function, formState: any };

const ApartmentGeneralInfo = (props: Props) => {
    return (
        <div className="apartment-general-info-container">
            <ApartmentFloor dispatchForm={props.dispatchForm} floorRange={props.formState.floorRange}/>
            <ApartmentSize dispatchForm={props.dispatchForm} sizeRange={props.formState.sizeRange.value}/>
            <ApartmentEntranceDate />
            <ImmediateEntrance dispatchForm={props.dispatchForm} immediateEntrance={props.formState.immediateEntrance}/>
        </div>
    );
};

export default ApartmentGeneralInfo;