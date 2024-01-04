import AttachmentButton from "../inputs/AttachmentButton";
import MessageInput from "../inputs/MessageInput";
import SendButton from "../inputs/SendButton";

const MessageBox = () => {
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
        <MessageInput placeholder="Type a message" />
        <SendButton>
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
