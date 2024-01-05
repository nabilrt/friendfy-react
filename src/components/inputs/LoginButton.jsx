import clsx from "clsx";
const LoginButton = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        " rounded-s-md bg-emerald-400 p-3 font-semibold text-white hover:bg-emerald-600   [&.active]:bg-emerald-600 ",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default LoginButton;
