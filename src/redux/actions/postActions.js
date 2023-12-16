import API from "../../services/axiosServices";

export const uploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_POST_REQUEST" });
  try {
    const res = await API.post("post/", data);
    if (res?.data?.res === "success") {
      dispatch({ type: "UPLOAD_POST_SUCCESS", payload: res?.data?.data });
    } else if (res?.data?.res === "error") {
      dispatch({ type: "UPLOAD_POST_FAILURE" });
    }
    return res?.data;
  } catch (error) {
    dispatch({ type: "UPLOAD_POST_FAILURE" });
  }
};
export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });
  try {
    const res = await API.get("post/");
    if (res?.data?.res === "success") {
      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: res?.data?.data });
    } else if (res?.data?.res === "error") {
      dispatch({ type: "FETCH_POSTS_FAILURE" });
    }
    return res?.data;
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE" });
  }
};

export const fetchTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "FETCH_TIMELINE_POSTS_REQUEST" });
  try {
    const res = await API.get(`post/${id}/timeline`);
    if (res?.data?.res === "success") {
      dispatch({
        type: "FETCH_TIMELINE_POSTS_SUCCESS",
        payload: res?.data?.data,
      });
    } else if (res?.data?.res === "error") {
      dispatch({ type: "FETCH_TIMELINE_POSTS_FAILURE" });
    }
    return res?.data;
  } catch (error) {
    dispatch({ type: "FETCH_TIMELINE_POSTS_FAILURE" });
  }
};

export const likePost = (postId, userId) => async (dispatch) => {
  dispatch({ type: "LIKE_POST_REQUEST" });
  try {
    const res = await API.post(`post/${postId}/like`, { userId: userId });
    if (res?.data?.res === "success") {
      dispatch({
        type: "LIKE_POST_SUCCESS",
        payload: { postId, userId },
      });
    } else if (res?.data?.res === "error") {
      dispatch({ type: "LIKE_POST_FAILURE" });
    }
    return res?.data;
  } catch (error) {
    dispatch({ type: "LIKE_POST_FAILURE" });
  }
};
