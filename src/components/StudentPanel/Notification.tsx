import React, { useState } from 'react';
import './Notification.css';
import {StudentInitialInterface} from "types";

interface Props {
    user: StudentInitialInterface
}
export const Notification = (props: Props) => {
    const [notificationText, setNotificationText] = useState('');

    const formatDateTime = (dateTimeString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDateTime = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
        return formattedDateTime;
    };

    const handleRefreshNotify = async () => {
        try {
            // Zapytanie do /student/initial/:email
            const initialResponse = await fetch(`http://localhost:3001/student/initial/${props.user.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!initialResponse.ok) {
                console.error('Błąd HTTP initial:', initialResponse.status, initialResponse.statusText);
                setNotificationText('Coś poszło nie tak, spróbuj poźniej.')
                return;
            }

            const initialData = await initialResponse.json();
            console.log('Initial response:', initialData);

            console.log(initialData.status);

            if (initialData.status === 0) {
                setNotificationText(`
                    Twój aktualny status to: Dostępny<br />
                    Jesteś widoczny dla wszystkich HR, którzy jeszcze z Tobą nie rozmawiali.
                `);
            } else if (initialData.status === 1) {
                const formattedExpirationDate = formatDateTime(initialData.reservationExpirationDate);
                setNotificationText(`
                    Twój aktualny status to: Oczekujący na rozmowę<br/>
                    HR (${initialData.reservedBy}) zarezerwował sobie czas na rozmowę z Tobą do dnia ${formattedExpirationDate}.<br/>
                    W najbliższym czasie skontaktuje się ktoś z Tobą, aby dokładnie ustalić termin rozmowy. <br/>
                    W przypadku gdyby nikt się nie odezwał, a termin minie, to Twoj status zostanie z powrotem zmieniony na Dostępny. 
                `);
            } else if (initialData.status === 2) {
                setNotificationText(`
                    Gratulacje! <br/>
                    Zostałaś/eś zatrudniony.       
                `);
            }
        } catch (error) {
            console.error('Błąd podczas odświeżania:', error);
        }
    };

    return (
        <div className="notification-container">
            <button onClick={handleRefreshNotify}>Odśwież</button>
            <p className='notify' dangerouslySetInnerHTML={{ __html: notificationText }}></p>
        </div>
    );
};
