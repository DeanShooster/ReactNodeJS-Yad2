
type Props = {dispatchForm: Function, openSearch: {value: string, valid: boolean}};

const FreeSearch = (props: Props) => {

    const blurHandler = (event: any) => {
        props.dispatchForm({type: 'OPEN_SEARCH', payload: {value: event.target.value}});
    }

    return (
        <div className="free-search-container">
            <h5>חיפוש חופשי</h5>
            <input onBlur={blurHandler} placeholder={props.openSearch.value ? 'חיפוש אחרון: '+props.openSearch.value : ''}/>
        </div>
    );
};

export default FreeSearch;