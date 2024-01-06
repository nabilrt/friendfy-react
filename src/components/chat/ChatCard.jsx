const ChatCard = ({ _id, otherUser, lastMessage }) => {
  return (
    <div className="flex w-full  space-x-3">
      <div className="mr-auto flex items-center space-x-3">
        <img src={otherUser.avatar} height="50" width="50" />
        <div className="flex flex-col space-y-2">
          <h2 className="text-sm font-semibold">{otherUser.name}</h2>

          {lastMessage && lastMessage.attachment ? (
            <p className="text-xs">
              {lastMessage.sender !== otherUser._id && "You: "}Photo
            </p>
          ) : (
            <p className="text-xs">
              {lastMessage && lastMessage.sender !== otherUser._id && "You: "}
              {lastMessage && lastMessage.message}
            </p>
          )}
        </div>
      </div>
      <div className="ml-auto mt-3 items-center ">
        <img src="/delete.png" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatCard;
