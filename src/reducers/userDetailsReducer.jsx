export const USER_INITIAL_STATE = {
  user: {},
  loading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "USER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
