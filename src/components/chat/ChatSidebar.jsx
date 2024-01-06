import { useState } from "react";
import ChatCard from "./ChatCard";
import ChatTopBar from "./ChatTopBar";
import NewContactModal from "../modal/NewContactModal";
import { useUserDetails } from "../../context/user-context";
import { useConversations } from "../../hooks/useConversations";
import { useUser } from "../../hooks/useUserDetails";
import { useTheme } from "../../context/theme-context";
import UserEditModal from "../modal/UserEditModal";
const ChatSidebar = () => {
  const { selected, setSelected, signOut } = useUserDetails();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useConversations();
  const { state: user } = useUser();
  const { theme } = useTheme();

  return (
    <div className="flex  w-1/3 flex-col space-y-2  rounded-s-md bg-slate-50 dark:bg-slate-900">
      <div className="h-screen space-y-3 border   border-solid border-white p-4 dark:border-black">
        <ChatTopBar isVisible={isVisible} setIsVisible={setIsVisible} />
        {state.conversations.map((user, index) => {
          return (
            <div
              className={`flex space-x-3 ${
                selected && user._id === selected._id
                  ? "bg-[#e6daff] dark:text-black "
                  : "bg-white dark:bg-slate-800 dark:text-white"
              } overflow-y-auto p-4 pl-4 shadow-sm hover:bg-[#e2dcf3] dark:hover:bg-slate-700 dark:hover:text-white `}
              onClick={() => setSelected(user)}
              key={user._id}
            >
              <ChatCard {...user} key={user._id} />
            </div>
          );
        })}
        {!user.loading && !user.error && (
          <div className="fixed bottom-5 m-auto flex w-[24.5%]  space-x-3 bg-[#e6daff] p-4 dark:bg-slate-800">
            <div className="mr-auto flex items-center space-x-3">
              <img
                src={user.user.avatar}
                height="40px"
                width="40px"
                className="inline rounded-full "
              />
              <p>{user.user.name}</p>
            </div>

            <div className="mb-2 flex items-center space-x-4">
              <img
                src={`${theme === "dark" ? "/edit-dark.png" : "edit.png"}`}
                height="24px"
                width="24px"
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              ></img>
              <img
                src={`${theme === "dark" ? "/logout-dark.png" : "/logout.png"}`}
                className="cursor-pointer "
                height="24px"
                width="24px"
                onClick={() => signOut()}
              />
            </div>
          </div>
        )}
      </div>
      <NewContactModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <UserEditModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default ChatSidebar;
