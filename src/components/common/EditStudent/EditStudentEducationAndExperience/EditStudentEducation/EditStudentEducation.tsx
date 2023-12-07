import { useContext } from 'react';
import './EditStudentEducation.css';
import { EditStudentDataContext } from 'src/context/EditStudentDataContext';

interface Props {
    onChange: Function;
}

export const EditStudentEducation = (props: Props) => {
    const {form, setForm} = useContext(EditStudentDataContext)

 
    return (
        <div className="student-education">
            <h2>Edukacja</h2>
                <textarea value={form.education ? form.education : 'Brak danych'} onChange = {e => props.onChange('education', e.target.value)}></textarea>
            <h2>Kursy</h2>
                <textarea value = {form.courses ? form.courses : 'Brak danych'} onChange = {e => props.onChange('courses', e.target.value)}></textarea>
        </div>
    )
}