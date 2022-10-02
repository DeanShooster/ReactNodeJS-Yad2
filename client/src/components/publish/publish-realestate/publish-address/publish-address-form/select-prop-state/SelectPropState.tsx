
type Props = {setAddressForm: Function, addressForm: any };

const SelectPropState = (props: Props) => {

    const selectHandler = (event: any) => props.setAddressForm({...props.addressForm, propertyState: event.target.value});

    return (
        <div className="publish-form-div-wrapper">
            <label>מצב הנכס*</label>
            <select onChange={selectHandler}>
                <option value="Completely New">חדש מקבלן - לא גרו בו כלל</option>
                <option value="New">חדש - בן עד 5 שנים</option>
                <option value="Renovated">משופץ - שופץ ב5 שנים אחרונות</option>
                <option value="Fine">במצב שמור - מצב טוב לא שופץ</option>
                <option value="Poor">דרוש שיפוץ - זקוק לעבודות שיפוץ</option>
            </select>
        </div>
    );
};

export default SelectPropState;