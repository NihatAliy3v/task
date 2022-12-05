import React from "react";

function CardComponentGrey(props) {
  return (
    <div className="CardComponentGrey">
      <a href="#single-card" className="card-component">
        <div className="card-img">
          <img src={props.link} />
        </div>
        <div className="card-right">
          <p className="description">
            <span className="name">{props.name}</span>
            {props.description} <span className="gray"> {props.gray} </span>
            <span className="blue">{props.blue}</span>
          </p>
          <span className="red-circle"></span>
          <span className="timeAgo">{props.time}</span>
        </div>
      </a>
    </div>
  );
}

export default CardComponentGrey;
