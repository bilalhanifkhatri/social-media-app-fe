import React from "react";
import "./posts.css";
import { PostsData } from "../../Data/PostsData";
import Comment from "../../img/comment.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Share from "../../img/share.png";

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData?.map((post, index) => {
        return (
          <div key={index} className="post">
            <img src={post?.img} alt="" />
            <div className="postReact">
              <img src={post?.liked ? Heart : NotLike} alt="" />
              <img src={Comment} alt="" />
              <img src={Share} alt="" />
            </div>
            <span>{post?.likes} Likes</span>
            <div className="detail">
              <span>
                <strong>{post?.name}</strong>
              </span>
              <span> {post?.desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
