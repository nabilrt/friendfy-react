import MessageHeader from "./MessageHeader";
import MessageList from "./MessageList";
import MessageBox from "./MessageBox";
import { useUserDetails } from "../../context/user-context";
import { Fragment } from "react";

const Messages = () => {
  const { selected } = useUserDetails();

  return (
    <div className="flex w-2/3 flex-col space-y-3  rounded-e-md bg-slate-100 shadow-black dark:bg-slate-900 dark:shadow-lg">
      {selected ? (
        <Fragment>
          <div className="h-[10%]">
            <MessageHeader {...selected} />
          </div>
          <div className="h-[90%] overflow-y-auto">
            <MessageList {...selected} />
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
