
type Props = {setAddressForm: Function, addressForm: any };

const SelectPropKind = (props: Props) => {

    const selectHandler = (event: any) => props.setAddressForm({...props.addressForm, propertyKind: event.target.value});

    return (
        <div className="publish-form-div-wrapper publish-address-form-container">
            <label>סוג הנכס*</label>
            <select onChange={selectHandler}>
                <option value="Apartment">דירה</option>
                <option value="Garden Apartment">דירת גן</option>
                <option value="Private House">בית פרטי/קוטג'</option>
                <option value="Penthouse">גג/פנטהאוז</option>
                <option value="Field">מגרשים</option>
                <option value="Duplex">דופלקס</option>
                <option value="Holiday Apartment">דירת נופש</option>
                <option value="Family Duplex">דו משפחתי</option>
                <option value="Basement">מרתף/פרטר</option>
                <option value="Triplex">טריפלקס</option>
                <option value="Studio">יחידת דיור</option>
                <option value="Farm">משק חקלאי/נחלה</option>
                <option value="Nursing Home">דיור מוגן</option>
                <option value="Tower">בניין מגורים</option>
                <option value="Studio Loft">סטודיו/לופט</option>
                <option value="Warehouse">מחסן</option>
                <option value="Parking">חניה</option>
                <option value="Purchase Group">קב' רכישה/זכות לנכס</option>
                <option value="General">כללי</option>
            </select>
        </div>
    );
};

export default SelectPropKind;