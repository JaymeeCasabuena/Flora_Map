"use client";
import { useState } from "react";
import "../styles/globals.css";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navBar">
      <div className="flex flex-row justify-between items-center p-5">
        <div className="logo flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 38 48"
            fill="none"
          >
            <path
              d="M25.0008 24C25.0008 27.3137 22.3145 30 19.0008 30C15.6871 30 13.0008 27.3137 13.0008 24C13.0008 20.6863 15.6871 18 19.0008 18C22.3145 18 25.0008 20.6863 25.0008 24Z"
              fill="#FFC505"
            />
            <path
              d="M25.0008 10C25.0008 13.3137 22.3145 16 19.0008 16C15.6871 16 13.0008 13.3137 13.0008 10C13.0008 6.68629 15.6871 4 19.0008 4C22.3145 4 25.0008 6.68629 25.0008 10Z"
              fill="#FFC505"
            />
            <path
              d="M37.125 31C37.125 34.3137 34.4387 37 31.125 37C27.8113 37 25.125 34.3137 25.125 31C25.125 27.6863 27.8113 25 31.125 25C34.4387 25 37.125 27.6863 37.125 31Z"
              fill="#FFC505"
            />
            <path
              d="M37.127 17.0002C37.127 20.3139 34.4407 23.0002 31.127 23.0002C27.8132 23.0002 25.127 20.3139 25.127 17.0002C25.127 13.6865 27.8132 11.0002 31.127 11.0002C34.4407 11.0002 37.127 13.6865 37.127 17.0002Z"
              fill="#FFC505"
            />
            <path
              d="M25.0008 38C25.0008 41.3137 22.3145 44 19.0008 44C15.6871 44 13.0008 41.3137 13.0008 38C13.0008 34.6863 15.6871 32 19.0008 32C22.3145 32 25.0008 34.6863 25.0008 38Z"
              fill="#FFC505"
            />
            <path
              d="M12.877 17C12.877 20.3137 10.1907 23 6.87695 23C3.56324 23 0.876953 20.3137 0.876953 17C0.876953 13.6863 3.56324 11 6.87695 11C10.1907 11 12.877 13.6863 12.877 17Z"
              fill="#FFC505"
            />
            <path
              d="M12.875 30.9997C12.875 34.3134 10.1887 36.9997 6.875 36.9997C3.56129 36.9997 0.875 34.3134 0.875 30.9997C0.875 27.686 3.56129 24.9997 6.875 24.9997C10.1887 24.9997 12.875 27.686 12.875 30.9997Z"
              fill="#FFC505"
            />
          </svg>
          <p>Pollinate</p>
        </div>
        <div className="menu-items flex justify-center gap-20 hidden sm:flex">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hidden sm:flex">
          <Link href="/login">
            <button className="join_btn flex flex-row items-center gap-2 px-8 py-3 rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
              Join us!
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
        {/* Mobile menu button */}
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          {/* Icon when menu is closed */}
          <svg
            className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {/* Icon when menu is open */}
          <svg
            className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
