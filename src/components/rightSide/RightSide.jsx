import React from "react";
import "./rightSide.css";
import Comment from "../../img/comment.png";
import Noti from "../../img/noti.png";
import Home from "../../img/home.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../trendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />
      <button className="primary-btn s-button">Share</button>
    </div>
  );
};

export default RightSide;
