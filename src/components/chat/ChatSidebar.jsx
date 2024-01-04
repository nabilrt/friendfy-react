import { useState } from "react";
import ChatCard from "./ChatCard";
import ChatTopBar from "./ChatTopBar";
import NewContactModal from "../modal/NewContactModal";
import { useUserDetails } from "../../context/user-context";
const ChatSidebar = () => {
  const { users, selected, setSelected } = useUserDetails();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex  w-1/3 flex-col space-y-2 border bg-slate-50 ">
      <div className="space-y-3 border border-solid  border-white p-4 ">
        <ChatTopBar isVisible={isVisible} setIsVisible={setIsVisible} />
        {users.slice(0, 3).map((user, index) => {
          return (
            <div
              className={`flex space-x-3 ${
                user.id === selected.id ? "bg-blue-300" : "bg-white"
              } overflow-y-auto p-4 pl-4 shadow-sm`}
              onClick={() => setSelected(user)}
              key={user.id}
            >
              <ChatCard {...user} key={user.id} />
            </div>
          );
        })}
      </div>
      <NewContactModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

export default ChatSidebar;
