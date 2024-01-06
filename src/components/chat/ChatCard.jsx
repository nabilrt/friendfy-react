import { Fragment } from "react";

const ChatCard = ({ otherUser, lastMessage }) => {
  return (
    <Fragment>
      <img src={otherUser.avatar} height="50" width="50"></img>
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
    </Fragment>
  );
};

export default ChatCard;
