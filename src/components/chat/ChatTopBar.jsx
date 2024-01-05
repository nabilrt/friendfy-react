import { useTheme } from "../../context/theme-context";

const ChatTopBar = ({ isVisible, setIsVisible }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center ">
      <h1 className="mb-5 text-xl font-semibold dark:text-white">Chat List</h1>
      <div className="mb-4 ml-auto flex space-x-4">
        <img
          className="cursor-pointer"
          src={`${theme === "dark" ? "/light.png" : "/dark.png"}`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        ></img>
        <img
          src={`${theme === "dark" ? "/add-dark.png" : "/add.png"}`}
          className="cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
    </div>
  );
};

export default ChatTopBar;
