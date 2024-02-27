import React from "react";
import './Contact.css'
import Call from './Call';
import CallData from './CallData';
import flower from '../../img/flower.png';

function Contact(){
  return(
    <div className="Contact">
      <img className="flower" src={flower} alt="flower"></img>
      <p className="subtitle">축하 연락처</p>      
      <div>
        {CallData.map((call, index) => (
          <React.Fragment key={call.id}>
            <Call name={call.name} phoneNum={call.phoneNum} callimage={call.callimage} msgimage={call.msgimage} />
            {index === 2 && <div className="space-between-calls"></div>} {/* 3번째 데이터 다음에만 여백 추가 */}
          </React.Fragment>
        ))}
      </div>
    </div> 

  );
};

export default Contact;