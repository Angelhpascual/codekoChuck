import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ isOpen, toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 text-yellow-800 bg-yellow-400 relative shadow-sm font-mono border-b-2 border-yellow-200"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        ChuckNorrisCodeko
      </Link>
      {isOpen ? (
        <div
          className="px-4 cursor-pointer md:hidden "
          onClick={() => toggle()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      ) : (
        <div className="px-4 cursor-pointer md:hidden" onClick={() => toggle()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      )}

      <div className="pr-8 md:block hidden divide-x-2 divide-yellow-200">
        <Link className="p-4 hover:underline" to="/">
          Home
        </Link>
        <Link className="p-4 hover:underline" to="/about">
          About
        </Link>
        <Link className="p-4 hover:underline" to="/quotes">
          Quotes
        </Link>
        <Link className="p-4 hover:underline" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
