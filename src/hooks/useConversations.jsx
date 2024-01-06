import { useEffect, useReducer } from "react";
import { useUserDetails } from "../context/user-context";
import axios from "axios";
import { useUser } from "./useUserDetails";
import {
  conversationReducer,
  CONVERSATION_INITIAL_STATE,
} from "../reducers/conversationReducer";

export const useConversations = () => {
  const [state, dispatch] = useReducer(
    conversationReducer,
    CONVERSATION_INITIAL_STATE,
  );

  const { getToken, isMessageUpdated, setSelected, selected } =
    useUserDetails();

  const { token } = getToken();
  const { state: userData } = useUser();
  const { user: person } = userData;
  const { _id } = person;

  const getConversations = async () => {
    state.error = null;
    dispatch({ type: "CONVERSATION_LOADING" });
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/conversation/list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch({
        type: "CONVERSATION_SUCCESS",
        payload: response.data.conversations,
        userId: _id,
      });

      const selectedUser = state.conversations.find(
        (conversation) => conversation._id === selected._id,
      );

      setSelected(selectedUser);
    } catch (error) {
      dispatch({ type: "CONVERSATION_ERROR", payload: error });
    }
  };

  useEffect(() => {
    if (!userData.error && userData.user && token) {
      getConversations();
    } else {
      // Reset conversation state or take appropriate actions
      dispatch({ type: "CONVERSATION_RESET" });
    }
  }, [userData.user, token, isMessageUpdated]);

  return {
    state,
  };
};
