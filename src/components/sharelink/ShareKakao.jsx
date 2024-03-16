import React from "react";
import "./Share.css"
import { SiKakaotalk } from "react-icons/si";

const { Kakao } = window;

function ShareKakao() {
  const shareKakaoBtn = () => {
    Kakao.Share.sendDefault({
      
      objectType: 'feed',
      content: {
        description: '김관우♡이아영의 결혼식에 초대합니다.',
        imageUrl: 'https://private-user-images.githubusercontent.com/124108565/313396864-44aaf173-c632-4493-8d2e-f92afc2c8c51.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA1ODM0NzksIm5iZiI6MTcxMDU4MzE3OSwicGF0aCI6Ii8xMjQxMDg1NjUvMzEzMzk2ODY0LTQ0YWFmMTczLWM2MzItNDQ5My04ZDJlLWY5MmFmYzJjOGM1MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMxNlQwOTU5MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMDE4ZTYxYWNkNTQ2MzI2ODMyNTE1NjU1MTc0OGVlNTAyMjc4YWUzNTMxZTVjN2I4NWI4YjIxZGI0NzRiMDJlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.sU51Wh2wIjQmZprYn2aTZY_hfjQof4w6_g7hcooZ6fU',
        imageWidth: 462,
        imageHeight: 701,
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      buttons: [
        {
          title: '모바일청첩장 바로가기',
          link: {
            mobileWebUrl: 'http://wedding-invitation-exp.s3-website.ap-northeast-2.amazonaws.com/',
            webUrl: 'http://wedding-invitation-exp.s3-website.ap-northeast-2.amazonaws.com/',
          },
        },
      ],
    });
  }

  

  return (
    <div>
    <SiKakaotalk className="kakaoshare" onClick={shareKakaoBtn}/>
    </div>
  );
}

export default ShareKakao;
