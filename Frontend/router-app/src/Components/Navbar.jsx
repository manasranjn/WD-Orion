import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-8 py-3 bg-gray-500 text-white flex items-center justify-between">
      <h1 className="text-4xl">Logo</h1>

      <ul className="flex gap-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
