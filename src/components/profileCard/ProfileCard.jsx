import React from "react";
import { Link } from "react-router-dom";
import "./profileCard.css";
import { useSelector } from "react-redux";
import { fetchImageURLByFileName } from "../../redux/actions/uploadAction";

const ProfileCard = ({ profilePage = false }) => {
  const user = useSelector((state) => state?.authReducer?.authData);
  const { posts } = useSelector((state) => state?.postReducer);
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user?.coverImage
              ? fetchImageURLByFileName(user?.coverImage)
              : fetchImageURLByFileName("defaultCover.jpeg")
          }
          alt=""
        />
        <img
          src={
            user?.profileImage
              ? fetchImageURLByFileName(user?.profileImage)
              : fetchImageURLByFileName("defaultProfile.jpg")
          }
          alt=""
        />
      </div>
      <div className="ProfileNames">
        <span>
          {user?.firstName} {user?.lastName}
        </span>
        <span>{user?.about ? user?.about : "Write about yourself"}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user?.followings?.length}</span>
            <span>followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user?.followers?.length}</span>
            <span>followers</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {
                    posts?.filter((post, index) => post?.userId === user?._id)
                      ?.length
                  }
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {!profilePage && (
        <span>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/profile/${user?._id}`}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
