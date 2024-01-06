import MessageHeader from "./MessageHeader";
import MessageList from "./MessageList";
import MessageBox from "./MessageBox";
import { useUserDetails } from "../../context/user-context";
import { Fragment, useState, useEffect } from "react";
import { useConversations } from "../../hooks/useConversations";

const Messages = () => {
  const { selected } = useUserDetails();
  const [selectedUser, setSelectedUser] = useState(selected);
  const { state } = useConversations();

  useEffect(() => {
    // Update the selected user whenever it changes

    setSelectedUser(selected);
  }, [state]);

  return (
    <div
      key={state ? "dd" : "noUser"}
      className="flex w-2/3 flex-col space-y-3  rounded-e-md bg-slate-100 shadow-black dark:bg-slate-900 dark:shadow-lg"
    >
      {selected ? (
        <Fragment>
          <div className="h-[10%]">
            <MessageHeader {...selected} />
          </div>
          <div className="h-[90%] overflow-y-auto">
            <MessageList
              selected={selected}
              messages={
                state.conversations &&
                state.conversations.find((conv) => conv._id === selected._id)
                  .messages 
              }
            />
          </div>
          <div className="h-[10%]">
            <MessageBox {...selected} />
          </div>
        </Fragment>
      ) : (
        <div className="flex h-full items-center justify-center">
          Choose some one first
        </div>
      )}
    </div>
  );
};

export default Messages;
