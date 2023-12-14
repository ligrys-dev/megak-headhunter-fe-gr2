import { FC } from 'react';

import './ReservationDate.css';

interface Props {
  date: Date;
}

export const ReservationDate: FC<Props> = ({ date }) => {
  return (
    <div className="reservation-date">
      <p>Rezerwacja do</p>
      <p>{date.toLocaleDateString()} r.</p>
    </div>
  );
};
