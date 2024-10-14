import React from "react";
import aboutImage from "../../assets/Images/about-img.png"; // Update the path to your image

const about = () => {
  return (
    <div className="mx-auto px-4 py-32">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold font-sans mb-4">About Me</h2>
          <div className="w-24 h-0.5 bg-gray-400 my-8"></div>
          <p className="mb-3 text-semi-bold text-justify">
            I am a highly skilled MERN stack developer with extensive experience
            in building and maintaining robust web applications. With a strong
            foundation in MongoDB, Express.js, React, and Node.js, etc. My
            passion for coding and problem-solving drives me to continuously
            learn and implement the latest technologies, ensuring that my
            projects are always on the cutting edge.
          </p>
          <p className="mb-8 text-semi-bold text-justify">
            Over the years, I have developed a deep understanding of full-stack
            development, enabling me to seamlessly integrate front-end and
            back-end components. My expertise lies in crafting scalable and
            performant applications that meet both client and user needs. Let's
            build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto border-2 border-black font-semi-bold px-7 py-2 rounded-full hover:text-white hover:bg-stone-900 duration-500">
              Download CV
            </button>
            <button className="w-full sm:w-auto border-2 border-black font-semi-bold px-7 py-2 rounded-full hover:text-white hover:bg-stone-900 duration-500">
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={aboutImage}
            alt="About Me"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
