const AttachmentButton = ({ children, ...props }) => {
    return (
      <button className="bg-blue-400 p-3 font-semibold text-white hover:bg-blue-600 rounded-md">
        {children}
      </button>
    );
  };
  
  export default AttachmentButton;
  