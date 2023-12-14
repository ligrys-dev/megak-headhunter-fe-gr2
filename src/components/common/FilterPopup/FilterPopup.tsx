import React, {useState} from "react";
import './FiletrPopup.css'

export const FilterPopup = () => {
    const [popup, setPopup] = useState(false);
    const toggleModal = () => {
        setPopup(!popup);
    };

    if (popup) {
        document.body.classList.add('active-popup')
    } else {
        document.body.classList.remove('active-popup')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-popup">
                <img src="/assets/arrow.png" alt="Arrow"/>
                <p>Filtrowanie</p>
            </button>

            {popup && (
                <div className="popup">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="popup-content">
                        <h2>Filtrowaniel</h2>
                        <p>
                            Tutaj ma być filtrowanie z inputami
                        </p>
                        <button className="close-popup" onClick={toggleModal}>
                            Zamknij
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
