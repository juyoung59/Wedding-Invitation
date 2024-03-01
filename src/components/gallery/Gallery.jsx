import React from "react";
import './Gallery.css'
import Photo from "./Photo";
import flower from '../../img/flower.png'

function Gallery() {
  return(
    <div className="Gallery">
      <img className="flower" src={flower} alt="flower"></img>
      <p className="subtitle">갤러리</p>
      <Photo />
    </div>
  );
};

export default Gallery;