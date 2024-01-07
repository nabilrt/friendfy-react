import { useTheme } from "../../context/theme-context";
import { useUserDetails } from "../../context/user-context";
import DeleteConfirmationModal from "../modal/DeleteConfirmationModal";
import { useState } from "react";

const MessageHeader = ({ _id, otherUser, messages }) => {
  const { theme } = useTheme();
  const { setSelected } = useUserDetails();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center border-b bg-[#e6daff] p-4 text-xl font-semibold text-black dark:border-black">
      <div className=" mr-auto flex  space-x-3   ">
        <img
          src={`back.png`}
          height="24px"
          width="24px"
          className="inline cursor-pointer"
          onClick={() => {
            setSelected(null);
          }}
        ></img>
        <h2 className="">{otherUser && otherUser.name}</h2>
      </div>

      <div className=" items-center ">
        <img
          src="/delete.png"
          className="cursor-pointer"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </div>
      <DeleteConfirmationModal
        _id={_id}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default MessageHeader;
