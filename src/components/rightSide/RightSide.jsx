import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./rightSide.css";
import Comment from "../../img/comment.png";
import Noti from "../../img/noti.png";
import Home from "../../img/home.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";

const RightSide = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link
          to={`../home`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={Home} alt="" />
        </Link>
        <UilSetting />
        <img src={Noti} alt="" />
        <Link to={`../chat`}>
          <img src={Comment} alt="" />
        </Link>
      </div>
      <TrendCard />
      <button
        className="primary-btn s-button"
        onClick={() => {
          setOpened(true);
        }}
      >
        Share
      </button>
      <ShareModal opened={opened} setOpened={setOpened} />
    </div>
  );
};

export default RightSide;
