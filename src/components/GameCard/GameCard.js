import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card">
    <div className="img-container">
       <img alt={props.name} src={props.image} />
       onClick={() => props.handleClick(props.id)}
    </div>
    
    {/* {span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>} */}
  </div>
//   <div
//   role="img"
//   aria-label="click item"
//   onClick={() => props.handleClick(props.id)}
//   style={{ backgroundImage: `url("${props.image}")` }}
//    className={`click-item${props.shake ? " shake" : ""}`}
// />
);

export default GameCard;