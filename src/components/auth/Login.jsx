import { Fragment, useReducer } from "react";
import AuthInputs from "../inputs/AuthInputs";
import PasswordInput from "../inputs/PasswordInput";
import SignInButton from "../inputs/SignInButton";
import { loginReducer, LOGIN_INITIAL_STATE } from "../../reducers/loginReducer";
import { useUserDetails } from "../../context/user-context";
import { useTheme } from "../../context/theme-context";

const Login = ({ activeTab, setActiveTab }) => {
  const [state, dispatch] = useReducer(loginReducer, LOGIN_INITIAL_STATE);
  const { state: data, signIn, getToken, setIsAuth } = useUserDetails();
  const { theme } = useTheme();

  const handleInputs = async () => {
    await signIn(state);
  };
  return (
    <Fragment>
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

      <SignInButton className="uppercase" type="button" onClick={handleInputs}>
        {data.loading && (
          <span>
            <img
              src={`${theme === "dark" ? "/loading-dark.png" : "loading.png"}`}
              className="inline animate-spin pr-2"
              width="35px"
              height="35px"
            />
          </span>
        )}
        Sign In
      </SignInButton>
    </Fragment>
  );
};

export default Login;
