import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[rgb(12,33,55)] text-white p-5 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl text-[rgb(213,179,84)] transition-colors duration-300 font-bold font-serif cursor-pointer">
          LS LEGAL CONSULTANTS
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li
            className="relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                       before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                     before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px]  hover:before:translate-x-[-50%]"
          >
            Home
          </li>

          <li
            className="relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                       before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                     before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px]  hover:before:translate-x-[-50%]"
          >
            About
          </li>
          <li
            className="group relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                 before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                 before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px] hover:before:translate-x-[-50%]"
          >
            Lawyers
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full mt-3 w-60 bg-[rgb(12,33,55)] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              <li className="px-4 py-2 text-white text-sm font-medium hover:bg-[rgb(213,179,84)] cursor-pointer">
                Partners
              </li>
              <li className="px-4 py-2 text-white text-sm font-medium hover:bg-[rgb(213,179,84)] cursor-pointer">
                Associates
              </li>
            </ul>
          </li>
          <li
            className="group relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                 before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                 before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px] hover:before:translate-x-[-50%]"
          >
            Expertise
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full mt-3 w-60 bg-[rgb(12,33,55)] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Banking and Finance
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Corporate And Comercial
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Capital Markets
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Dispute Resolutions
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Real Estate Development
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Tax
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Legislative Drafting
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Projects And Energy
              </li>
            </ul>
          </li>
          <li
            className="group relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                 before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                 before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px] hover:before:translate-x-[-50%]"
          >
            Insight & News
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full mt-3 w-60 bg-[rgb(12,33,55)] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              <li className="px-4 py-2 text-white text-sm font-medium hover:bg-[rgb(213,179,84)] cursor-pointer">
                News & Events
              </li>
              <li className="px-4 py-2 text-white text-sm font-medium hover:bg-[rgb(213,179,84)] cursor-pointer">
                Publications
              </li>
            </ul>
          </li>
          <li
            className="relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                       before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                     before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px]  hover:before:translate-x-[-50%]"
          >
            Careers
          </li>
          <li
            className="relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                       before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                     before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px]  hover:before:translate-x-[-50%]"
          >
            Contact
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu size={28} />
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-5 flex justify-between items-center border-b border-gray-700">
            {/* <h2 className="text-lg font-semibold">Menu</h2> */}
            <button onClick={toggleMenu}>
              <X size={28} />
            </button>
          </div>

          {/* Sidebar Links */}
          <ul className="p-5 space-y-4">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Lawyers</li>
            <li className="hover:text-gray-400 cursor-pointer">Expertise</li>
            <li className="hover:text-gray-400 cursor-pointer">
              Insight & News
            </li>
            <li className="hover:text-gray-400 cursor-pointer">Careers</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Overlay to close menu when clicking outside */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
