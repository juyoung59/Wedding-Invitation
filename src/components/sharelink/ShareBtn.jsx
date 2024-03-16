import React from "react";
import "./Share.css";
import ShareThis from "../../img/share.png";

function ShareBtn() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'URL을 공유해보세요!',
        url: 'http://wedding-invitation-exp.s3-website.ap-northeast-2.amazonaws.com/'
      })
      .then(() => console.log('Successfully shared'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported.');
    }
  };

  return (
    <div className="ShareBtn">
      <img className="ShareThis" src={ShareThis} onClick={handleShare} alt="shareBtn" />
    </div>
  );
}

export default ShareBtn;