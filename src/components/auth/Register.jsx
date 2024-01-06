import { Fragment, useReducer, useState } from "react";
import AuthInputs from "../inputs/AuthInputs";
import SignUpButton from "../inputs/SignUpButton";
import PasswordInput from "../inputs/PasswordInput";
import {
  registerReducer,
  REGISTER_INITIAL_STATE,
} from "../../reducers/registerReducer";
import { useUserDetails } from "../../context/user-context";
import SignUpValidator from "../../validator/RegisterValidator";

const Register = ({ activeTab, setActiveTab }) => {
  const [state, dispatch] = useReducer(registerReducer, REGISTER_INITIAL_STATE);
  const { signUp, regSuccess } = useUserDetails();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputs = async () => {
    const err = SignUpValidator(state);
    if (
      err.name !== "" ||
      err.email !== "" ||
      err.password !== "" ||
      err.confirmPassword !== ""
    ) {
      setErrors(err);
    } else {
      await signUp(state);
      setActiveTab("login");
    }
  };

  return (
    <Fragment>
      <AuthInputs
        placeholder="Full Name"
        type="text"
        name="name"
        value={state.name}
        onFocus={() => errors.name && setErrors({ ...errors, name: "" })}
        onChange={(e) => {
          dispatch({
            type: "INPUT_CHANGE",
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      />
      {errors.name !== "" && (
        <p className="-mb-6 text-sm text-red-500">{errors.name}</p>
      )}
      <AuthInputs
        placeholder="Email"
        type="text"
        name="email"
        value={state.email}
        onFocus={() => errors.email && setErrors({ ...errors, email: "" })}
        onChange={(e) => {
          dispatch({
            type: "INPUT_CHANGE",
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      />
      {errors.email !== "" && (
        <p className="-mt-6 text-sm text-red-500">{errors.email}</p>
      )}

      <PasswordInput
        placeholder="Password"
        name="password"
        value={state.password}
        onFocus={() =>
          errors.password && setErrors({ ...errors, password: "" })
        }
        onChange={(e) => {
          dispatch({
            type: "INPUT_CHANGE",
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      />
      {errors.password !== "" && (
        <p className="-mt-6 text-sm text-red-500">{errors.password}</p>
      )}
      <PasswordInput
        placeholder="Confirm Password"
        name="confirmPassword"
        value={state.confirmPassword}
        onFocus={() =>
          errors.confirmPassword &&
          setErrors({ ...errors, confirmPassword: "" })
        }
        onChange={(e) => {
          dispatch({
            type: "INPUT_CHANGE",
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      />
      {errors.confirmPassword !== "" && (
        <span className="-mt-6 text-sm text-red-500">
          {errors.confirmPassword}
        </span>
      )}
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
      {regSuccess && <p className="text-sm text-green-500">{regSuccess}</p>}
    </Fragment>
  );
};

export default Register;
