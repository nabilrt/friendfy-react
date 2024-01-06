const MessageCard = ({ message, me, other }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={`${me._id === message.sender ? me.avatar : other.avatar}`}
        height="40"
        width="40"
        className="rounded-full"
      ></img>
      {message.attachment ? (
        <div className="p-4 bg-[#e6daff] dark:bg-slate-800 flex flex-col space-y-1">
          <img src={message.attachment} height="100px" width="100px" />
        </div>
      ) : (
        <p className="rounded-md bg-white p-2 dark:text-black">
          {message.message}
        </p>
      )}
    </div>
  );
};

export default MessageCard;
