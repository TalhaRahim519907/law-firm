import React from "react";

function portfolio() {
  const imageData = [
    {
      src: "../../assets/Images/featured-01.png",
      title: "Project Title",
      description: "Print Design",
    },
    {
      src: "../../assets/Images/featured-02.png",
      title: "Project Title",
      description: "Brand Design",
    },
    {
      src: "../../assets/Images/featured-03.png",
      title: "Project Title",
      description: "Art Design",
    },
    {
      src: "../../assets/Images/featured-04.png",
      title: "Project Title",
      description: "Brand Design",
    },
    {
      src: "../../assets/Images/featured-05.png",
      title: "Project Title",
      description: "Art Design",
    },
    {
      src: "../../assets/Images/featured-06.png",
      title: "Project Title",
      description: "Web Design",
    },
    {
      src: "../../assets/Images/featured-07.png",
      title: "Project Title",
      description: "Logo Design",
    },
    {
      src: "../../assets/Images/featured-08.png",
      title: "Project Title",
      description: "Art Design",
    },
  ];
  return (
    <div>
      <div className="h-auto bg-zinc-600 py-28">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className=" text-white text-5xl font-bold font-sans mb-4">
            Featured Work
          </h2>
          <div className="w-24 h-0.5 bg-gray-400 mt-4 mb-20"></div>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 cursor-pointer">
            {imageData.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={`/src/assets/images/${image.src}`}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <h2 className="text-white text-lg font-bold mb-2">
                    {image.title}
                  </h2>
                  <p className="text-white">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
