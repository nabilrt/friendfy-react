const ThemeSwitcher = ({ theme, setTheme }) => {
  return (
    <div
      className={`fixed bottom-10 right-10 z-30 p-3 ${
        theme === "dark" ? "bg-slate-900" : "bg-slate-200"
      } cursor-pointer rounded-full transition-colors duration-300 ease-in-out hover:bg-slate-300 dark:hover:bg-slate-800`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <img
        src={`${theme === "dark" ? "/light.png" : "/dark.png"}`}
        height="24px"
        width="24px"
      />
    </div>
  );
};

export default ThemeSwitcher;
