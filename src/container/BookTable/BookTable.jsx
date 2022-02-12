import React from 'react';
import { SubHeading } from '../../components';
import './BookTable.css';

const BookTable = () => {
  return (
    <div className="app__bookTable flex__center section__padding">
      <div className="app__book-table__card">
        <SubHeading title="Reservations" />
        <h1 className="headtext__cormorant">Book A Table</h1>
        <div className="app__bookTable__container">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div style={{ marginTop: "15px"}}>
          <button type="button" className="custom__button">Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default BookTable