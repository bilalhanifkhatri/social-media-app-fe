import { Modal } from "@mantine/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadFile } from "../../redux/actions/uploadAction";
import { updateUser } from "../../redux/actions/userActions";

const ProfileModal = ({ opened, setOpened, data = {} }) => {
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();

  const handleChange = (e) => {
    setFormData((preData) => {
      return { ...preData, [e?.target?.name]: e?.target?.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let userData = { ...formData };
    if (profileImage) {
      let form = new FormData();
      const fileName = Date.now() + profileImage?.name;
      form.append("name", fileName);
      form.append("file", profileImage);
      userData.profilePic = fileName;
      try {
        await dispatch(uploadFile(form));
      } catch (error) {
        console.log(error?.message);
      }
    }
    if (coverImage) {
      let form = new FormData();
      const fileName = Date.now() + coverImage?.name;
      form.append("name", fileName);
      form.append("file", coverImage);
      userData.coverPic = fileName;
      try {
        await dispatch(uploadFile(form));
      } catch (error) {
        console.log(error?.message);
      }
    }
    dispatch(updateUser(params?.id, userData));

    setOpened(false);
  };
  const handleImageChange = (e) => {
    if (e.target?.files && e.target?.files[0]) {
      let image = e.target?.files[0];
      e.target.name === "profilePic"
        ? setProfileImage(image)
        : setCoverImage(image);
    }
  };
  return (
    <>
      <Modal opened={opened} size={"lg"} onClose={() => setOpened(false)}>
        <form className="info-form" onSubmit={handleSubmit}>
          <h1>Your Info</h1>
          <div>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              onChange={handleChange}
              value={formData?.firstName}
              className="info-input"
            />
            <input
              type="text"
              placeholder="Last name"
              onChange={handleChange}
              value={formData?.lastName}
              name="lastName"
              className="info-input"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Works at"
              onChange={handleChange}
              value={formData?.worksAt}
              name="worksAt"
              className="info-input"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Lives in"
              onChange={handleChange}
              value={formData?.livesIn}
              name="livesIn"
              className="info-input"
            />
            <input
              type="text"
              placeholder="Country"
              onChange={handleChange}
              value={formData?.country}
              name="country"
              className="info-input"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="RelationShip Status"
              onChange={handleChange}
              value={formData?.relationShip}
              name="relationShip"
              className="info-input"
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profilePic" onChange={handleImageChange} />
            Cover Image
            <input type="file" name="coverPic" onChange={handleImageChange} />
          </div>
          <button className="primary-btn info-button" type="submit">
            Update
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ProfileModal;
