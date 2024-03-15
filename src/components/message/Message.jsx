import React from "react";
import './Message.css';
import Posting from "./Posting";
import PostingData from "./PostingData";
import PostInput from "./PostInput";
import flower from '../../img/flower.png';

function Message() {
  return (
    <div className="Message">
      <img className="flower" src={flower} alt="flower"></img>
      <p className="subtitle">축하 메세지</p>
      <div>
        {PostingData.sort((a, b) => b.id - a.id).map((posting) => (
          <Posting key={posting.id} name={posting.name} date={posting.date} contents={posting.contents} />
        ))}
      </div>
      <PostInput />
    </div>
  );
}

export default Message;