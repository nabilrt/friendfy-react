import { Fragment } from "react";
import AuthInputs from "../inputs/AuthInputs";
import SignUpButton from "../inputs/SignUpButton";
import PasswordInput from "../inputs/PasswordInput";

const Register = ({ activeTab, setActiveTab }) => {
  return (
    <Fragment>
      <AuthInputs placeholder="Full Name" type="text" />
      <AuthInputs placeholder="Email" type="text" />

      <PasswordInput placeholder="Password" />
      <PasswordInput placeholder="Confirm Password" />

      <SignUpButton className="uppercase">Register</SignUpButton>
    </Fragment>
  );
};

export default Register;
