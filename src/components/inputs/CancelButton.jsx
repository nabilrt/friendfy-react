const CancelButton = ({ children, ...props }) => {
    return (
      <button
        className="rounded-md bg-emerald-400 p-3  font-semibold  hover:bg-emerald-600 text-white"
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default CancelButton;
  