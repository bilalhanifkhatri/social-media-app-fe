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

export const updateUser = (userId, userData) => async (dispatch) => {
  dispatch({ type: "UPDATE_USER_REQUEST" });
  try {
    const res = await API.put(`user/${userId}`, userData);
    if (res?.data?.res === "success") {
      dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: { user: res?.data?.data, token: res?.data?.token },
      });
    } else if (res?.data?.res === "error") {
      dispatch({ type: "UPDATE_USER_FAILURE" });
    }
    return res?.data?.data;
  } catch (error) {
    dispatch({ type: "UPDATE_USER_FAILURE" });
  }
};
