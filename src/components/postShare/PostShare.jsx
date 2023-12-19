import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./postShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import {
  fetchImageURLByFileName,
  uploadFile,
} from "../../redux/actions/uploadAction";
import { uploadPost } from "../../redux/actions/postActions";

const PostShare = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.authReducer?.authData);
  const loading = useSelector((state) => state?.postReducer?.loading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const descRef = useRef();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setImage(img);
    }
  };

  const resetPostSection = () => {
    setImage(null);
    descRef.current.value = "";
  };

  const handleSharePost = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user?._id,
      desc: descRef?.current?.value,
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image?.name;
      data?.append("name", fileName);
      data?.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        await dispatch(uploadFile(data));
      } catch (error) {
        console.log(error);
      }
    }
    const res = await dispatch(uploadPost(newPost));
    if (res?.res === "success") {
      resetPostSection();
    }
  };
  return (
    <div className="PostShare">
      <img
        src={
          user?.profilePic
            ? fetchImageURLByFileName(user?.profilePic)
            : fetchImageURLByFileName("defaultProfile.jpg")
        }
        alt=""
      />
      <div>
        <input
          type="text"
          placeholder="what's happening"
          ref={descRef}
          required
        />
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
          <button
            className="primary-btn ps-button"
            onClick={handleSharePost}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>
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
        {image && image && (
          <div className="imagePreview">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
