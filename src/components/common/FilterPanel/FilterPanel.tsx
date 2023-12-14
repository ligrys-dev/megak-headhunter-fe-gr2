import './FilterPanel.css';
import {FilterPopup} from "../FilterPopup/FilterPopup";
import {useState} from "react";
import {StudentInitialInterface} from "types";

interface Props {
    students: StudentInitialInterface[];
    onChildClick: () => {};
}

export const FilterPanel = (props: Props) => {
    const [searchItem, setSearchItem] = useState('');

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredItems = props.students.filter((user) =>
            user.profile.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredItems.length !== 0){
            props.onChildClick(filteredItems)
        } else {
            props.onChildClick(null)
        }

    }

    return (
        <div className="filter-panel">
            <div className="search">
                <img src="/assets/search.svg" alt="Magnifier"/>
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleInputChange}
                    placeholder="Szukaj"/>
            </div>
            <FilterPopup></FilterPopup>
        </div>
    )
}