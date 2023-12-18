import API from "../../services/axiosServices";

export const signUp = (data) => async (dispatch) => {
  dispatch({ type: "AUTH_LOGIN_REQUEST" });
  try {
    const res = await API.post("auth/register", data);
    dispatch({ type: "AUTH_LOGIN_SUCCESS", payload: res?.data?.data });
    return res?.data;
  } catch (error) {
    dispatch({ type: "AUTH_LOGIN_FAILURE" });
  }
};
export const login = (data) => async (dispatch) => {
  dispatch({ type: "AUTH_SIGNUP_REQUEST" });
  try {
    const res = await API.post("auth/login", data);
    dispatch({ type: "AUTH_SIGNUP_SUCCESS", payload: res?.data?.data });
    return res?.data;
  } catch (error) {
    dispatch({ type: "AUTH_SIGNUP_FAILURE" });
  }
};
export const logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
