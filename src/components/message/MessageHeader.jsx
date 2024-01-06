import { useTheme } from "../../context/theme-context";
import { useUserDetails } from "../../context/user-context";

const MessageHeader = ({ otherUser, messages }) => {
  const { theme } = useTheme();
  const { setSelected } = useUserDetails();

  return (
    <div className="flex items-center space-x-3 border-b bg-[#e6daff] p-4 text-xl font-semibold text-black dark:border-black">
      <img
        src={`back.png`}
        height="24px"
        width="24px"
        className="inline cursor-pointer"
        onClick={() => {
          setSelected(null);
        }}
      ></img>
      <h2>{otherUser && otherUser.name}</h2>
    </div>
  );
};

export default MessageHeader;
