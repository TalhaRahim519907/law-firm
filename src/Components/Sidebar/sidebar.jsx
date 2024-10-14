import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faVimeoV,
} from "@fortawesome/free-brands-svg-icons";
import aboutImage from "../../assets/Images/avatar-01.png"; // Update the path to your image

const Sidebar = ({ isOpen, activeSection, onScrollToSection }) => {
  const handleClick = (section) => {
    onScrollToSection(section);
  };

  const getLinkClass = (section) =>
    `mb-2 ${activeSection === section ? "text-white" : "text-gray-400"}`;

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-black p-4 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0`}
    >
      <div className="flex flex-col items-center mt-6">
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 mb-6">
          <img
            src={aboutImage}
            alt="About Me"
            className="w-full h-auto rounded-full shadow-lg"
          />
        </div>
        <div className="flex justify-center items-center text-center">
          <h2 className="text-lg font-bold mb-3">Naveed Ahmad</h2>
        </div>
        <div className="flex space-x-5 p-4 mb-10 text-white justify-center">
          <a
            href="https://www.facebook.com"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} size="1x" />
          </a>
          <a
            href="https://www.twitter.com"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a
            href="https://www.instagram.com"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
          <a
            href="https://www.linkedin.com"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
          </a>
          <a
            href="https://www.vimeo.com"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faVimeoV} size="1x" />
          </a>
        </div>
      </div>
      <div>
        <ul className="flex flex-col justify-center items-center text-center cursor-pointer">
          <li
            className={getLinkClass("Home")}
            onClick={() => handleClick("Home")}
          >
            Home
          </li>
          <li
            className={getLinkClass("About")}
            onClick={() => handleClick("About")}
          >
            About
          </li>
          <li
            className={getLinkClass("Services")}
            onClick={() => handleClick("Services")}
          >
            Services
          </li>
          <li
            className={getLinkClass("Portfolio")}
            onClick={() => handleClick("Portfolio")}
          >
            Portfolio
          </li>
          <li
            className={getLinkClass("Blogs")}
            onClick={() => handleClick("Blogs")}
          >
            Blog
          </li>
          <li
            className={getLinkClass("MyShop")}
            onClick={() => handleClick("MyShop")}
          >
            MyShop
          </li>
          <li
            className={getLinkClass("Contact")}
            onClick={() => handleClick("Contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
