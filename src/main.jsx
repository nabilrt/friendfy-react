import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./context/user-context.jsx";
import { ThemeContextProvider } from "./context/theme-context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
