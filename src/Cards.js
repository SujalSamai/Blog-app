import React from "react";
import Data from "./data.js";
export default function Cards(props) {
  return (
    <div className="card">
      <div className="card--left">
        <img src={props.image} className="card-img" />
      </div>
      <div className="card--right">
        <div className="location-div">
          <h3 className="location-info">📍{props.location}</h3>
          <a href={props.view} className="googleURL">
            View on Google Maps
          </a>
        </div>
        <h1 className="title">{props.name}</h1>
        <p className="date-info">
          {props.start} - {props.end}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
