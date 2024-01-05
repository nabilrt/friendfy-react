import { createContext, useContext,useState } from "react";

export const ThemeProvider = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeProvider.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProvider);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
