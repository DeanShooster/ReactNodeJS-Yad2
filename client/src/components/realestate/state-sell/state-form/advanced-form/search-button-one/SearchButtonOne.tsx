import { MdOutlineSearch } from "react-icons/md";

const SearchButtonOne = () => {
    return (
        <button className='search-button-one'>
            <MdOutlineSearch className='search-icon'/>
            <span>חיפוש</span>
        </button>
    );
};

export default SearchButtonOne;