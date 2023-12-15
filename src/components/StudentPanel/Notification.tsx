import React, {useState} from 'react';
import {StudentInitialInterface} from "types";
import {Btn} from "../common/Btn/Btn";
import './Notification.css';

interface Props {
    user: StudentInitialInterface
}

export const Notification = (props: Props) => {
    const [notificationText, setNotificationText] = useState('');

    const formatDateTime = (dateTimeString) => {
        const options = {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'};
        return new Date(dateTimeString).toLocaleDateString('pl-PL', options);

    };

    const handleRefreshNotify = async () => {
        try {
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
            if (initialData.status === 0) {
                setNotificationText(`
                    <p>Twój aktualny status to: Dostępny.</p>
                    <p>Jesteś widoczny dla wszystkich HR, którzy jeszcze z Tobą nie rozmawiali.</p>
                `);
            } else if (initialData.status === 1) {
                const formattedExpirationDate = formatDateTime(initialData.reservationExpirationDate);
                setNotificationText(`
                    <p>Twój aktualny status to: Oczekujący na rozmowę.</p>
                    <p>Rekruter zarezerwował sobie czas na rozmowę z Tobą do dnia ${formattedExpirationDate}.</p>
                    <p>W najbliższym czasie otrzymasz informację o dokładnym terminie rozmowy. </p>
                    <p>W przypadku braku kontaktu ze strony rekrutera, po 10 dniach Twoj status zostanie ponownie zmieniony na Dostępny.</p> 
                `);
            } else if (initialData.status === 2) {
                setNotificationText(`
                    <p>Gratulacje! </p>
                    <p>Zostałaś/eś zatrudniony.</p>       
                `);
            }
        } catch (error) {
            console.error('Błąd podczas odświeżania:', error);
        }
    };

    return (
        <div className="notification-container">
            <Btn text="Odśwież" onClick={handleRefreshNotify}/>
            <p className='notify' dangerouslySetInnerHTML={{__html: notificationText}}></p>
        </div>
    );
};
