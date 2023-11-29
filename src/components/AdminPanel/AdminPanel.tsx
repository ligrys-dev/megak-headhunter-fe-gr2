import {useState} from 'react';
import {Btn} from "../common/Btn/Btn";
import {StudentImport} from "./StudentImport.tsx";
import {HRForm} from "./HRForm.tsx";
import './AdminPanel.css';

export const AdminPanel = () => {
    const [selectedForm, setSelectedForm] = useState<string | null>(null);

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
        <>
            <div className='admin-panel'>
                <h1>Panel Admina</h1>
                <Btn text='Wyloguj'/>
            </div>
            <p className={`form-option ${selectedForm === 'kursant' ? 'selected' : ''}`}
               onClick={() => handleFormSelection('kursant')}>Dodaj Kursantów</p>
            <p className={`form-option ${selectedForm === 'hr' ? 'selected' : ''}`}
               onClick={() => handleFormSelection('hr')}>Dodaj HR</p>
            {renderForm()}
        </>
    );
};