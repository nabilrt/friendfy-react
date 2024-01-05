import { useEffect, useReducer } from "react";
import { useUserDetails } from "../context/user-context";
import axios from "axios";
import { useUser } from "./useUserDetails";

export const CONVERSATION_INITIAL_STATE = {
  conversations: [],
  loading: false,
  error: null,
};

export const conversationReducer = (
  state = CONVERSATION_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case "CONVERSATION_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CONVERSATION_SUCCESS":
      const conversationList = [...action.payload];
      const userId = action.userId;
      const conversations = conversationList.map((conversation) => {
        const otherUser = conversation.participants.find(
          (participant) => participant._id !== userId,
        );
        const myDetails = conversation.participants.find(
          (participant) => participant._id === userId,
        );
        const lastMessage =
          conversation.messages[conversation.messages.length - 1];
        return {
          ...conversation,
          otherUser,
          lastMessage,
          myDetails,
        };
      });
      return {
        ...state,
        loading: false,
        conversations: conversations,
      };
    case "CONVERSATION_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export const useConversations = () => {
  const [state, dispatch] = useReducer(
    conversationReducer,
    CONVERSATION_INITIAL_STATE,
  );

  const { getToken } = useUserDetails();

  const { token } = getToken();
  const { state: userData } = useUser();

  const getConversations = async () => {
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
        userId: userData.user._id,
      });
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
  }, [userData.user, token]);

  return {
    state,
  };
};
