import './FilterPanel.css';
import {FilterPopup} from "../FilterPopup/FilterPopup";
import {useEffect, useState} from "react";
import {getStudentsForRecruiter} from "../../../api/get-students-for-recruiter";

interface Props {
    onChildClick: () => {};
}

export const FilterPanel = (props: Props) => {
    const [searchItem, setSearchItem] = useState('');
    const [students, setStudents] = useState([]);
    useEffect(() => {
        (async () => {
            const studentArray = await getStudentsForRecruiter();
            setStudents(studentArray.students);
        })();
    }, []);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredItems = students.filter((user) =>
            user.profile.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        props.onChildClick(filteredItems)
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