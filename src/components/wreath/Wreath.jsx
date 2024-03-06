import React from "react";
import './Wreath.css';
import flower from '../../img/wreath.png';

function Wreath() {

  const handleOpenWreath = () => {
    window.open(`https://www.1588-39000.com/?gad_source=1&gclid=CjwKCAiAopuvBhBCEiwAm8jaMZZYs_23-KYKf_gGzprPQHzqPm6HpYNBYfOzh37j67GNjNyAJjTtfRoCsC4QAvD_BwE`);
  };

  return (
  <div className="Wreath">
    <img className="wreath-flower" src={flower} alt="flower"></img>
    <p className="wreath-comment">
      예식일에 맞춰 축하 화환을 전해보세요.<br/>
      복잡한 입력 없이 간편하게<br/>
      축하의 마음을 담아 전하실 수 있습니다.
    </p>
    <button className="wreath-btn" onClick={handleOpenWreath}>축하 화환 간편 배송</button>
  </div>
  )
}

export default Wreath;