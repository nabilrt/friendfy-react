import clsx from "clsx";
const SignUpButton = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        " m-auto w-3/4 rounded-full border-2 border-blue-400 p-3 font-semibold hover:bg-slate-200 dark:border-blue-400 dark:bg-slate-900  dark:text-white dark:hover:bg-slate-800",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default SignUpButton;
