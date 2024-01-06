import { useReducer, useEffect } from "react";
import {
  ALL_USER_INITIAL_STATE,
  getallUserReducer,
} from "../reducers/allUserReducer";
import { useUserDetails } from "../context/user-context";
import axios from "axios";
export const useAllUsers = () => {
  
  const [state, dispatch] = useReducer(
    getallUserReducer,
    ALL_USER_INITIAL_STATE,
  );
  const { getToken } = useUserDetails();
  const { token } = getToken();
  const fetchAllUsers = async () => {
    console.log("here");
    dispatch({ type: "ALL_USER_LOADING" });
    try {
      
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/user/allUsers`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
   
      dispatch({ type: "ALL_USER_SUCCESS", payload: response.data.users });
    } catch (error) {
      dispatch({ type: "ALL_USER_ERROR", payload: error });
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, [token]);
  return { state };
};
