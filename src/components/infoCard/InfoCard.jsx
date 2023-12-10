import React, { useState } from "react";
import { UilPen } from "@iconscout/react-unicons";
import "./infoCard.css";
import ProfileModal from "../profileModal/ProfileModal";

const InfoCard = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h3>Your Info</h3>
        <UilPen
          width="2rem"
          height="1.2rem"
          onClick={() => {
            setOpened(true);
          }}
        />
        <ProfileModal opened={opened} setOpened={setOpened} />
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
