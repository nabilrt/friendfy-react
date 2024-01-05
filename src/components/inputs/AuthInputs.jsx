import { forwardRef } from "react";
import clsx from "clsx";
const AuthInputs = ({ children, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(
        " w-full  rounded-full border-2 border-[#f5f0ff] p-3 text-center  text-sm outline-none dark:border-[#4f748b]  dark:bg-slate-900 ",
        className,
      )}
      {...props}
    >
      {children}
    </input>
  );
};

export default forwardRef(AuthInputs);
