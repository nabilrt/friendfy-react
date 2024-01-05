import { forwardRef } from "react";
const MessageInput = ({ children, ...props }, ref) => {
  return (
    <input ref={ref} type="text" className="flex-1 p-3 outline-none rounded-md dark:text-black" {...props}>
      {children}
    </input>
  );
};

export default forwardRef(MessageInput);
