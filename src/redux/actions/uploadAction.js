import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export const uploadFile = (data) => async (dispatch) => {
  try {
    if (data) {
      // Generate a unique filename based on current timestamp
      const timestamp = new Date().getTime();
      const fileName = `image_${timestamp}`;

      // Create a reference to the storage location with the unique filename
      const imageRef = ref(storage, fileName);

      // Upload the image to the storage location
      await uploadBytes(imageRef, data);

      // Get the download URL for the uploaded image
      const imageUrl = await getDownloadURL(imageRef);

      // Parse the URL to extract the token (if needed)
      // const url = new URL(imageUrl);
      // const token = url.searchParams.get("token");

      return imageUrl;
    }
  } catch (error) {
    console.log(error);
  }
  return "";
};

export const deleteImage = async (fileName) => {
  try {
    // Create a reference to the storage location with the specified filename
    const imageRef = ref(storage, fileName);

    // Delete the image at the specified location
    await deleteObject(imageRef);

    console.log(`Image ${fileName} deleted successfully.`);
    return true; // Return true to indicate successful deletion
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export const fetchImageURLByFileName = (fileName) => {
  return fileName;
};
