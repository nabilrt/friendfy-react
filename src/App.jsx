import AuthPage from "./components/auth/AuthPage";
import ThemeSwitcher from "./components/inputs/ThemeSwitcher";
import { useTheme } from "./context/theme-context";
import ChatSidebar from "./components/chat/ChatSidebar";
import Messages from "./components/message/Messages";
import { Fragment, useState } from "react";

function App() {
  const { theme, setTheme } = useTheme();
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div
      className={`  ${
        theme === "dark" ? "dark bg-[#001F3F]" : "bg-[#f5f0ff]"
      } transition-colors duration-300 ease-in-out`}
    >
      <div
        className={`m-auto flex h-screen w-4/5 p-4 transition-colors  duration-300 ease-in-out dark:text-white`}
      >
        {isAuth ? (
          <AuthPage />
        ) : (
          <Fragment>
            <ChatSidebar />
            <Messages />
          </Fragment>
        )}

        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;
