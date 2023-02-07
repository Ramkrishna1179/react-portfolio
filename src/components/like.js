import React, { useState } from "react";

function Like() {
  const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <div className="text-center mb-5 mt-5">
        <h3>Please give your feedback here</h3>
        <button
          style={{
            border: "none",
            fontSize: "24px",
            background: "#040c2c",
            color: "white",
            padding:"7px 20px 7px 20px"
          }}
          className= {`like-button ${isClicked && "liked"}`}
          onClick={handleClick}
        >
          <span className="likes-counter">{`Like | ${likes}`}</span>
        </button>
      </div>
    </div>
  );
}
export default Like;
