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

export const StudentImport = () => {
    const [data, setData] = useState<Student[]>([]);
    const [columnArray, setColumnArray] = useState<string[]>([]);
    const [values, setValues] = useState<string[][]>([]);
    const [infoAfterSuccessfulDataSubmission, setInfoAfterSuccessfulDataSubmission] = useState(false);
    const [file, setFile] = useState<File | null>(null); // Dodano typ File

    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        setInfoAfterSuccessfulDataSubmission(false);
        if (event.target.files) {
            console.log('Selected File:', event.target.files[0]);
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

        console.log(data, 'data');

        // START Validation of data in csv file
        const expectedKeys = ['email', 'courseCompletion', 'courseEngagement', 'projectDegree', 'teamProjectDegree', 'bonusProjectUrls'];

        const isDataValid = data.every((student) => {
            const studentKeys = Object.keys(student);
            return expectedKeys.every((key) => studentKeys.includes(key));
        });

        if (!isDataValid) {
            alert('Niepoprawne dane. Sprawdź, czy dane w pliku .csv mają poprawne klucze. Oczekiwane klucze to: email, courseCompletion, courseEngagement, projectDegree, teamProjectDegree i bonusProjectUrls.');
            return;
        } else {
            console.log('nagłówki sa ok')
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
        // END Validation of data in csv file

        // utworzenie pliku .csv do wysłania na backend
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData, 'form data');

        try {
            const res = await fetch(`http://localhost:3001/student-import/upload`, {
                method: 'POST',
                credentials: 'include',
                body: formData,
            });

            // console.log(file);

            const responseFromServer = await res.json();

            if (res.ok) {
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

        /**  Kod w razie, gdyby nie udalo sie odebrać i przerobić pliku csv po stronie backendu,
         *   wtedy można po prostu wysłać gotowego JSON'a - opcja do przedystkuwoania
         *   zeby to testowac nalezy odkomentowac ponizszy kod i zakomentowac całego try catcha w powyższym
         *
         *
         *    const res = await fetch(`http://localhost:3001/student-import/upload`, {
         *             method: 'POST',
         *             credentials: "include",
         *             headers: {
         *                 'Content-type': 'application/json'
         *             },
         *             body: JSON.stringify(data),
         *         });
         *
         *         const responseFromServer = await res.json();
         *
         */
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
                        Lista studentów została dodana do bazy danych, oraz zostały wysłane emaile z linkiem do rejestracji.
                    </p>
                )}
            </div>
        </>
    );
};
