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
    case "AUTH_SIGNUP_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "AUTH_LOGIN_SUCCESS":
    case "AUTH_SIGNUP_SUCCESS":
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return {
        ...state,
        loading: false,
        error: false,
        authData: action.payload,
      };
    case "AUTH_LOGIN_FAILURE":
    case "AUTH_SIGNUP_FAILURE":
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
