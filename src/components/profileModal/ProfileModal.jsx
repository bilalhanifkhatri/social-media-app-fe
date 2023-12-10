import { Modal } from "@mantine/core";
import React from "react";

const ProfileModal = ({ opened, setOpened }) => {
  return (
    <>
      <Modal opened={opened} size={"lg"} onClose={() => setOpened(false)}>
        <form className="info-form">
          <h1>Your Info</h1>
          <div>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              className="info-input"
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              className="info-input"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Works at"
              name="worksAt"
              className="info-input"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Lives in"
              name="liveIn"
              className="info-input"
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              className="info-input"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="RelationShip Status"
              name="relationShipStatus"
              className="info-input"
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImage" />
            Cover Image
            <input type="file" name="coverImage" />
          </div>
          <button className="primary-btn info-button">Update</button>
        </form>
      </Modal>
    </>
  );
};

export default ProfileModal;
