import React from "react";
import "./postSide.css";
import PostShare from "../postShare/PostShare";
import Posts from "../posts/Posts";

const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
