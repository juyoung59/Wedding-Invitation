import React from "react";
import "./Share.css";
import flower from '../../img/flower.png';
import ShareBtn from "./ShareBtn";
import { TiHeart } from "react-icons/ti";

function Share() {
  return (
    <div className="Share">
      <img className="flower" src={flower} alt="flower"></img>
      <p className="subtitle">소식공유</p>
      <ShareBtn />
      <p className="Thank">Thank you!</p>
      <TiHeart className="Thank-heart" />

    </div>
  );
};

export default Share;