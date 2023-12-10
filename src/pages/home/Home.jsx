import React from "react";
import "./home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/postSide/PostSide";

const Home = () => {
  return (
    <div className="Home">
      <div className="profileSide">
        <ProfileSide />
      </div>
      <PostSide />
      <div className="rightSide">Right</div>
    </div>
  );
};

export default Home;
