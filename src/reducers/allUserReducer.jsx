export const ALL_USER_INITIAL_STATE = {
  users: [],
  loading: false,
  error: null,
};

export const getallUserReducer = (state = ALL_USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case "ALL_USER_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ALL_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "ALL_USER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
