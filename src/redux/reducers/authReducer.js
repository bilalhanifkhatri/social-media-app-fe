const authReducer = (
  state = {
    authData: null,
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "AUTH_LOGIN_REQUEST":
    case "FETCH_USER_BY_ID_REQUEST":
    case "AUTH_SIGNUP_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "AUTH_LOGIN_SUCCESS":
    case "AUTH_SIGNUP_SUCCESS":
    case "FETCH_USER_BY_ID_SUCCESS":
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return {
        ...state,
        loading: false,
        error: false,
        authData: action.payload,
      };
    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        loading: false,
        error: false,
        authData: null,
      };
    case "AUTH_LOGIN_FAILURE":
    case "AUTH_SIGNUP_FAILURE":
    case "FETCH_USER_BY_ID_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default authReducer;
