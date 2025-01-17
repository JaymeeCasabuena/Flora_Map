import Image from "next/image";
import Leaf from "../public/leaf.png";
import LeafFacingLeft from "../public/leaf-facing-left.png";
import Phone from "../public/phone.png";
import Map from "../public/queensland.png";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <div className="jumbotron w-2/3 relative mt-52">
        <Image
          className="leaf absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          src={Leaf}
          alt="Leaf"
        />

        <h1 className="text-9xl text-left pl-17 text-4xl font-bold relative z-10">
          ONE TREE
        </h1>

        <h1 className="text-9xl mt-9 text-right pr-17 text-4xl font-bold relative z-10">
          AT A TIME
        </h1>
      </div>
      <div className="flex flex-row mt-40 ms-16">
        <div className="flex flex-row">
          <Image
            className="leaf-small absolute right-2/3"
            src={LeafFacingLeft}
            alt="Leaf"
          />
          <Image className="w-52 me-72 z-10" src={Phone} alt="Phone" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm w-96">
            Pollinate aims to foster a community of environmentally-conscious
            individuals dedicated to making a positive impact on the planet.
          </p>
          <button className="btn w-40 px-8 py-3 mt-5 rounded-full font-semibold text-white">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="header flex flex-row justify-between items-center ms-40 mt-40 me-40">
          <h1 className="text-5xl">
            Together Greening <br /> South East Queensland
          </h1>
          <div className="flex flex-row me-10 mb-5">
            <Image className="w-28 me-10" src={Map} alt="queensland" />
            <div className="line w-1"></div>
            <div className="flex flex-col items-center justify-center ms-10">
              <h1 className="text-4xl">2,000</h1>
              <h1 className="text-lg">Have Joined</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
