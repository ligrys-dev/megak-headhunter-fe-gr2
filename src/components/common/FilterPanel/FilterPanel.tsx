import './FilterPanel.css';
import {FilterPopup} from "../FilterPopup/FilterPopup";

export const FilterPanel = () => {
    return (
        <div className="filter-panel">
            <div className="search">
                <img src="/assets/search.svg" alt="Magnifier"/>
                <input type="text" placeholder="Szukaj"/>
            </div>
            <FilterPopup></FilterPopup>
        </div>
    )
}