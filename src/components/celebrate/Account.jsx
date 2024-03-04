import React, { useState } from "react";
import './Celebrate.css';

const Account = ({ name, accountNum}) => {
  const [modalOpen, SetModalOpen] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(accountNum);
  };

  return(
    <div className="account-wrap">
      <div className="account-info" onClick={() => SetModalOpen(true)}>
        <table className="account-table">
          <tbody>
            <tr>       
              <td className="table-name">{name}</td>
              <td className="table-account">계좌</td>
            </tr>           
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{name}</p>
            <p>{accountNum}</p>
            <button onClick={handleCopyAccount}>복사</button>
            <button onClick={() => SetModalOpen(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Account;