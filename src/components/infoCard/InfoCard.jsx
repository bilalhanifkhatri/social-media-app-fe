import React from "react";
import { UilPen } from "@iconscout/react-unicons";
import "./infoCard.css";

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h3>Your Info</h3>
        <UilPen width="2rem" height="1.2rem" />
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Single</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>DotClick</span>
      </div>

      <button className="primary-btn logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
