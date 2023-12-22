import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFile = (data) => async (dispatch) => {
  try {
    if (data) {
      const imageRef = ref(storage, "image");
      await uploadBytes(imageRef, data);

      const imageUrl = await getDownloadURL(imageRef);

      // Parse the URL to extract the token
      const url = new URL(imageUrl);
      const token = url.searchParams.get("token");

      return token;
    }
  } catch (error) {
    console.log(error);
  }
  return "";
};

export const fetchImageURLByFileName = (fileName) => {
  return process.env.REACT_APP_PUBLIC_FOLDER + fileName;
};
