import LoginButton from "../inputs/LoginButton";
import RegisterButton from "../inputs/RegisterButton";
import { useState } from "react";
import { useTheme } from "../../context/theme-context";
import Login from "./Login";
import Register from "./Register";
const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const { theme } = useTheme();

  return (
    <div className="m-auto flex  flex-col  items-center justify-center space-y-3 rounded-md bg-slate-50 p-8 px-32 shadow-lg dark:bg-slate-900">
      <div className="flex flex-col items-center space-y-5 ">
        <img
          src={`${theme === "dark" ? "/dark-logo.png" : "/light-logo.png"}`}
          height="100px"
          width="100px"
        ></img>
        <h1 className="text-3xl font-semibold">
          Welcome {activeTab === "login" ? "back friend! 😉" : "to Friendify"}
        </h1>
        <p className="text-base">
          Please{" "}
          {activeTab === "login"
            ? "login to continue"
            : "fill up with verified details"}
        </p>
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
