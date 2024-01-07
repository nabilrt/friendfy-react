import { useTheme } from "../../context/theme-context";
import CancelButton from "../inputs/CancelButton";
import DeleteButton from "../inputs/DeleteButton";
const DeleteConfirmationModal = ({ _id, isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) return null;

  const { theme } = useTheme();

  return (
    <div className="fixed inset-0  flex  items-center justify-center rounded-md border  border-[#f5f0ff] bg-white bg-opacity-25 p-4 backdrop-blur-sm dark:border-black dark:bg-slate-900 dark:bg-opacity-25">
      <div className="m-auto flex h-1/4 w-1/4 flex-col space-y-4 rounded-md border-[#f5f0ff] bg-[#f5f0ff] p-4 dark:border-black dark:bg-slate-700">
        <div className="ml-auto rounded-full bg-purple-200 p-1 hover:bg-purple-300 dark:bg-slate-600 dark:hover:bg-slate-500">
          <img
            src={`${theme === "dark" ? "/cross-dark.png" : "/cross.png"}`}
            className="cursor-pointer"
            height="25px"
            width="25px"
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex  space-x-3">
            <p className="text-base font-bold dark:text-white">
              Are you sure you want to delete this user?
            </p>
          </div>
          <div className="flex justify-around space-x-3">
            <CancelButton onClick={() => setIsModalOpen(!isModalOpen)}>
              <img
                src={`${theme === "dark" ? "/cancel-dark.png" : "/cancel.png"}`}
                className="cursor-pointer"
                height="25px"
                width="25px"
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
            </CancelButton>
            <DeleteButton
              
              onClick={() => {
                deleteUser(_id);
              }}
            >
              <img
                src={`delete-cancel.png`}
                className="cursor-pointer"
                height="25px"
                width="25px"
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
            </DeleteButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
