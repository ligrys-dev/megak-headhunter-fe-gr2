import { FormEvent, useState } from "react";
import { EditStudentDataContext } from "src/context/EditStudentDataContext";
import { ContractType, StudentProfileInterface, StudentStatus, TypeWork } from "types";
import { EditStudentEducation } from "../common/EditStudent/EditStudentEducationAndExperience/EditStudentEducation/EditStudentEducation";
import { EditStudentEmploymentExpectations } from "../common/EditStudent/EditStudentEducationAndExperience/EditStudentEmploymentExpectations/EditStudentEmploymentExpectations";
import { EditStudentExperience } from "../common/EditStudent/EditStudentEducationAndExperience/EditStudentExperience/EditStudentExperience";
import { EditStudentPersonalData } from "../common/EditStudent/EditStudentPersonalData/EditStudentPersonalData";
import './StudentData.css';
import { Spinner } from "../common/Spinner/Spinner";


interface Props {
    user: StudentProfileInterface
}

export const EditStudentData = (props: Props) => {

    const [form, setForm] = useState<StudentProfileInterface>({
        ...props.user
    })
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (key: string, value: any
        //TODO: ustawić typy
        ) => {setForm(userData => ({
           ...userData,
           [key]: value,
       }))
   }

    const submitForm = async (e: FormEvent) => {
        e.preventDefault()

        setLoading(true)

        try {
            const res = await fetch(`http://localhost:3001/student/${form.id
        }`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(form),
        });

        } catch (err) {

            console.error(
                'Błąd przesyłania: ', err
            )

        } finally {
            setLoading(false)
            console.log('Pomyślnie zaktualizowano dane');
        }
    }

    if (loading) {
        return <Spinner/>
    }

    return (
        <EditStudentDataContext.Provider value={{form, setForm}}>
        <form onSubmit={submitForm}>    
        <div className="student-data">
            <EditStudentPersonalData onChange={handleChange}/>
            <div className="education-experience">
                <EditStudentEmploymentExpectations onChange={handleChange}/>
                <EditStudentEducation onChange = {handleChange}/>
                <EditStudentExperience onChange = {handleChange}/>
            </div>
        </div>
        <button type="submit"> Zapisz dane</button>
        </form>
        </EditStudentDataContext.Provider>
    )
}