import { useRef, useState } from "react";
import AttachmentButton from "../inputs/AttachmentButton";
import MessageInput from "../inputs/MessageInput";
import SendButton from "../inputs/SendButton";
import { useUserDetails } from "../../context/user-context";

const MessageBox = ({ _id, myDetails }) => {
  const [message, setMessage] = useState("");
  const { sendMessage, sendAttachment } = useUserDetails();
  const fileRef = useRef(null);
  const sendText = async () => {
    const data = {
      message: message,
      sender: myDetails._id,
    };
    await sendMessage(_id, data);
    setMessage("");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("sender", myDetails._id);
    await sendAttachment(_id, data);
    setMessage("");
  };

  const handleFileClick = () => {
    fileRef.current.click();
  };

  return (
    <div className="fixed bottom-4   w-6/12  p-2">
      <div className="ml-6 flex justify-center space-x-3">
        <AttachmentButton type="button" onClick={handleFileClick}>
          <img
            src="/attachment.png"
            height="25px"
            width="25px"
            className="font-bold"
          />
        </AttachmentButton>
        <input
          type="file"
          className="hidden"
          ref={fileRef}
          onChange={handleFileUpload}
        />
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
