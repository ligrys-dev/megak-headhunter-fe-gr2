import { useState } from 'react';
import './FiletrPopup.css';
import { FilterForm } from './FilterForm';

interface Props {
  onHandleFilter: () =>{}
}


export const FilterPopup = (props: Props) => {
  const [popup, setPopup] = useState(false);
  const toggleModal = () => {
    setPopup(!popup);
  };

  if (popup) {
    document.body.classList.add('active-popup');
  } else {
    document.body.classList.remove('active-popup');
  }

  return (
      <>
        <button onClick={toggleModal} className="btn-popup">
          <img src="/assets/arrow.png" alt="Arrow" />
          <p>Filtrowanie</p>
        </button>

        {popup && (
            <div className="popup">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="popup-content">
                <h2>Filtrowanie</h2>
                <FilterForm  onHandleFilter={props.onHandleFilter}/>
                <button className="close-popup" onClick={toggleModal}>
                  Zamknij
                </button>
              </div>
            </div>
        )}
      </>
  );
};
