
type Props = {dispatchForm: Function };

const SearchCleanButton = (props: Props) => {
    return (
        <div className="search-clean-button-container">
            <button>חיפוש</button>
            <span onClick={()=> props.dispatchForm({type:'CLEAN'}) }>נקה</span>
        </div>
    );
};

export default SearchCleanButton;