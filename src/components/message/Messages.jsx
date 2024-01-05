import MessageHeader from "./MessageHeader";
import MessageList from "./MessageList";
import MessageBox from "./MessageBox";
import { useUserDetails } from "../../context/user-context";

const Messages = () => {
  const { selected, messages } = useUserDetails();
  return (
    <div className="flex w-2/3 flex-col space-y-3  bg-slate-100 dark:bg-slate-900 dark:shadow-lg shadow-black rounded-e-md">
      <div className="h-[10%]">
        <MessageHeader {...selected} />
      </div>
      <div className="h-[90%] overflow-y-auto">
        <MessageList messages={messages} />
      </div>
      <div className="h-[10%]">
        <MessageBox />
      </div>
    </div>
  );
};

export default Messages;
