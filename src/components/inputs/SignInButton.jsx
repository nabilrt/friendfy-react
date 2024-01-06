import clsx from "clsx";
const SignInButton = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        " m-auto w-3/4 rounded-full border-2 border-emerald-400 p-3 font-semibold hover:bg-slate-200 disabled:bg-slate-200 disabled:cursor-not-allowed dark:border-emerald-400  dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 disabled:dark:bg-slate-700",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default SignInButton;
