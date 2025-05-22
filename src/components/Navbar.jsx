import React, { useState } from "react";
import pic from "/devil.jpg"; // your profile image
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Portfolio", path: "/portfolio" },
    { id: 4, text: "Experience", path: "/experience" },
    { id: 5, text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed left-0 top-0 right-0 z-50
                            bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-md backdrop-blur-md"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex space-x-3 items-center">
            <img
              src={pic}
              className="w-12 h-12 rounded-full border-2 border-teal-500 shadow-md"
              alt="Akash Profile"
            />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer select-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 text-2xl font-bold">
                  AK
                </span>
                ASH
              </h1>
              <p className="text-sm text-gray-300">Software Engineer</p>
            </div>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex space-x-10 text-sm font-medium">
            {navItems.map(({ id, text, path }) => (
              <li
                key={id}
                className={`cursor-pointer hover:text-teal-400 hover:scale-105 transition duration-200 ${
                  location.pathname === path ? "text-teal-400 font-semibold" : ""
                }`}
              >
                <Link to={path} onClick={() => setMenu(false)}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden cursor-pointer text-white select-none"
          >
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="md:hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-lg">
            <ul className="flex flex-col items-center justify-center space-y-4 py-6 text-lg font-semibold text-white">
              {navItems.map(({ id, text, path }) => (
                <li
                  key={id}
                  className={`cursor-pointer hover:text-teal-400 transition duration-200 ${
                    location.pathname === path ? "text-teal-400" : ""
                  }`}
                >
                  <Link
                    to={path}
                    onClick={() => setMenu(false)}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
