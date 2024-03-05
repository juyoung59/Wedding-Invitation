import React from "react";
import './Wreath.css';
import flower from '../../img/wreath.png';

function Wreath() {

  const handleOpenWreath = () => {
    window.open(`https://agent.maruw.co.kr/iframe?url=https%3A%2F%2Fagent.maruw.co.kr%2Fmobile%2Fbojagicard%2Fproduct%3F`);
  };

  return (
  <div className="Wreath">
    <img className="wreath-flower" src={flower} alt="flower"></img>
    <p className="wreath-comment">
      예식일에 맞춰 축하 화환을 전해보세요.<br/>
      복잡한입력 없이 간편하게<br/>
      축하의 마음을 담아 전하실 수 있습니다.
    </p>
    <button className="wreath-btn" onClick={handleOpenWreath}>축하 화환 간편 배송</button>
  </div>
  )
}

export default Wreath;