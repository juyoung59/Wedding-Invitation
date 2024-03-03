import React, {useEffect} from 'react';
import './Location.css';



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
        content: '<span class="info-title">스카이컨벤션웨딩홀</span>',
      });
      infowindow.open(kakaomap, marker);

      kakaomap.setCenter(coords);
    }

    const infoTitle = document.querySelectorAll('.info-title');
    infoTitle.forEach(function(e) {
        var w = e.offsetWidth + 10;
        var ml = w/2;
        e.parentElement.style.left = "50%";
        e.parentElement.style.marginLeft = -ml+"px";
        e.parentElement.style.width = w+"px";
        e.parentElement.previousSibling.style.display = "none";
        e.parentElement.parentElement.style.border = "0px";
        e.parentElement.parentElement.style.background = "unset";
    });
  })
  }, [])
  


  return (
    <div id='map' className='map'></div>

  );
};

export default Map;