import { Fragment } from "react";

const NewChatCard = ({ avatar, name }) => {
  return (
    <Fragment>
      <img src={avatar} height="50" width="50"></img>
      <div className="flex flex-col space-y-2">
        <h2 className="text-sm font-semibold">{name}</h2>
      </div>
    </Fragment>
  );
};

export default NewChatCard;
