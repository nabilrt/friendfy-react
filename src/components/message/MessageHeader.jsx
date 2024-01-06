const MessageHeader = ({ otherUser, messages }) => {
  return (
    <div className="flex items-center border-b bg-blue-300 p-4 text-xl font-semibold text-white dark:border-black">
      <h2>{otherUser && otherUser.name}</h2>
    </div>
  );
};

export default MessageHeader;
