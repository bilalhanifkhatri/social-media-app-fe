import React from "react";
import "./trendCard.css";
import { TrendsData } from "../../Data/TrendsData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendsData?.map((trend, index) => {
        return (
          <div key={index} className="trend">
            <span>#{trend?.name}</span>
            <span>{trend?.shares}K Shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
