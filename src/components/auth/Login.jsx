import { Fragment } from "react";
import AuthInputs from "../inputs/AuthInputs";
import LoginButton from "../inputs/LoginButton";
import RegisterButton from "../inputs/RegisterButton";
import PasswordInput from "../inputs/PasswordInput";
import SignInButton from "../inputs/SignInButton";

const Login = ({ activeTab, setActiveTab }) => {
  return (
    <Fragment>
      <AuthInputs placeholder="Email" type="text" />

      <PasswordInput placeholder="Password" />

      <SignInButton className="uppercase">Sign In</SignInButton>

    
    </Fragment>
  );
};

export default Login;
