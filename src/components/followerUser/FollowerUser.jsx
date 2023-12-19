import React, { useState } from "react";
import { fetchImageURLByFileName } from "../../redux/actions/uploadAction";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../redux/actions/userActions";

const FollowerUser = ({ profile }) => {
  const user = useSelector((state) => state?.authReducer?.authData?.user);
  const [following, setFollowing] = useState(
    profile?.followers?.includes(user?._id)
  );
  const dispatch = useDispatch();

  const handleFollow = async () => {
    if (following) {
      await dispatch(unFollowUser(user?._id, profile));
      setFollowing((val) => !val);
    } else {
      await dispatch(followUser(user?._id, profile));
      setFollowing((val) => !val);
    }
  };
  return (
    <div className="follower">
      <div>
        <img
          src={
            profile?.profilePic
              ? fetchImageURLByFileName(profile?.profilePic)
              : fetchImageURLByFileName("defaultProfile.jpg")
          }
          alt=""
          className="followerImg"
        />
        <div className="name">
          <span>{`${profile?.firstName} ${profile?.lastName}`}</span>
          <span>@{profile?.username}</span>
        </div>
      </div>
      <button className="primary-btn fc-button" onClick={handleFollow}>
        {following ? "unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default FollowerUser;
