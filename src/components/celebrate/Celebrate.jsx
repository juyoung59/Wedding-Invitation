import React from "react";
import './Celebrate.css';
import Account from './Account';
import AccountData from "./AccountData";
import flower from "../../img/flower.png";

function Celebrate() {
  return(
    <div className="Celebrate">
      <img className="flower" src={flower} alt="flower"></img>
      <p className="subtitle">축하의 마음 전하기</p>
      <p className="cel-coment">축하의 마음을 담아 축의금을 전달해 보세요. <br/> 복사 버튼을 클릭해 계좌번호를 복사할 수 있습니다.</p>

      <div className="account-wrap">
        {AccountData.map((account, index) => (
          <React.Fragment key={account.id}>
            <Account name={account.name} accountNum={account.accountNum} />
            {index === 2 && <div className="space-between-calls"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );  
}

export default Celebrate;