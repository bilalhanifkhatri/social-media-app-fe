import React from "react";
import "./followersCard.css";
import { Followers } from "../../Data/FollowersData";
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is Following you</h3>
      {Followers?.map((follower, key) => {
        return (
          <div className="follower" key={key}>
            <div>
              <img src={follower?.image} alt="" className="followerImg" />
              <div className="name">
                <span>{follower?.name}</span>
                <span>{follower?.username}</span>
              </div>
            </div>
            <button className="primary-btn fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
