import React from "react";
import "./home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/postSide/PostSide";
import RightSide from "../../components/rightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      <div className="profileSide">
        <ProfileSide />
      </div>
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
