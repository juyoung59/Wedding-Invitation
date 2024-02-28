import React, { useState } from 'react';
import './Contact.css';

const Call = ({ name, phoneNum, callimage, msgimage }) => {
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNum}`;
  };

  const handleMsgClick = () => {
    window.location.href = `sms:${phoneNum}`;
  };

  return (
    <div className='content'>
      <div className='person'>
      <p>{name}</p>
      <img className="call" onClick={handlePhoneClick} src={callimage}></img>
      <img className="msg" onClick={handleMsgClick} src={msgimage}></img>
      </div>
      <hr className='divider'/>
    </div>
  );
};

export default Call;