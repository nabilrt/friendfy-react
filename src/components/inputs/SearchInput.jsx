import { forwardRef } from "react";
const SearchInput = ({ children, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className=" rounded-md p-3 outline-none border-2 border-[#f5f0ff] w-full dark:text-black"
      {...props}
    >
      {children}
    </input>
  );
};

export default forwardRef(SearchInput);
