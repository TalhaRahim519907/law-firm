import React, { useState } from "react";

function review() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      text: "We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pretium nec, fermentum viverra dui.",
      reviewer: "Marie Simmons ˗ Australia",
    },
    {
      text: "I am extremely satisfied with the service provided.eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      reviewer: "Marie Simmons ˗ Australia",
    },
    {
      text: "Highly recommend to everyone. Great experience! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, recusandae.",
      reviewer: "Marie Simmons ˗ Australia",
    },
  ];
  const handleDotClick = (index) => {
    setCurrentReview(index);
  };
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/Images/bg-testimonials.png')",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center h-full bg-black bg-opacity-50">
          <h2 className=" text-white text-5xl font-bold font-sans mb-4">
            Clients Say About Me
          </h2>
          <div className="w-24 h-0.5 bg-gray-400  mt-8 mb-10"></div>
          <div className="p-4">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-lg mb-2 text-white  lg:w-2/3 md:w-2/3 sm:w-2/3">
                {reviews[currentReview].text}
              </p>
              <p className="font-bold text-white my-4">
                {reviews[currentReview].reviewer}
              </p>
              <div className="flex justify-center space-x-2 mt-4">
                <span
                  onClick={() => handleDotClick(0)}
                  className={`h-3 w-3 rounded-full cursor-pointer ${
                    currentReview === 0 ? "bg-white" : "border-2"
                  }`}
                ></span>
                <span
                  onClick={() => handleDotClick(1)}
                  className={`h-3 w-3 rounded-full cursor-pointer ${
                    currentReview === 1 ? "bg-white" : "border-2"
                  }`}
                ></span>
                <span
                  onClick={() => handleDotClick(2)}
                  className={`h-3 w-3 rounded-full cursor-pointer ${
                    currentReview === 2 ? "bg-white" : "border-2"
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default review;
