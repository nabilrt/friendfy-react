const MessageHeader = ({ name }) => {
  return (
    <div className="flex items-center border-b bg-blue-300 p-4 text-xl font-semibold text-white">
      <h2>{name}</h2>
    </div>
  );
};

export default MessageHeader;
