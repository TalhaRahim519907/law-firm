import React from "react";

const servicesData = [
  {
    imgSrc: "src/assets/Images/services-01.png",
    number: "1",
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales condimentum.",
  },
  {
    imgSrc: "src/assets/Images/services-02.png",
    number: "2",
    title: "Copywriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales condimentum.",
  },
  {
    imgSrc: "src/assets/Images/services-03.png",
    number: "3",
    title: "SEO Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales condimentum.",
  },
  {
    imgSrc: "src/assets/Images/services-04.png",
    number: "4",
    title: "E-Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales condimentum.",
  },
];

function Services() {
  return (
    <div>
      <div className="services h-auto bg-gray-100 py-28">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold font-sans mb-4">Services</h2>
          <div className="w-24 h-0.5 bg-gray-400 mt-4 mb-20"></div>
        </div>
        <div className="cards grid gap-8 px-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {servicesData.map((service, index) => (
            <div key={index} className="card">
              <div className="img relative overflow-hidden">
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="rounded-md hover:cursor-pointer transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <button className="relative z-10 top-[-27px] left-5 text-2xl transform -translate-x-1/2 w-14 h-14 bg-white text-black font-bold rounded-full flex items-center justify-center shadow-lg">
                  {service.number}
                </button>
                <h1 className="font-bold text-2xl font-sans pt-3">
                  {service.title}
                </h1>
                <p className="py-4 text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
