import API from "../../services/axiosServices";

export const fetchUserById = (userId) => async (dispatch) => {
  dispatch({ type: "FETCH_USER_BY_ID_REQUEST" });
  try {
    const res = await API.get(`user/${userId}`);
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
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const res = await API.get(`user`);
    if (res?.data?.res === "success") {
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: res?.data?.data });
    } else if (res?.data?.res === "error") {
      dispatch({ type: "FETCH_USERS_FAILURE" });
    }
    return res?.data?.data;
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE" });
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

export const followUser = (userId, userData) => async (dispatch) => {
  dispatch({ type: "FOLLOW_USER", payload: userId });
  try {
    const res = await API.put(`user/${userId}/follow`, userData);
    if (res?.data?.res === "success") {
      return "success";
    } else if (res?.data?.res === "error") {
      return "error";
    }
    return res?.data?.data;
  } catch (error) {
    return "error";
  }
};
export const unFollowUser = (userId, userData) => async (dispatch) => {
  dispatch({ type: "UNFOLLOW_USER", payload: userId });
  try {
    const res = await API.put(`user/${userId}/unfollow`, userData);
    if (res?.data?.res === "success") {
      return "success";
    } else if (res?.data?.res === "error") {
      return "error";
    }
    return res?.data?.data;
  } catch (error) {
    return "error";
  }
};
