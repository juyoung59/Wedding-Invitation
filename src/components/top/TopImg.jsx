import React, { useState, useEffect } from "react";
import './Top.css';
import firstImg from '../../img/firstImg.jpeg';
import secondImg from '../../img/secondImg.jpeg';
import thirdImg from '../../img/thirdImg.jpeg';

function TopImg() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [firstImg, secondImg, thirdImg];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`wedding ${index + 1}`}
          className={index === currentImageIndex ? 'current' : ''}
        />        
      ))}
      
    </div>
  );
};

export default TopImg;