import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./posts.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTimelinePosts } from "../../redux/actions/postActions";
import Post from "../post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.authReducer?.authData?.user);
  const { posts, loading } = useSelector((state) => state?.postReducer);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchTimelinePosts(user?._id));
  }, [dispatch, user]);
  return (
    <div className="Posts">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {id
            ? posts
                ?.filter((post) => post?.userId === id)
                ?.map((post, index) => {
                  return <Post post={post} key={index} />;
                })
            : posts?.map((post, index) => {
                return <Post post={post} key={index} />;
              })}
        </>
      )}
    </div>
  );
};

export default Posts;
