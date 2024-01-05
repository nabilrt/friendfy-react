import clsx from "clsx";
import Eye from "../icons/Eye";
import EyeOff from "../icons/EyeOff";
import { forwardRef,useState } from "react";

const PasswordInput = ({ children, className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative z-0 flex w-full space-x-2">
      <input
        ref={ref}
        type={`${showPassword ? "text" : "password"}`}
        className={clsx(
          " w-full  rounded-full border-2 border-[#f5f0ff] p-3 text-center  text-sm outline-none dark:border-[#4f748b] dark:bg-slate-900",
          className,
        )}
        {...props}
      >
        {children}
      </input>
      <span
        className="  absolute  right-3 top-3 m-auto cursor-pointer"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? <Eye /> : <EyeOff />}
      </span>
    </div>
  );
};

export default forwardRef(PasswordInput);
