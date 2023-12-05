import {ChangeEvent, FormEvent, useState} from 'react';
import './HRForm.css';

export const HRForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        company: '',
        maxReservedStudents: 0,
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        fullName: '',
        company: '',
        maxReservedStudents: '',
    });

    const validateEmail = (email: string) => {
        // Prosta walidacja adresu e-mail (zawiera @)
        return email.includes('@');
    };

    const validateFullName = (fullName: string) => {
        // Sprawdzenie, czy imię i nazwisko nie są puste
        return fullName.trim() !== '';
    };

    const validateCompany = (company: string) => {
        // Sprawdzenie, czy nazwa firmy nie jest pusta
        return company.trim() !== '';
    };

    const validateMaxReservedStudents = (maxReservedStudents: number) => {
        const numericValue = maxReservedStudents;
        return !isNaN(numericValue) && numericValue >= 1 && numericValue <= 999;
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Jeśli to pole to maxReservedStudents, skonwertuj wartość na liczbę
        const newValue = name === 'maxReservedStudents' ? parseInt(value, 10) : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors = {
            email: validateEmail(formData.email) ? '' : 'Nieprawidłowy adres e-mail',
            fullName: validateFullName(formData.fullName) ? '' : 'Imię i nazwisko nie mogą być puste',
            company: validateCompany(formData.company) ? '' : 'Nazwa firmy nie może być pusta',
            maxReservedStudents: validateMaxReservedStudents(formData.maxReservedStudents)
                ? ''
                : 'Maksymalna liczba osób musi być liczbą w zakresie 1-999',
        };

        setFormErrors(errors);

        // Jeśli nie ma błędów, można wysłać dane
        if (!Object.values(errors).some((error) => error !== '')) {


            console.log(formData.maxReservedStudents, typeof formData.maxReservedStudents)
            const data = JSON.stringify(formData);
            console.log(data, 'data');
            try {
                const res = await fetch('http://localhost:3001/user/recruiter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (res.ok) {
                    console.log('Pomyślnie wysłano dane na backend.');
                } else {
                    const errorData = await res.json();
                    console.error('Błąd podczas wysyłania danych', errorData.message);
                }
            } catch (error) {
                console.error('Błąd podczas wysyłania danych:', error);
            }
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type='text'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    : Email
                    {formErrors.email && <p className='error-message'>{formErrors.email}</p>}
                </label>
                <br/>

                <label>
                    <input
                        type='text'
                        name='fullName'
                        value={formData.fullName}
                        onChange={handleInputChange}
                    />
                    : Imię i nazwisko
                    {formErrors.fullName && <p className='error-message'>{formErrors.fullName}</p>}
                </label>
                <br/>

                <label>
                    <input
                        type='text'
                        name='company'
                        value={formData.company}
                        onChange={handleInputChange}
                    />
                    : Nazwa firmy
                    {formErrors.company && <p className='error-message'>{formErrors.company}</p>}
                </label>
                <br/>

                <label>
                    <input
                        type='text'
                        name='maxReservedStudents'
                        value={formData.maxReservedStudents}
                        onChange={handleInputChange}
                    />
                    : Maksymalna liczba osób do dodania
                    {formErrors.maxReservedStudents && (
                        <p className='error-message'>{formErrors.maxReservedStudents}</p>
                    )}
                </label>
                <br/>

                <button type='submit'>Dodaj HR</button>
            </form>
        </>
    );
};
