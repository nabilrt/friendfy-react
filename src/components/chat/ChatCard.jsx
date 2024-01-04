import { Fragment } from "react";

const ChatCard = ({ avatar,name,lastMessage }) => {
   
  return (
    <Fragment>
      <img src={avatar} height="50" width="50"></img>
      <div className="flex flex-col space-y-2">
        <h2 className="text-sm font-semibold">{name}</h2>
        <p className="text-xs">{lastMessage}</p>
      </div>
    </Fragment>
  );
};

export default ChatCard;
