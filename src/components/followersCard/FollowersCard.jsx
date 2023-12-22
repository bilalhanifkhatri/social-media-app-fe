import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./followersCard.css";
import FollowerUser from "../followerUser/FollowerUser";
import { fetchUsers } from "../../redux/actions/userActions";

const FollowersCard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.authReducer?.authData?.user);
  const [profiles, setProfile] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const res = await dispatch(fetchUsers());
      setProfile(res);
    };
    fetching();
  }, [dispatch]);
  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>
      {profiles?.map((profile, key) => {
        if (profile?._id !== user?._id) {
          return <FollowerUser profile={profile} key={key} />;
        }
        return "";
      })}
    </div>
  );
};

export default FollowersCard;
