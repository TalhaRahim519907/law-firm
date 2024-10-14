import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="md:hidden fixed z-50 top-0 left-0 right-0 bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold">Naveed Ahmad</div>
      <button onClick={toggleSidebar} className="text-white focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
