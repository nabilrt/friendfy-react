import { useEffect, useReducer } from "react";
import { useUserDetails } from "../context/user-context";
import axios from "axios";

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

export const useUser = () => {
  const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);

  const { getToken, isProfileUpdated } = useUserDetails();

  const { token } = getToken();

  const getUser = async () => {
    dispatch({ type: "USER_LOADING" });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/user/details`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch({ type: "USER_SUCCESS", payload: response.data.user });
    } catch (error) {
      dispatch({ type: "USER_ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getUser();
  }, [isProfileUpdated]);

  return { state };
};
