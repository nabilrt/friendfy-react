import { createContext, useContext, useReducer, useState } from "react";
import { API_INITIAL_STATE, apiReducer } from "../reducers/apiReducer";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [selected, setSelected] = useState(null);

  const [isAuth, setIsAuth] = useState(false);

  const [state, dispatch] = useReducer(apiReducer, API_INITIAL_STATE);

  const [isMessageUpdated, setIsMessageUpdated] = useState(false);

  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const [authError, setAuthError] = useState("");

  const [regSuccess, setRegSuccess] = useState("");

  const signUp = async (data) => {
    dispatch({
      type: "API_REQUEST",
    });
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("file", data.profilePicture);

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "API_SUCCESS",
          payload: data,
        });
        setRegSuccess(data.message);
        setTimeout(() => {
          setRegSuccess("");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({
          type: "API_ERROR",
          payload: error,
        });
      });
  };

  const signIn = async (data) => {
    dispatch({
      type: "API_REQUEST",
    });

    const url = `${import.meta.env.VITE_BACKEND_URL}/user/login`;

    axios
      .post(url, data)
      .then(({ data }) => {
        dispatch({
          type: "API_SUCCESS",
          payload: data,
        });
        saveToken(data.token);
        setIsAuth(true);
      })
      .catch((error) => {
        dispatch({
          type: "API_ERROR",
          payload: error,
        });
        setAuthError(error.response.data.message);
      });
  };

  const saveToken = (token) => {
    const obj = {
      token: token,
    };
    localStorage.setItem("user", JSON.stringify(obj));
  };

  const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setSelected(null);
    setIsAuth(false);
  };

  const sendMessage = (id, data) => {
    const { token } = getToken();
    const url = `${
      import.meta.env.VITE_BACKEND_URL
    }/conversation/send-message/${id}`;
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setIsMessageUpdated(!isMessageUpdated);
      })
      .catch((error) => {});
  };

  const sendAttachment = (id, data) => {
    const { token } = getToken();
    const url = `${import.meta.env.VITE_BACKEND_URL}/conversation/upload/${id}`;
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setIsMessageUpdated(!isMessageUpdated);
      })
      .catch((error) => {});
  };

  const checkConversation = (user) => {
    const { token } = getToken();
    const url = `${import.meta.env.VITE_BACKEND_URL}/conversation/participant/${
      user._id
    }`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        if (data.conversations.length === 0) {
          createConversation({
            participant1: user._id,
          });
        } else {
          setSelected(data.conversations[0]);
          setIsMessageUpdated(!isMessageUpdated);
        }
      })
      .catch((error) => {});
  };

  const createConversation = (data) => {
    const { token } = getToken();
    const url = `${import.meta.env.VITE_BACKEND_URL}/conversation/create`;
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setSelected(data.conversation[0]);
        setIsMessageUpdated(!isMessageUpdated);
      })
      .catch((error) => {});
  };

  const updateAvatar = (data) => {
    const { token } = getToken();
    const url = `${import.meta.env.VITE_BACKEND_URL}/user/picture`;
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setIsProfileUpdated(!isProfileUpdated);
      })
      .catch((error) => {});
  };

  const updateUser = (data) => {
    const { token } = getToken();
    const url = `${import.meta.env.VITE_BACKEND_URL}/user/update`;
    axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setIsProfileUpdated(!isProfileUpdated);
      })
      .catch((error) => {});
  };

  return (
    <UserContext.Provider
      value={{
        selected,
        setSelected,
        signUp,
        signIn,
        saveToken,
        getToken,
        signOut,
        state,
        isAuth,
        setIsAuth,
        sendMessage,
        isMessageUpdated,
        setIsMessageUpdated,
        checkConversation,
        isProfileUpdated,
        setIsProfileUpdated,
        sendAttachment,
        updateAvatar,
        updateUser,
        authError,
        setAuthError,
        regSuccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserDetails = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUserDetails must be used within UserProvider");
  }
  return context;
};
