import React from 'react';
import { SubHeading } from '../../components';
import './BookTable.css';

const BookTable = () => {
  return (
    <div className="app__bookTable section__padding">
      <div className="app__bookTable__card">
        <div className="app__bookTable-title">
          <SubHeading title="Reservations"  />
          <h1 className="headtext__cormorant">Book A Table</h1>
        </div>
        <div className="app__bookTable__container">
          <select name="person" id="person" className="p__cormorant">
            <option value="person 1">1 Person</option>
            <option value="person 2">2 Person</option>
            <option value="person 3">3 Person</option>
            <option value="person 4">4 Person</option>
          </select>
          <select name="date" id="date" className="p__cormorant">
            <option value="15/15/41">15/15/41</option>
            <option value="15/15/41">15/15/41</option>
            <option value="15/15/41">15/15/41</option>
          </select>
          <select name="time" id="time" className="p__cormorant">
            <option value="10:11">10:11</option>
            <option value="10:12">10:12</option>
            <option value="10:13">10:13</option>
            <option value="10:14">10:14</option>
          </select>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button type="button" className="custom__button">Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default BookTable;