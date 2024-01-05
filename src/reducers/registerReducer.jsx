export const REGISTER_INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  profilePicture: null,
};

export const registerReducer = (state = REGISTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "PICTURE_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.files[0],
      };
    default:
      return state;
  }
};
