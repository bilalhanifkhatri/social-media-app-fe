import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UilPen } from "@iconscout/react-unicons";
import "./infoCard.css";
import ProfileModal from "../profileModal/ProfileModal";
import { fetchUserById } from "../../redux/actions/userActions";
import { logout } from "../../redux/actions/authActions";

const InfoCard = () => {
  const [opened, setOpened] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params?.id;
  const user = useSelector((state) => state?.authReducer?.authData?.user);
  useEffect(() => {
    const fetching = async () => {
      if (profileUserId === user?._id) {
        setUserProfile(user);
      } else {
        const res = await dispatch(fetchUserById(profileUserId));
        setUserProfile(res);
      }
    };
    fetching(); // Call fetching here
  }, [user, profileUserId, dispatch]);

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h3>Profile Info</h3>
        {user?._id === profileUserId ? (
          <>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => {
                setOpened(true);
              }}
            />
            {opened && (
              <ProfileModal opened={opened} setOpened={setOpened} data={user} />
            )}
          </>
        ) : (
          ""
        )}
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{userProfile?.relationShip}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{userProfile?.livesIn}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{userProfile?.worksAt}</span>
      </div>

      <button className="primary-btn logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
