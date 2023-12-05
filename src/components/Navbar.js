import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import image from "../img/flower-and-flavor-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && nav) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="relative bg-custom-peach flex items-center justify-between mx-auto max-w-[1240px] px-4 py-2">
      <img
        src={image}
        alt="Flowers & Flavor Logo"
        className="z-30 h-28 md:h-40"
      />

      <ul className="hidden md:flex justify-center flex-1">
        <li className="p-4 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer">
          Home
        </li>
        <li className="p-4 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer">
          About
        </li>
        <li className="p-4 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer">
          Contact
        </li>
      </ul>

      <div className="flex items-center z-40">
        <input
          type="text"
          placeholder="Search..."
          className=" p-2 border-2 border-custom-darker-brown rounded-md"
        />
        <div className="md:hidden ml-4" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <ul
        className={`absolute md:hidden bg-custom-peach flex flex-col items-center w-full left-0 top-full transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out z-20`}
      >
        <li className="p-4 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer">
          Home
        </li>
        <li className="p-4 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer">
          About
        </li>
        <li className="p-4 hover:bg-custom-darker-brown hover:text-white transition duration-300 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
