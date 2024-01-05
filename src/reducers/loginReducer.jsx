export const LOGIN_INITIAL_STATE = {
  email: "",
  password: "",
};

export const loginReducer = (state = LOGIN_INITIAL_STATE, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
