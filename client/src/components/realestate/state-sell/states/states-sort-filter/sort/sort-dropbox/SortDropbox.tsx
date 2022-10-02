
type Props= { sortBy: {date: boolean, cheap: boolean, expensive: boolean}, setSort: Function,setSortBy: Function };

const SortDropbox = ( props : Props ) => {

    const sortHandler = (event: any) =>{
        switch(event.target.value){
            case '': { props.setSortBy( {date: true, cheap: false, expensive: false }); break; }
            case 'cheap': { props.setSortBy( {date: false, cheap: true, expensive: false }); break; }
            case 'expensive': { props.setSortBy( {date: false, cheap: false, expensive: true }); break; }
        }        
        props.setSort(event.target.value);
    }

    return (
        <div className="sort-dropbox">
            <div className="sort-dropbox-triangle"></div>
            <li>
                <input type='radio' checked={props.sortBy.date} value='' readOnly onClick={sortHandler}/>
                <span>לפי תאריך</span>
            </li>
            <li>
                <input type='radio' checked={props.sortBy.cheap} value='cheap' readOnly onClick={sortHandler}/>
                <span>מחיר - מהזול ליקר</span>
            </li>
            <li>
                <input type='radio' checked={props.sortBy.expensive} value='expensive' readOnly onClick={sortHandler}/>
                <span>מחיר - מהיקר לזול</span>
            </li>
        </div>
    );
};

export default SortDropbox;