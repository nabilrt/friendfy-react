const MessageCard = ({ message }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/avatar.png"
        height="40"
        width="40"
        className="rounded-full"
      ></img>
      <p className="rounded-md bg-white p-2">{message}</p>
    </div>
  );
};

export default MessageCard;
