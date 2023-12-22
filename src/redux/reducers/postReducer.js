const postReducer = (
  state = {
    posts: [],
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "UPLOAD_POST_REQUEST":
    case "FETCH_TIMELINE_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };

    case "LIKE_POST_REQUEST":
      return {
        ...state,
      };
    case "UPLOAD_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: [action.payload, ...state?.posts],
      };
    case "FETCH_TIMELINE_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload,
      };

    case "LIKE_POST_SUCCESS":
      // const { postId, userId } = action?.payload;
      return {
        ...state,
        // posts: [...state?.posts],
      };
    case "UPLOAD_POST_FAILURE":
    case "FETCH_TIMELINE_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "LIKE_POST_FAILURE":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default postReducer;
