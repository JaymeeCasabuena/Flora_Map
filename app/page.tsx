import Image from "next/image";
import Leaf from "../public/leaf.png";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <div className="w-2/3 relative">
        <Image
          className="leaf absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          src={Leaf}
          alt="Leaf"
        />

        <h1 className="jumbotron text-left pl-16 text-4xl font-bold relative z-10">
          ONE TREE
        </h1>

        <h1 className="jumbotron mt-9 text-right pr-16 text-4xl font-bold relative z-10">
          AT A TIME
        </h1>
      </div>
    </div>
  );
}
