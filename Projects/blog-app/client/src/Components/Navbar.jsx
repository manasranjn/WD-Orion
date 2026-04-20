import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="px-4 md:px-8 lg:px-14 py-3 md:py-4 bg-[#30364F]">
      <ul className="flex justify-between items-center  text-white font-semibold md:text-lg">
        <li>
          <Link
            to="/"
            className="w-30 md:w-36 flex gap-2 justify-center items-center rounded py-2 cursor-pointer bg-green-500"
          >
            Home
            <MdOutlineHome />
          </Link>
        </li>
        <li>
          <Link
            to="/create-blog"
            className="w-30 md:w-36 flex gap-2 justify-center items-center rounded py-2 cursor-pointer bg-green-500"
          >
            Create Blog
            <IoCreateOutline />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
