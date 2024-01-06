const AttachmentButton = ({ children, ...props }) => {
  return (
    <button
      className="rounded-md bg-[#e6daff] p-3  font-semibold  hover:bg-[#d6c2ff] "
      {...props}
    >
      {children}
    </button>
  );
};

export default AttachmentButton;
