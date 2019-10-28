import React from "react";
import "./style.css";

function FrameCard(props) {
  return (
    <div className="card">
      <div className="img-container" >
        <img className="img-thumbnail" alt={props.name} src={props.image} onClick={() => props.randoFrame(props.id)}/>
      </div>
    </div>
  );
}

export default FrameCard;
