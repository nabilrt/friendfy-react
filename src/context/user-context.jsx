import { createContext, useContext,useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const users = [
    {
      id: 1,
      name: "Mahim",
      lastMessage: "Hello",
      avatar: "/avatar.png",
    },
    {
      id: 2,
      name: "Nabil",
      lastMessage: "Hi",
      avatar: "/avatar.png",
    },
    {
      id: 3,
      name: "Arpita",
      lastMessage: "Yess",
      avatar: "/avatar.png",
    },
    {
      id: 4,
      name: "Sazin",
      lastMessage: "No",
      avatar: "/avatar.png",
    },
  ];
  const [selected, setSelected] = useState(users[0]);
  const messages = [
    {
      id: 1,
      senderId: 1,
      receiverId: 2,
      message: "Hello",
    },
    {
      id: 2,
      senderId: 2,
      receiverId: 1,
      message: "Hi",
    },
    {
      id: 3,
      senderId: 2,
      receiverId: 1,
      message: "Yes",
    },
    {
      id: 4,
      senderId: 2,
      receiverId: 1,
      message: "Yes",
    },
  ];

  return (
    <UserContext.Provider value={{ users, selected, setSelected, messages }}>
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
