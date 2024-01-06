import { useConversations } from "../../hooks/useConversations";
import MessageCard from "./MessageCard";
const MessageList = ({ selected, messages }) => {
  
  return (
    <div className="flex  flex-grow flex-col space-y-3  p-4">
      <div className="flex flex-col justify-between space-y-6">
        {messages.map((message, index) => {
          return (
            <div
              className={`flex flex-col space-y-1 ${
                message.sender !== selected.otherUser._id
                  ? "items-end"
                  : "items-start"
              }`}
              key={message._id}
            >
              <MessageCard
                message={message}
                me={selected.myDetails}
                other={selected.otherUser}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageList;
