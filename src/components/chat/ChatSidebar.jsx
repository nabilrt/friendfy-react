import { useState } from "react";
import ChatCard from "./ChatCard";
import ChatTopBar from "./ChatTopBar";
import NewContactModal from "../modal/NewContactModal";
import { useUserDetails } from "../../context/user-context";
import { useConversations } from "../../hooks/useConversations";
const ChatSidebar = () => {
  const { users, selected, setSelected } = useUserDetails();
  const [isVisible, setIsVisible] = useState(false);
  const { state } = useConversations();

  

 
 

  return (
    <div className="flex  w-1/3 flex-col space-y-2  rounded-s-md bg-slate-50 dark:bg-slate-900">
      <div className="h-screen space-y-3 border   border-solid border-white p-4 dark:border-black">
        <ChatTopBar isVisible={isVisible} setIsVisible={setIsVisible} />
        {state.conversations.map((user, index) => {
          return (
            <div
              className={`flex space-x-3 ${
                selected && user._id === selected._id
                  ? "bg-blue-300 dark:text-white"
                  : "bg-white dark:bg-black dark:text-white"
              } overflow-y-auto p-4 pl-4 shadow-sm`}
              onClick={() => setSelected(user)}
              key={user._id}
            >
              <ChatCard {...user} key={user._id} />
            </div>
          );
        })}
      </div>
      <NewContactModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

export default ChatSidebar;
