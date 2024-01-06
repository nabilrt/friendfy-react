export const EDIT_USER_INITIAL_STATE = {
  name: "",
  email: "",
  password: null,
};

export const editUserReducer = (state = EDIT_USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case "EDIT_USER":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
