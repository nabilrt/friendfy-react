import AuthInputs from "../inputs/AuthInputs";
import LoginButton from "../inputs/LoginButton";
import RegisterButton from "../inputs/RegisterButton";
import { useState } from "react";
import PasswordInput from "../inputs/PasswordInput";
import { useTheme } from "../../context/theme-context";
import SignInButton from "../inputs/SignInButton";
import Login from "./Login";
import Register from "./Register";
const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const { theme } = useTheme();

  return (
    <div className="m-auto flex h-[75%] flex-col  items-center justify-center space-y-5 rounded-md bg-slate-50 p-8 px-32 dark:bg-slate-900 shadow-lg">
      <div className="flex flex-col items-center space-y-2 ">
        <img
          src={`${theme === "dark" ? "/dark-logo.png" : "/light-logo.png"}`}
          height="100px"
          width="100px"
        ></img>
        <h1 className="text-3xl font-semibold">Welcome to Friendify</h1>
        <p className="text-sm">Please login or register to continue</p>
      </div>

      {activeTab === "register" ? (
        <Register activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : (
        <Login activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      <div className="flex items-end">
        <LoginButton
          className={`${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </LoginButton>
        <RegisterButton
          className={`${activeTab === "register" ? "active" : ""}`}
          onClick={() => setActiveTab("register")}
        >
          Register
        </RegisterButton>
      </div>
    </div>
  );
};

export default AuthPage;
