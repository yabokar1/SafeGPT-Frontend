import SideBar from "./components/SideBar";
import Chat from "./components/Chat.jsx";
export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <Chat />
    </div>
  );
}
