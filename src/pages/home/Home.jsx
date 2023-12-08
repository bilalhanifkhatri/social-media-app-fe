import React from "react";
import "./home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";

const Home = () => {
  return (
    <div className="Home">
      <div className="profileSide">
        <ProfileSide />
      </div>
      <div className="postSide">Post</div>
      <div className="rightSide">Right</div>
    </div>
  );
};

export default Home;
