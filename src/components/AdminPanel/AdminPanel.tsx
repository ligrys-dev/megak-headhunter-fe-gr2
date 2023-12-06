import {useState} from 'react';
import {StudentImport} from "./StudentImport.tsx";
import {HRForm} from "./HRForm.tsx";
import {HeaderPanel} from "../common/HeaderPanel/HeaderPanel";
import {BookmarksPanel} from "../common/BookmarksPanel/BookmarksPanel";
import './AdminPanel.css';

export const AdminPanel = () => {
    const [selectedForm, setSelectedForm] = useState<string | null>(null);
    const bookmarks = [
        ['addStudents', 'Dodaj kursantów'],
        ['addHR', 'Dodaj HR'],
    ];

    const handleFormSelection = (formType: string) => {
        setSelectedForm(formType);
    };

    const renderForm = () => {
        switch (selectedForm) {
            case 'kursant':
                return <StudentImport/>;
            case 'hr':
                return <HRForm/>;
            default:
                return null;
        }
    };

    return (
        <div className='admin_panel'>
            <HeaderPanel name="Admin" lastName="admin@admin.com" urlAccount="/student"/>
            <div className="panel_main">
                <BookmarksPanel bookmarks={bookmarks}/>
                {/*<p className={`form-option ${selectedForm === 'kursant' ? 'selected' : ''}`}*/}
                {/*   onClick={() => handleFormSelection('kursant')}>Dodaj Kursantów</p>*/}
                {/*<p className={`form-option ${selectedForm === 'hr' ? 'selected' : ''}`}*/}
                {/*   onClick={() => handleFormSelection('hr')}>Dodaj HR</p>*/}
                {renderForm()}
            </div>
        </div>
    );
};