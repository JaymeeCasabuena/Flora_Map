import Image from "next/image";
import Leaf from "../public/leaf.png";
import LeafFacingLeft from "../public/leaf-facing-left.png";
import Phone from "../public/phone.png";
import Map from "../public/queensland.png";
import Work from "../public/work.jpg";
import "../styles/home.css";
import Navbar from "@/components/navbars/nav-home";
import Link from "next/link";

export const metadata = { page: "/" };

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen relative">
        <div className="jumbotron md:w-2/3 relative mt-52" id="home">
          <Image
            className="leaf absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            src={Leaf}
            alt="Leaf"
          />

          <h1 className="text-7xl md:text-9xl md:pl-17 ms-5 md:ms-0 font-bold relative z-10">
            ONE TREE
          </h1>

          <h1 className="text-7xl md:text-9xl mt-9 ms-5 md:ms-0 text-right md:pr-17 font-bold relative z-10">
            AT A TIME
          </h1>
        </div>
        <div className="flex flex-col-reverse md:flex-row mt-40 mb-20 ms-16">
          <div className="flex flex-row justify-center">
            <Image
              className="leaf-small absolute right-1/2 md:right-3/4 2xl:right-2/3"
              src={LeafFacingLeft}
              alt="Leaf"
            />
            <Image className="w-52 md:me-72 z-10" src={Phone} alt="Phone" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm md:w-96 me-8 md:me-0">
              Pollinate aims to foster a community of environmentally-conscious
              individuals dedicated to making a positive impact on the planet.
            </p>
            <Link href="/auth">
              <button className="btn w-40 px-8 py-3 mt-5 mb-32 md:mb-0 rounded-full font-semibold text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div
          className="w-full bg-white flex flex-col justify-center items-center"
          id="about"
        >
          <div className="header md:w-1/2 flex flex-col md:flex-row justify-between items-center mt-40">
            <h1 className="text-4xl md:text-5xl mx-10 md:mx-0 mb-10 md:md-0 font-bold">
              Together Greening <br /> South East Queensland
            </h1>
            <div className="flex flex-row items-center w-42 me-10 mb-5 md:ms-16">
              <Image className="w-28 me-10" src={Map} alt="queensland" />
              <div className="line"></div>
              <div className="flex flex-col items-center w-13 justify-center ms-10">
                <h1 className="text-4xl">2,000</h1>
                <h1 className="text-lg">Have Joined</h1>
              </div>
            </div>
          </div>
          <div className="gallery flex flex-wrap justify-center mt-40 mb-52 gap-24">
            <div className="card plant flex">
              <div className="bottom">
                <h1 className="text-5xl">Plant Trees</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem sapiente id vitae atque sunt consequuntur ex
                  illum recusandae officia praesentium!
                </p>
              </div>
            </div>
            <div className="card save">
              <div className="bottom">
                <h1 className="text-5xl">Save it on map</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem sapiente id vitae atque sunt consequuntur ex
                  illum recusandae officia praesentium!
                </p>
              </div>
            </div>
            <div className="card share">
              <div className="bottom">
                <h1 className="text-5xl">Share your experience</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem sapiente id vitae atque sunt consequuntur ex
                  illum recusandae officia praesentium!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact flex flex-row w-full h-screen" id="contact">
          {/* Form Section */}
          <div className="flex flex-col md:w-1/2 text-white justify-center px-8 py-12">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              {"Let's work together"}
            </h2>
            <p className="text-sm mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem sapiente id vitae atque sunt consequuntur ex illum
              recusandae officia praesentium!
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* First Name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-medium"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-medium"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm/6 font-medium">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm/6 font-medium">
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* How can we help you? */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-medium"
                >
                  How can we help you?
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-6">
                <button
                  type="submit"
                  className="w-24 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-1/2 hidden md:block">
            <Image
              className="w-full h-full object-cover"
              src={Work}
              alt="Work Together"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
