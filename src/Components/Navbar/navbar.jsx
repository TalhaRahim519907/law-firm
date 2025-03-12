import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import logo from "../../assets/Images/LS2.png";

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
    <nav className="bg-[rgb(12,33,55)] text-white p-5 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl text-[rgb(213,179,84)] transition-colors duration-300 font-bold font-serif cursor-pointer">
          LS LEGAL CONSULTANTS
        </h1>
        {/* <div className="cursor-pointer w-52" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div> */}

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
            onClick={() => navigate("/Edetail")}
          >
            Expertise
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full mt-0 w-60 bg-[rgb(12,33,55)] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Civil Litigation
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Criminal Litigation
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Family Laws
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Consumer Laws
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Banking & Finance
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Income & Sales Tax
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Trade Mark Registration
              </li>
              <li className="px-4 py-2 text-white text-sm font-normal hover:bg-[rgb(213,179,84)] cursor-pointer">
                Company Registration (SECP)
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
                  <li className="cursor-pointer hover:text-[rgb(213,179,84)]">
                    Civil Litigation
                  </li>
                  <li className="cursor-pointer hover:text-[rgb(213,179,84)]">
                    Criminal Litigation
                  </li>
                  <li className="cursor-pointer hover:text-[rgb(213,179,84)]">
                    Family Laws
                  </li>
                  <li className="cursor-pointer hover:text-[rgb(213,179,84)]">
                    Consumers Laws
                  </li>
                  <li className="cursor-pointer hover:text-[rgb(213,179,84)]">
                    Banking & Finance
                  </li>
                  <li className="cursor-pointer hover:text-[rgb(213,179,84)]">
                    Income & Sales Tax
                  </li>
                  <li className="cursor-pointer hover:text-[rgb(213,179,84)]">
                    Trade Mark Registration
                  </li>
                  <li className="cursor-pointer hover:text-[rgb(213,179,84)]">
                    Company Registration(SECP)
                  </li>
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
