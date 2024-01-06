import { useEffect, useReducer, useRef, useState } from "react";
import { useTheme } from "../../context/theme-context";
import { useUser } from "../../hooks/useUserDetails";
import AttachmentButton from "../inputs/AttachmentButton";
import EditInputs from "../inputs/EditInputs";
import EditPasswordInput from "../inputs/EditPasswordInput";
import {
  EDIT_USER_INITIAL_STATE,
  editUserReducer,
} from "../../reducers/editUserReducer";
import { useUserDetails } from "../../context/user-context";
const UserEditModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;
  const { theme } = useTheme();
  const { state: user } = useUser();
  const fileRef = useRef(null);
  const { updateAvatar, updateUser } = useUserDetails();
  const [state, dispatch] = useReducer(
    editUserReducer,
    EDIT_USER_INITIAL_STATE,
  );
  const [passwordError, setPasswordError] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);

    await updateAvatar(data);
  };

  const handleFileClick = () => {
    fileRef.current.click();
  };

  const updatingUser = async () => {
    if (state.password === null || state.password === "") {
      const data = {
        name: state.name,
        password: "",
      };
      await updateUser(data);
    } else {
      if (state.password.length < 6) {
        setPasswordError("Password must be atleast 6 characters long");
        return;
      }
      const data = {
        name: state.name,
        password: state.password,
      };
      await updateUser(data);
    }
  };

  useEffect(() => {
    dispatch({
      type: "EDIT_USER",
      payload: {
        name: user.user.name,
        email: user.user.email,
      },
    });
  }, [user]);

  return (
    <div className="fixed inset-0  flex  items-center justify-center rounded-md border  border-[#f5f0ff] bg-white bg-opacity-25 p-4 backdrop-blur-sm dark:border-black dark:bg-slate-900 dark:bg-opacity-25">
      <div className="m-auto flex h-1/2 w-1/2 flex-col space-y-4 rounded-md border-[#f5f0ff] bg-[#f5f0ff] p-4 dark:border-black dark:bg-slate-700">
        <div className="ml-auto rounded-full bg-purple-200 p-1 hover:bg-purple-300 dark:bg-slate-600 dark:hover:bg-slate-500">
          <img
            src={`${theme === "dark" ? "/cross-dark.png" : "/cross.png"}`}
            className="cursor-pointer"
            height="25px"
            width="25px"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {!user.loading && !user.error && (
          <div className="flex justify-around p-4 px-6 ">
            <div className="flex flex-col space-y-3 ">
              <img src={user.user.avatar} height="250px" width="250px"></img>
              <AttachmentButton type="button" onClick={handleFileClick}>
                <img src="/upload.png" className="inline" />
              </AttachmentButton>
              <input
                type="file"
                className="hidden"
                ref={fileRef}
                onChange={handleFileUpload}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex  space-x-3">
                <EditInputs
                  placeholder="Name"
                  value={state.name}
                  name="name"
                  onChange={(e) =>
                    dispatch({
                      type: "INPUT_CHANGE",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    })
                  }
                />
                <EditPasswordInput
                  placeholder="Password"
                  value={state.password}
                  onFocus={() => setPasswordError("")}
                  name="password"
                  onChange={(e) =>
                    dispatch({
                      type: "INPUT_CHANGE",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <EditInputs placeholder="Email" value={state.email} disabled />
              <AttachmentButton type="button" onClick={updatingUser}>
                <img
                  src="/save.png"
                  className="inline"
                  height="25px"
                  width="25px"
                />
              </AttachmentButton>
              {passwordError && (
                <div className="text-sm text-red-500">{passwordError}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserEditModal;
