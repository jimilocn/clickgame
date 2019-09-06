import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="image">
      <div className="img-box">
        <img alt={props.name} src={props.image} />
      </div>
      
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
