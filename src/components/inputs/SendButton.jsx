const SendButton = ({ children, ...props }) => {
  return (
    <button className="bg-emerald-400 p-3 font-semibold text-white hover:bg-emerald-600 rounded-md">
      {children}
    </button>
  );
};

export default SendButton;
