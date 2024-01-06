import { useUserDetails } from "../context/user-context";

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

    default:
      return state;
  }
};
