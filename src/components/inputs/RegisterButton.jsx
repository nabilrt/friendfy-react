import clsx from "clsx";
const RegisterButton = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        " rounded-e-md bg-cyan-500 p-3 font-semibold text-white hover:bg-cyan-600  [&.active]:bg-cyan-600",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default RegisterButton;
