const authReducer = (
  state = {
    authData: null,
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "UPDATE_USER_REQUEST":
    case "AUTH_LOGIN_REQUEST":
    case "AUTH_SIGNUP_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "AUTH_LOGIN_SUCCESS":
    case "AUTH_SIGNUP_SUCCESS":
    case "UPDATE_USER_SUCCESS":
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
    case "UPDATE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "FOLLOW_USER":
      return {
        ...state,
        authData: {
          ...state?.authData,
          user: {
            ...state?.authData?.user,
            followings: [...state?.authData?.user?.followings, action?.payload],
          },
        },
      };
    case "UNFOLLOW_USER":
      return {
        ...state,
        authData: {
          ...state?.authData,
          user: {
            ...state?.authData?.user,
            followings: [
              ...state?.authData?.user?.followings?.filter(
                (personId) => personId !== action?.payload
              ),
            ],
          },
        },
      };
    default:
      return state;
  }
};

export default authReducer;
