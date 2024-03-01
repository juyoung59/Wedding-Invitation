import React, {useState} from "react";
import './Gallery.css';
import prevbtn from '../../img/prev.png';
import nextbtn from '../../img/next.png';
import pic1 from '../../img/pic1.jpg';
import pic2 from '../../img/pic2.jpg';
import pic3 from '../../img/pic3.jpg';
import pic4 from '../../img/pic4.jpg';
import pic5 from '../../img/pic5.jpg';
import pic6 from '../../img/pic6.jpg';
import pic7 from '../../img/pic7.jpg';
import pic8 from '../../img/pic8.jpg';
import pic9 from '../../img/pic9.jpg';


function Photo() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const photos = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];
  

  const handleClickNext = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === photos.length - 1 ? 0: prevPhoto + 1));
  }

  const handleClickPrev = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === 0 ? photos.length - 1 : prevPhoto - 1));
  };

  const handlePhotoClick = index => {
    setSelectedPhotoIndex(index);
    setIsPopupOpen(true);
  };

  const handleBackgroundClick = () => {
    setIsPopupOpen(false);
  };

  const handleGalleryPhotoClick = (index) => {
    setCurrentPhoto(index);
  };
  

  return(
    <div>
      <div className="pic-wrap">
          <button className="prev" onClick={handleClickPrev}>
            <img src={prevbtn} alt="prev"></img>
          </button>
          <img className="wedding-photos" src={photos[currentPhoto]} alt="wedding-photos" onClick={() => handlePhotoClick(currentPhoto)} />
          <button className="next" onClick={handleClickNext}>
            <img src={nextbtn} alt="next"></img>
          </button>
          {isPopupOpen && (
          <div className="popup" onClick={handleBackgroundClick}>
            <div className="popup-content">
              <img className="popup-photo" src={photos[selectedPhotoIndex]} alt="popup-photos" />
            </div>
          </div>
        )}
      </div>

      <div className="mini-photo">
        <div className="photo-slider">
          {photos.map((photo, index) => (
            <img key={index} className="gallery-photo" src={photo} alt={`gallery-photos-${index}`} onClick={() => handleGalleryPhotoClick(index)} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Photo;