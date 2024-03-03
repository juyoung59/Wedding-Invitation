import React from 'react';
import tmap from '../../img/tmap.png';
import atlan from '../../img/atlan.png';
import naver from '../../img/naver.png';
import kakao from '../../img/kakao.png';

function Mapbtn () {

  const lon = 127.75352752650365;
  const lat = 37.907160872916954;

  const handleTmapSearch = () => {
    window.open(`https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx20401a447f994002b83f0e74e5482a2d&name=%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9B%A8%EB%94%A9&lon=${lon}&lat=${lat}`);
  };

  const handleAtlanSearch = () => {
    window.open(`http://m.atlan.co.kr/searchPlus/linkAtlan.do?shareType=kakao&coordX=${lon}&coordY=${lat}&title=%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9B%A8%EB%94%A9&AuthKey=2b1ffc4c97acca5a359282739535a280576c02aa0cc4c89b86afca8e20bdc7e8`);
  };

  const handleNaverSearch = () => {
    window.open(`https://map.naver.com/p/?title=%EC%8A%A4%EC%B9%B4%EC%9D%B4%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9B%A8%EB%94%A9&lng=${lon}&lat=${lat}&zoom=15&type=0`);
  };

  const handleKakaoSearch = () => {
    window.open(`kakaomap://route?ep=${lat},${lon}`);
  };

  return (
    <div className='map-wrap'>
      <div className='btn-title'>
        <img className="mapbtn" onClick={handleTmapSearch} src={tmap} alt='tmap'></img>
        <p className='mapbtn-title'>TMAP</p>
      </div>
      <div className='btn-title'>
        <img className="mapbtn" onClick={handleAtlanSearch} src={atlan} alt='tmap'></img>
        <p className='mapbtn-title'>ATLAN</p>
      </div>
      <div className='btn-title'>
        <img className="mapbtn" onClick={handleNaverSearch} src={naver} alt='tmap'></img>
        <p className='mapbtn-title'>NAVER</p>
      </div>
      <div className='last-btn-title'>
        <img className="mapbtn" onClick={handleKakaoSearch} src={kakao} alt='tmap'></img>
        <p className='mapbtn-title'>KAKAO</p>
      </div>
    </div>
  );
}

export default Mapbtn