import React from "react";
import './Message.css';
import { TiHeart } from "react-icons/ti";

const Posting = ({name, date, contents}) => {
  const contentLines = contents.split('<br/>');

  return (
    <ul>
      <li className="post">
        <div className="post-content">
          <p className="name"><TiHeart className="heart" />{name}</p>
          <p className="date">{date}</p>
        </div>
         <div className="content-lines">
          {contentLines.map((line, index) => (
            <p key={index} className="content-line">{line}</p>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default Posting;