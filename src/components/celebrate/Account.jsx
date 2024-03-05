import React, { useState } from "react";
import './Celebrate.css';

const Account = ({ name, accountNum}) => {
  const [modalOpen, SetModalOpen] = useState(false);

  const handleCopyAccount = () => {
    const input = document.createElement('input');
    input.setAttribute('value', accountNum);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    alert('계좌가 복사되었습니다.');
  };

  return(
    <div className="account-wrap">
      <div className="account-info">
        <table className="account-table">
          <tbody>
            <tr>       
              <td className="table-name">{name}</td>
              <td className="table-account" onClick={() => SetModalOpen(true)}>계좌</td>
            </tr>           
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{name}</p>
            <hr></hr>
            <p>{accountNum}</p>
            <button className="copy" onClick={handleCopyAccount}>복사</button>
            <button className="exit" onClick={() => SetModalOpen(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Account;