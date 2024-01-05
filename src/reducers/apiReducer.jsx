export const API_INITIAL_STATE = {
  loading: false,
  error: null,
  data: null,
};

export const apiReducer = (state = API_INITIAL_STATE, action) => {
  switch (action.type) {
    case "API_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "API_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "API_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
