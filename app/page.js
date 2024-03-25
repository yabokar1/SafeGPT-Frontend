import Image from "next/image";
import SideBar from "./components/SideBar";
import Prompt from "./components/Prompt";
export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <Prompt />
    </div>
  );
}
