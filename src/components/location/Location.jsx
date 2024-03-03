import React from "react";
import './Location.css'
import Map from './Map';
import Mapbnt from './Mapbtn';
import flower from '../../img/flower.png';

function Location() {
  return (
    <div className="Location">
      <img className="flower" src={flower} alt="flower"></img>
      <p className="subtitle">오시는 길</p>
      <p className="wedding-hall">스카이컨벤션웨딩</p>
      <p className="address">강원특별자치도 춘천시 동면 춘천순환로 770</p>
      <Map />
      <Mapbnt />
      <p className="isshuttle">셔틀버스 이용 시</p>
      <div className="shuttle-wrap">
        <p className="shuttle">- 춘천시외버스터미너(하차 후 길거너 벤츠코리아 앞 승차) →<br/>웨딩홀 : 매시 정각 출발<br/><br/><br/>
        - 춘천역 (1번 출구 광장 앞 승차) → 웨딩홀 : 매시 20분 출발</p>
      </div>
    </div>
  );
}

export default Location;