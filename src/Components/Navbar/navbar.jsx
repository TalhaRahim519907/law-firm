import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { imageData } from "../Expertise/Imagedata.jsx";
import logo from "../../assets/Images/logo3.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[rgb(12,33,55)] text-white p-1 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1
          className=" text-[rgb(213,179,84)] text-center transition-colors duration-300 font-serif cursor-pointer"
          onClick={() => navigate("/")}
        >
          {/* <span className="text-2xl font-bold">LS LEGAL</span> <br />{" "}
          <span className="font-semibold">CONSULTANTS & ASSOCIATES</span> */}
          <img src={logo} alt="" className="h-20 w-64" />
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li
            className="relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                       before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                     before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px]  hover:before:translate-x-[-50%]"
            onClick={() => navigate("/")}
          >
            Home
          </li>

          <li
            className="relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                       before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                     before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px]  hover:before:translate-x-[-50%]"
            onClick={() => navigate("/about")}
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
            <ul className="absolute left-0 top-full mt-0 w-60 bg-[rgb(12,33,55)] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              <li
                className="px-4 py-2 text-white text-sm font-medium hover:bg-[rgb(213,179,84)] cursor-pointer"
                onClick={() => navigate("/partner")}
              >
                Partners
              </li>
              <li
                className="px-4 py-2 text-white text-sm font-medium hover:bg-[rgb(213,179,84)] cursor-pointer"
                onClick={() => navigate("/associate")}
              >
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
            <ul className="absolute left-0 top-full mt-0 w-60 bg-[rgb(12,33,55)] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              {imageData.map((image) => (
                <li
                  key={image.id}
                  className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer"
                  onClick={() => navigate(`/expertise/${image.id}`)}
                >
                  {image.title}
                </li>
              ))}
            </ul>
          </li>
          <li
            className="group relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                 before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                 before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px] hover:before:translate-x-[-50%]"
          >
            Insight & News
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full mt-0 w-60 bg-[rgb(12,33,55)] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              <li
                className="px-4 py-2 text-white text-sm font-medium hover:bg-[rgb(213,179,84)] cursor-pointer"
                onClick={() => navigate("/news")}
              >
                News & Events
              </li>
              <li
                className="px-4 py-2 text-white text-sm font-medium hover:bg-[rgb(213,179,84)] cursor-pointer"
                onClick={() => navigate("/publication")}
              >
                Publications
              </li>
            </ul>
          </li>
          <li
            className="relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                       before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                     before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px]  hover:before:translate-x-[-50%]"
            onClick={() => navigate("/career")}
          >
            Careers
          </li>
          <li
            className="relative hover:text-[rgb(213,179,84)] font-bold font-serif transition-colors duration-300 cursor-pointer 
                       before:content-[''] before:absolute before:left-1/2 before:bottom-[-3px] before:w-0 before:h-[3px] 
                     before:bg-[rgb(213,179,84)] before:transition-all before:duration-300 hover:before:w-[20px]  hover:before:translate-x-[-50%]"
            onClick={() => navigate("/contact")}
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
            <button onClick={toggleMenu}>
              <X size={28} />
            </button>
          </div>

          {/* Sidebar Links */}
          <ul className="p-5 space-y-4">
            <li
              className="hover:text-[rgb(213,179,84)] cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-[rgb(213,179,84)] cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li className="cursor-pointer">
              <div
                className="flex justify-between items-center hover:text-[rgb(213,179,84)]"
                onClick={() => toggleDropdown("lawyers")}
              >
                <span>Lawyers</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openDropdown === "lawyers" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openDropdown === "lawyers"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-4 mt-1 space-y-1">
                  <li
                    className="cursor-pointer hover:text-[rgb(213,179,84)]"
                    onClick={() => navigate("/partner")}
                  >
                    Partners
                  </li>
                  <li
                    className="cursor-pointer hover:text-[rgb(213,179,84)]"
                    onClick={() => navigate("/associate")}
                  >
                    Associates
                  </li>
                </ul>
              </div>
            </li>

            {/* Expertise Dropdown */}
            <li className="cursor-pointer">
              <div
                className="flex justify-between items-center hover:text-[rgb(213,179,84)]"
                onClick={() => toggleDropdown("expertise")}
              >
                <span onClick={() => navigate("/Edetail")}>Expertise</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openDropdown === "expertise" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdown === "expertise"
                    ? "max-h-80 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-4 mt-1 space-y-1">
                  {imageData.map((image) => (
                    <li
                      key={image.id}
                      className="cursor-pointer hover:text-[rgb(213,179,84)]"
                      onClick={() => navigate(`/expertise/${image.id}`)}
                    >
                      {image.title}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Insight & News Dropdown */}
            <li className="cursor-pointer">
              <div
                className="flex justify-between items-center hover:text-[rgb(213,179,84)]"
                onClick={() => toggleDropdown("insight")}
              >
                <span>Insight & News</span>
                <FaChevronDown
                  className={`transition-transform duration-300 hover:text-[rgb(213,179,84)] ${
                    openDropdown === "insight" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openDropdown === "insight"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-4 mt-1 space-y-1">
                  <li
                    className="cursor-pointer hover:text-[rgb(213,179,84)]"
                    onClick={() => navigate("/news")}
                  >
                    News & Events
                  </li>
                  <li
                    className="cursor-pointer hover:text-[rgb(213,179,84)]"
                    onClick={() => navigate("/publication")}
                  >
                    Publications
                  </li>
                </ul>
              </div>
            </li>

            <li
              className="hover:text-[rgb(213,179,84)] cursor-pointer"
              onClick={() => navigate("/career")}
            >
              Careers
            </li>
            <li
              className="hover:text-[rgb(213,179,84)] cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
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
