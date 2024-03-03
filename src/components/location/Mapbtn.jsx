import React from 'react';

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
    window.open(`kakaomap://route?sp=${lat},${lon}&ep=${lat},${lon}`);
  };

  return (
    <div>
      <button className='tmap' onClick={handleTmapSearch}>Tmap</button>
      <button className='atlan' onClick={handleAtlanSearch}>Atlan</button>
      <button className='naver' onClick={handleNaverSearch}>Naver</button>
      <button className='kakao' onClick={handleKakaoSearch}>Kakao</button>
    </div>
  );
}

export default Mapbtn