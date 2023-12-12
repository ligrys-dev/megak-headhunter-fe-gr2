import { ChangeEvent, FormEvent, useState } from 'react';
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

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionFail, setSubmissionFail] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

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
    const newValue =
      name === 'maxReservedStudents' ? parseInt(value, 10) : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = {
      email: validateEmail(formData.email) ? '' : 'Nieprawidłowy adres e-mail',
      fullName: validateFullName(formData.fullName)
        ? ''
        : 'Imię i nazwisko nie mogą być puste',
      company: validateCompany(formData.company)
        ? ''
        : 'Nazwa firmy nie może być pusta',
      maxReservedStudents: validateMaxReservedStudents(
        formData.maxReservedStudents,
      )
        ? ''
        : 'Maksymalna liczba osób musi być liczbą w zakresie 1-999',
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
        const {name, value} = e.target;

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

            try {
                const res = await fetch('http://localhost:3001/user/recruiter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(formData),
                });

                setEmail(formData.email);

                if (res.ok) {
                    setSubmissionSuccess(true);

                    setFormData({
                        email: '',
                        fullName: '',
                        company: '',
                        maxReservedStudents: 0,
                    });

                } else {
                    const errorData = await res.json();
                    setError(errorData.message);
                    setSubmissionFail(true);
                    console.error('Błąd zatwierdzenia dancyh przez backend', errorData.message);
                    // setFormData({
                    //     email: '',
                    //     fullName: '',
                    //     company: '',
                    //     maxReservedStudents: 0,
                    // });
                }
            } catch (error) {
                console.error('Błąd podczas wysyłania danych:', error);
            }
        }
      } catch (error) {
        console.error('Błąd podczas wysyłania danych:', error);
      }
    }
  };

  return (
    <div className="hr-import-container">
      <h2>Dodaj rekrutera</h2>
      {submissionSuccess && (
        <p className="success-message">
          Użytkownik HR {email}, został dodany prawidłowo do bazy danych.
        </p>
      )}
      {submissionFail && (
        <p className="fail-message">
          Użytkownik HR {email}, <span>nie</span> został dodany do bazy danych (
          {error}).
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
          )}
        </label>
        <br />

        <label>
          Imię i nazwisko
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          {formErrors.fullName && (
            <p className="error-message">{formErrors.fullName}</p>
          )}
        </label>
        <br />

        <label>
          Nazwa firmy
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
          {formErrors.company && (
            <p className="error-message">{formErrors.company}</p>
          )}
        </label>
        <br />

        <label>
          Maksymalna liczba osób do dodania
          <input
            type="number"
            min={1}
            max={999}
            name="maxReservedStudents"
            value={formData.maxReservedStudents}
            onChange={handleInputChange}
          />
          {formErrors.maxReservedStudents && (
            <p className="error-message">{formErrors.maxReservedStudents}</p>
          )}
        </label>
        <br />

        <button type="submit">Dodaj HR</button>
      </form>
    </div>
  );
};
