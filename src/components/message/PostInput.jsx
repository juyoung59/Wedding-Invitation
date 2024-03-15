import React, { useState, useEffect } from "react";
import './Message.css';

function PostInput() {
  const [showInput, setShowInput] = useState(false);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      const messageElement = document.querySelector(".Message");
      const messageRect = messageElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Message 컴포넌트가 화면에 보이는 동안에만 입력 창을 표시
      setShowInput(messageRect.top < windowHeight && messageRect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return(
    <div className="input-wrap">
      {showInput && (
        <div className="input-container">
          <textarea placeholder="축하 메시지를 남겨주세요." />
          <button>등록하기</button>
        </div>
      )}
    </div>
  );
};

export default PostInput;