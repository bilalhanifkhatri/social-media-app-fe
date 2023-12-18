import API from "../../services/axiosServices";

export const fetchUserById = (userId) => async (dispatch) => {
  dispatch({ type: "FETCH_USER_BY_ID_REQUEST" });
  try {
    const res = await API.post(`user/${userId}`);
    if (res?.data?.res === "success") {
      dispatch({ type: "FETCH_USER_BY_ID_SUCCESS", payload: res?.data?.data });
    } else if (res?.data?.res === "error") {
      dispatch({ type: "FETCH_USER_BY_ID_FAILURE" });
    }
    return res?.data?.data;
  } catch (error) {
    dispatch({ type: "FETCH_USER_BY_ID_FAILURE" });
  }
};
