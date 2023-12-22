import API from "../../services/axiosServices.js";

export const fetchChats = (id) => async (dispatch) => {
  dispatch({ type: "FETCH_CHATS_REQUEST" });
  try {
    const res = await API.get(`chat/${id}`);
    if (res?.data?.res === "success") {
      dispatch({ type: "FETCH_CHATS_SUCCESS", payload: res?.data?.data });
    } else if (res?.data?.res === "error") {
      dispatch({ type: "FETCH_CHATS_FAILURE" });
    }
    return res?.data?.data;
  } catch (error) {
    dispatch({ type: "FETCH_CHATS_FAILURE" });
  }
};
