import React from "react";
import { Link } from "react-router-dom";
const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center md:hidden items-center transform duration-300 ease-in-out bg-yellow-400 divide-y-2"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4 text-yellow-800 " to="/">
        Home
      </Link>
      <Link className="p-4 text-yellow-800" to="/about">
        About
      </Link>
      <Link className="p-4 text-yellow-800" to="/quotes">
        Quotes
      </Link>
      <Link className="p-4 text-yellow-800" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
