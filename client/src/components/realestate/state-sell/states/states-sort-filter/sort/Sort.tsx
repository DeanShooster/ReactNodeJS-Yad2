import { useState } from "react";

import { RiArrowDropDownLine,RiArrowDropUpLine } from "react-icons/ri";
import SortDropbox from "./sort-dropbox/SortDropbox";

type Props= {setSort: Function };

const Sort = ( props: Props ) => {

    const [dropbox,setDropbox] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState<{date: boolean,cheap:boolean,expensive: boolean}>({date: true, cheap: false, expensive: false});

    const dropboxHandler = () => setDropbox(!dropbox);

    return (
        <div className="sort-container">
            <span>מיין לפי</span>
            <div className="sort" onClick={dropboxHandler}>
                <span>{sortBy.date ? 'לפי תאריך' : (sortBy.cheap ? 'מחיר - מהזול ליקר' : 'מחיר - מהיקר לזול') }</span>
                { dropbox ? <RiArrowDropUpLine className="sort-arrow-icon"  /> : <RiArrowDropDownLine className="sort-arrow-icon" /> }
                { dropbox && <SortDropbox sortBy={sortBy} setSort={props.setSort} setSortBy={setSortBy}/> }
            </div>
        </div>
    );
};

export default Sort;