const chatReducer = (
  state = {
    chats: [],
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_CHATS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "FETCH_CHATS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        chats: action.payload,
      };
    case "FETCH_CHATS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default chatReducer;
