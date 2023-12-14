import { FC } from 'react';

import './ReservationDate.css';

interface Props {
  date: Date;
}

export const ReservationDate: FC<Props> = ({ date }) => {
  return (
    <div className="reservation-date">
      <div>Rezerwacja do</div>
      <div>{date.toLocaleDateString()} r.</div>
    </div>
  );
};
