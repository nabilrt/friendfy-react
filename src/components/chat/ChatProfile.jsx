import { useTheme } from "../../context/theme-context";

const ChatProfile = ({ name, avatar, isOpen, setIsOpen, signOut }) => {
  const { theme } = useTheme();
  return (
    <div className="fixed bottom-5 m-auto flex w-[24.5%]  space-x-3 bg-[#e6daff] p-4 dark:bg-slate-800">
      <div className="mr-auto flex items-center space-x-3">
        <img
          src={avatar}
          height="40px"
          width="40px"
          className="inline rounded-full "
        />
        <p className="text-lg font-semibold">{name}</p>
      </div>

      <div className="mb-2 flex items-center space-x-4">
        <img
          src={`${theme === "dark" ? "/edit-dark.png" : "edit.png"}`}
          height="24px"
          width="24px"
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        ></img>
        <img
          src={`${theme === "dark" ? "/logout-dark.png" : "/logout.png"}`}
          className="cursor-pointer "
          height="24px"
          width="24px"
          onClick={() => signOut()}
        />
      </div>
    </div>
  );
};

export default ChatProfile;
