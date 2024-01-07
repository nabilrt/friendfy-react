const DeleteButton = ({ children, ...props }) => {
    return (
      <button
        className="rounded-md bg-red-600 p-3  font-semibold  hover:bg-red-800 text-white"
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default DeleteButton;
  