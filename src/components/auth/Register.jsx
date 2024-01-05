import { Fragment, useReducer } from "react";
import AuthInputs from "../inputs/AuthInputs";
import SignUpButton from "../inputs/SignUpButton";
import PasswordInput from "../inputs/PasswordInput";
import {
  registerReducer,
  REGISTER_INITIAL_STATE,
} from "../../reducers/registerReducer";
import { useUserDetails } from "../../context/user-context";

const Register = ({ activeTab, setActiveTab }) => {
  const [state, dispatch] = useReducer(registerReducer, REGISTER_INITIAL_STATE);
  const { signUp } = useUserDetails();

  const handleInputs = () => {
    if (state.password === state.confirmPassword) {
      signUp(state);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <Fragment>
      <AuthInputs
        placeholder="Full Name"
        type="text"
        name="name"
        value={state.name}
        onChange={(e) => {
          dispatch({
            type: "INPUT_CHANGE",
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      />
      <AuthInputs
        placeholder="Email"
        type="text"
        name="email"
        value={state.email}
        onChange={(e) => {
          dispatch({
            type: "INPUT_CHANGE",
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      />

      <PasswordInput
        placeholder="Password"
        name="password"
        value={state.password}
        onChange={(e) => {
          dispatch({
            type: "INPUT_CHANGE",
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      />
      <PasswordInput
        placeholder="Confirm Password"
        name="confirmPassword"
        value={state.confirmPassword}
        onChange={(e) => {
          dispatch({
            type: "INPUT_CHANGE",
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      />
      <AuthInputs
        type="file"
        name="profilePicture"
        onChange={(e) => {
          dispatch({
            type: "PICTURE_CHANGE",
            payload: { name: e.target.name, files: e.target.files },
          });
        }}
      />

      <SignUpButton className="uppercase" type="button" onClick={handleInputs}>
        Register
      </SignUpButton>
    </Fragment>
  );
};

export default Register;
