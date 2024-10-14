import React from "react";

const MainContent = () => {
  return (
    <div
      className="flex-1 bg-cover bg-center h-screen home"
      style={{ backgroundImage: "url('/src/assets/Images/intro.png')" }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-7xl font-bold font-sans mb-6">Naveed Ahmad</h1>
        <p className="mb-8 text-2xl font-sans">
          Mern Stack Developer - Programmer - Traveller
        </p>
        <button className="border-2 border-white font-semi-bold px-10 py-2 rounded-full hover:bg-gray-100 hover:text-black hover:font-bold">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default MainContent;
