import SearchButton from "../inputs/SearchButton";
import SearchInput from "../inputs/SearchInput";
import { useEffect, useRef } from "react";
import { useUserDetails } from "../../context/user-context";
import { useTheme } from "../../context/theme-context";
import NewChatCard from "../chat/NewChatCard";
import { useAllUsers } from "../../hooks/useAllUsers";

const NewContactModal = ({ isVisible, setIsVisible }) => {
  if (!isVisible) return null;
  const inputRef = useRef(null);

  const { state: contacts } = useAllUsers();
  const { theme } = useTheme();
  const { checkConversation } = useUserDetails();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="fixed inset-0 bottom-32  left-96 top-[52px] w-1/5 items-center rounded-md  border border-[#f5f0ff] bg-white p-4 backdrop-blur-sm dark:border-black dark:bg-slate-900">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <h1 className="mb-5 text-xl font-semibold ">All Contacts</h1>
          <img
            src={`${theme === "dark" ? "/cross-dark.png" : "/cross.png"}`}
            className="mb-4 ml-auto cursor-pointer"
            height="25px"
            width="25px"
            onClick={() => setIsVisible(!isVisible)}
          />
        </div>
        <div className="flex justify-center space-x-2 ">
          <SearchInput placeholder="Type to search..." ref={inputRef} />
          <SearchButton>
            <img src="/search.png" height="25px" width="25px" />
          </SearchButton>
        </div>
        {!contacts.loading &&
          contacts.users.map((user, index) => {
            return (
              <div
                className={`flex space-x-3 
               overflow-y-auto
               bg-white p-4 pl-4 shadow-sm hover:bg-slate-100 dark:bg-black dark:hover:bg-slate-950`}
                key={user._id}
                onClick={() => {
                  checkConversation(user);
                  setIsVisible(!isVisible);
                }}
              >
                <NewChatCard {...user} key={user._id} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NewContactModal;
