import "./App.css";
import ChatSidebar from "./components/chat/ChatSidebar";
import Messages from "./components/message/Messages";

function App() {
  return (
    <div className="m-auto flex h-screen w-4/5 p-4">
      <ChatSidebar />
      <Messages />
    </div>
  );
}

export default App;
