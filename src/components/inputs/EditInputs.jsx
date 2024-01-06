import { forwardRef } from "react";
import clsx from "clsx";
const EditInputs = ({ children, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(
        " w-full  rounded-md border-2 border-[#ab99cf] p-3 text-center  disabled:bg-[#D7D3DF] text-sm outline-none disabled:cursor-not-allowed disabled:dark:bg-slate-800 dark:border-[#4f748b] dark:bg-slate-900",
        className,
      )}
      {...props}
    >
      {children}
    </input>
  );
};

export default forwardRef(EditInputs);
