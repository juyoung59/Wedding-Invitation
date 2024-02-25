import React from "react";
import './Invite.css'
import flower from '../../img/flower.png';

function Invite() {
  return (
    <div className="Invite">
      <img className="flower" src={flower} alt="flower"></img>
      <p className="subtitle">INVITATION</p>
      <p className="story">
      20대의 시작과 끝을 함께라는 이름으로 채워왔습니다.<br/><br/>
      새출발, 첫걸음이란 거창한 단어보단 늘 그랬던 것처럼<br/>
      평안하고 평탄하게 앞으로의 나날을 함께 채워가려합니다.<br/><br/>
      저희 두 사람이 서로의 앞날을 약속하는 자리에 오셔서<br/>
      함께 축복해주신다면 더 없는 기쁨으로 간직하겠습니다.<br/>
      </p>
      <div className="family">
        <div className="parents">
          <p>김대성<br/>김지후</p>
        </div>
        <div className="child">
          <p>의 &nbsp; &nbsp; 장남 <span className="bold-text">김관우</span></p>
        </div>
      </div>
      <div className="family">
        <div className="parents">
          <p>이지휘<br/>이용미</p>
        </div>
        <div className="child">
          <p>의 &nbsp; &nbsp; 장녀 <span className="bold-text">이아영</span></p>
        </div>
      </div>
    </div>
  );
}

export default Invite;