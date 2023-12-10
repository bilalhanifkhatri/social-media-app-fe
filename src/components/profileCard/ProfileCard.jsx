import React from "react";
import "./profileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = ({ profilePage = false }) => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileNames">
        <span>Umair Satti</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,122</span>
            <span>followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>followers</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>5</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {!profilePage && <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;