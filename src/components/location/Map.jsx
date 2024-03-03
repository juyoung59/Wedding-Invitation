import React, {useEffect} from 'react';

const {kakao} = window;

function Map () {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
  };
  const kakaomap = new kakao.maps.Map(container, options);
  const geocoder = new kakao.maps.services.Geocoder();

  geocoder.addressSearch('강원특별자치도 춘천시 동면 춘천순환로 770', function(result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      const marker = new kakao.maps.Marker({
        map: kakaomap,
        position: coords
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: '<div style="width: 35vw; text-align: center; padding: 6px 0;">스카이컨벤션웨딩</div>'
      });
      infowindow.open(kakaomap, marker);

      kakaomap.setCenter(coords);
    }
  })
  }, [])
  


  return (
    <div id='map' className='map'></div>

  );
};

export default Map;