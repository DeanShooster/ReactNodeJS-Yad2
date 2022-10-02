import Sort from "./sort/Sort";
import Filter from "./filter/Filter";
import Map from "./map/Map";

type Props={ setSort: Function };

const StatesSortFilter = ( props: Props ) => {
    return (
        <div className="sort-filter-map-container">
            <Sort setSort={props.setSort}/>
            <Filter />
            <Map />
        </div>
    );
};

export default StatesSortFilter;