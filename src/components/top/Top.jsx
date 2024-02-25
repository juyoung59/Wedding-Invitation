import React from "react";
import './Top.css';
import firstImg from '../../img/pic1.jpg';

function Top() {
  return (
    <div className="Top">
      <img className="responsive-image" src={firstImg} alt="Mobile Image" />
      <div className="infoWrapp">
        <p className="title">김관우<br/> 이아영<br/> <span className="bold-text">결혼합니다!</span></p>
        <p className="info">info</p>
        <p className="inform">
          2023년 12월 02일 토요일<br/>
          오후 2시<br/>
          스카이컨벤션웨딩<br/>
          4층 스카이홀
        </p>
      </div>
    </div>
  );
}

export default Top;