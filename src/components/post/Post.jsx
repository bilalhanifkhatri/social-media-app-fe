import React, { useState } from "react";
import Comment from "../../img/comment.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Share from "../../img/share.png";
import { fetchImageURLByFileName } from "../../redux/actions/uploadAction";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../redux/actions/postActions";

const Post = ({ post }) => {
  const { user } = useSelector((state) => state?.authReducer?.authData);
  const [liked, setLiked] = useState(post?.likes?.includes(user?._id));
  const [likes, setLikes] = useState(post?.likes?.length);
  const dispatch = useDispatch();
  const handleLike = () => {
    setLiked((prev) => {
      prev
        ? setLikes((preVal) => preVal - 1)
        : setLikes((preVal) => preVal + 1);
      return !prev;
    });
    dispatch(likePost(post?._id, user?._id));
  };
  return (
    <div className="post">
      <img
        src={
          fetchImageURLByFileName(post?.image)
            ? fetchImageURLByFileName(post?.image)
            : ""
        }
        alt=""
      />
      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span
        style={{
          color: "var(--gray)",
          fontSize: "12px",
        }}
      >
        {likes} Likes
      </span>
      <div className="detail">
        <span>
          <strong>{post?.name}</strong>
        </span>
        <span> {post?.desc}</span>
      </div>
    </div>
  );
};

export default Post;
