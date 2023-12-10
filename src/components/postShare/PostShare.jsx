import React, { useRef, useState } from "react";
import "./postShare.css";
import ProfileImage from "../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="what's happening" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => {
              imageRef?.current?.click();
            }}
          >
            <UilScenery /> Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle /> Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint /> Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule /> Schedule
          </div>
          <button className="primary-btn ps-button">Share</button>
          <div
            style={{
              display: "none",
            }}
          >
            <input
              type="file"
              name="image-file"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && image?.image && (
          <div className="imagePreview">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image?.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
