const SendButton = ({ children, ...props }) => {
  return (
    <button
      className="rounded-md bg-emerald-400 p-3 font-semibold text-white hover:bg-emerald-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default SendButton;
