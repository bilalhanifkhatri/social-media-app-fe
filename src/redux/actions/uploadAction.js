import API from "../../services/axiosServices";

export const uploadFile = (data) => async (dispatch) => {
  try {
    const res = await API.post("upload", data);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchImageURLByFileName = (fileName) => {
  return process.env.REACT_APP_PUBLIC_FOLDER + fileName;
};
