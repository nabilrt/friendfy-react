const ChatTopBar = ({ isVisible, setIsVisible }) => {
  return (
    <div className="flex items-center">
      <h1 className="mb-5 text-xl font-semibold ">Chat List</h1>
      <img
        src="/add.png"
        className="mb-4 ml-auto cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      />
    </div>
  );
};

export default ChatTopBar;
