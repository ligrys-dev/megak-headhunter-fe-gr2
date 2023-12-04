import { useState, ChangeEvent } from 'react';
import Papa from 'papaparse';
import './StudentImport.css';

interface Student {
    bonusProjectUrls: string;
    courseCompletion: string;
    courseEngagement: string;
    email: string;
    projectDegree: string;
    teamProjectDegree: string;
}

interface FailedStudent {
    email: string;
    errorDetails: string[];
}

interface SuccessfulStudent {
    email: string;
}

export const StudentImport = () => {
    const [data, setData] = useState<Student[]>([]);
    const [columnArray, setColumnArray] = useState<string[]>([]);
    const [values, setValues] = useState<string[][]>([]);
    const [infoAfterSuccessfulDataSubmission, setInfoAfterSuccessfulDataSubmission] = useState(false);
    const [file, setFile] = useState<File | null>(null); // Dodano typ File
    const [resInfo, setResInfo] = useState('');
    const [addedEmails, setAddedEmails] = useState([]);

    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        setInfoAfterSuccessfulDataSubmission(false);
        if (event.target.files) {
            setFile(event.target.files[0]);
            Papa.parse(event.target.files[0], {
                header: true,
                skipEmptyLines: true,
                complete: function (result) {
                    const columnArray: string[] = [];
                    const valuesArray: string[][] = [];

                    const students: Student[] = result.data as Student[];

                    students.forEach((d: Student): void => {
                        columnArray.push(...Object.keys(d));
                        valuesArray.push(Object.values(d));
                    });

                    setData(students);
                    setColumnArray(Array.from(new Set(columnArray)));
                    setValues(valuesArray);
                },
            });
        }
    };

    const handleSendingData = async () => {
        if (!file) {
            alert('Brak pliku do wysłania.');
            return;
        }

        const expectedKeys = ['email', 'courseCompletion', 'courseEngagement', 'projectDegree', 'teamProjectDegree', 'bonusProjectUrls'];

        const isDataValid = data.every((student) => {
            const studentKeys = Object.keys(student);
            return expectedKeys.every((key) => studentKeys.includes(key));
        });

        if (!isDataValid) {
            alert('Niepoprawne dane. Sprawdź, czy dane w pliku .csv mają poprawne klucze. Oczekiwane klucze to: email, courseCompletion, courseEngagement, projectDegree, teamProjectDegree i bonusProjectUrls.');
            return;
        }

        const allEmailsValid = data.every((student) => student.email.includes('@'));

        if (!allEmailsValid) {
            alert('Nieprawidłowy format e-maila! Sprawdź, czy wszystkie e-maile zawierają znak "@". Popraw emaile studentów w pliku .csv i ponownie zaladuj plik.');
            return;
        }

        const isValidNumber = (value: string) => {
            const numericValue = parseFloat(value);
            return !isNaN(numericValue) && numericValue >= 0 && numericValue <= 5;
        };

        // Check if values in specified fields are numbers in the range 0-5
        const isValidData = data.every((student) =>
            isValidNumber(student.courseCompletion) &&
            isValidNumber(student.courseEngagement) &&
            isValidNumber(student.projectDegree) &&
            isValidNumber(student.teamProjectDegree)
        );

        if (!isValidData) {
            alert('Niepoprawne dane. Upewnij się, czy dane w pliku .csv są poprawne. Czy nazwy kolumn to: email, courseCompletion, courseEngagements, projectDegree, teamProjectDegree i bonusProjectUrls? Sprawdź, czy liczby w odpowiednich polach są z zakresu 0-5. Załaduj ponownie plik .csv.')
            return;
        }

        // utworzenie pliku .csv do wysłania na backend
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch(`http://localhost:3001/import/students`, {
                method: 'POST',
                credentials: 'include',
                body: formData,
            });

            const responseFromServer = await res.json();

            if (res.ok) {
                const successfulEmails = responseFromServer.successfulEmails.map((student: SuccessfulStudent) => student).join(', ');
                setAddedEmails(successfulEmails);

                const failedEmailsText = responseFromServer.failedEmails.map((failedStudent: FailedStudent) => {
                    const email = failedStudent.email;
                    const errorReason = failedStudent.errorDetails[0];
                    return `${email}: ${errorReason}`;
                }).join(', ');

                setResInfo(`Studenci niedodani do bazy danych: ${failedEmailsText}`);
                setData([]);
                setColumnArray([]);
                setValues([]);
                setInfoAfterSuccessfulDataSubmission(true);
            } else {
                alert(`Dane nie zostały zatwierdzone, ponieważ... ${responseFromServer.message}`);
            }
        } catch (error) {
            console.error('Błąd podczas wysyłania danych:', error);
        }

    };

    return (
        <>
            <p className='admin-panel-p'>Import listy Studentów. Wybierz plik z rozszerzeniem .csv </p>
            <div>
                <input
                    className='file-input'
                    type='file'
                    name='file'
                    accept='.csv'
                    onChange={handleFile}
                    style={{ display: 'block', margin: '10px auto' }}
                    title='Przeglądaj'
                    placeholder='Brak wybranego pliku'
                />
            </div>

            <br />

            <div className='table-container'>
                <table className='table'>
                    <thead>
                    <tr>
                        {columnArray.map((col, i) => (
                            <th className='table-headers' key={i}>
                                {col}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {values.map((row, i) => (
                        <tr key={i}>
                            {row.map((value, j) => (
                                <td className='table-cell' key={j}>
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                {data.length > 0 && <button onClick={handleSendingData}>Wyślij dane</button>}
                {infoAfterSuccessfulDataSubmission && (
                    <p>
                        Studenci dodani do bazy danych: {addedEmails}
                        {<br/>}
                        {resInfo}
                    </p>
                )}
            </div>
        </>
    );
};
