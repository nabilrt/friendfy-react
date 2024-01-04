import MessageCard from "./MessageCard";
const MessageList = ({ messages }) => {
  return (
    <div className="flex  flex-grow flex-col space-y-3  p-4">
      <div className="flex flex-col justify-between space-y-6">
        {messages.map((message, index) => {
          return (
            <div
              className={`flex flex-col space-y-1 ${
                index % 2 === 0 ? "items-end" : "items-start"
              }`}
              key={message.id}
            >
              <MessageCard {...message} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageList;
