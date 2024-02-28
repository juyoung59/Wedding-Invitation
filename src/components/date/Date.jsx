import React from "react";
import './Date.css'
import Calendar from './Calendar';
import flower from '../../img/flower.png';

function Date() {
  return (
    <div className="Date">
      <img className="flower" src={flower} alt="flower"></img>
      <p className="subtitle">날짜</p>
      <div className="calendar">
      <p className="caltitle">2023. 12</p>
        <Calendar />
      </div>
    </div>
  );
}

export default Date;