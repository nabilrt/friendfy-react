import { useState } from "react";
import AttachmentButton from "../inputs/AttachmentButton";
import MessageInput from "../inputs/MessageInput";
import SendButton from "../inputs/SendButton";
import { useUserDetails } from "../../context/user-context";

const MessageBox = ({ _id, myDetails }) => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useUserDetails();
  const sendText = async () => {
    const data = {
      message: message,
      sender: myDetails._id,
    };
    await sendMessage(_id, data);
    setMessage("");
  };
  return (
    <div className="fixed bottom-4   w-6/12  p-2">
      <div className="ml-6 flex justify-center space-x-3">
        <AttachmentButton>
          <img
            src="/attachment.png"
            height="25px"
            width="25px"
            className="font-bold"
          />
        </AttachmentButton>
        <MessageInput
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SendButton type="button" onClick={sendText}>
          <img
            src="/send.png"
            height="25px"
            width="25px"
            className="font-bold"
          />
        </SendButton>
      </div>
    </div>
  );
};
export default MessageBox;
