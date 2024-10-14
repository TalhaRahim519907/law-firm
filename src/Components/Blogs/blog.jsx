import React from "react";

function blog() {
  const blogData = [
    {
      src: "/src/assets/Images/blog-01.png",
      date: "March 18,2017",
      blogType: "Bussines",
      blogHeading: "7 Questions to Find Out What Client Really Want",
    },
    {
      src: "/src/assets/Images/blog-02.png",
      date: "March 16,2017",
      blogType: "Web Design",
      blogHeading: "Chosing the Best Photos For Your Website",
    },
    {
      src: "/src/assets/Images/blog-03.png",
      date: "March 12,2017",
      blogType: "Bussines",
      blogHeading: "Important Advantages of Data Driven Design",
    },
  ];
  return (
    <div className="py-32">
      <div>
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold font-sans mb-4">
            Latest From Blog
          </h2>
          <div className="w-24 h-0.5 bg-gray-400 mt-4 mb-10"></div>
        </div>
        {blogData.map((data, index) => (
          <div
            key={index}
            className="h-72 m-8 border-2 rounded-md bg-cover bg-center hover:cursor-pointer"
            style={{
              backgroundImage: `url(${data.src})`,
            }}
          >
            <div className="text bg-white hover:bg-black hover:bg-opacity-50 duration-500 hover:text-white h-full flex flex-col text-center items-center justify-center">
              <p className="font-sans mb-6">
                {data.date} / {data.blogType}
              </p>
              <h1 className="font-bold font-sans text-2xl mb-8">
                {data.blogHeading}
              </h1>
              <a>Continue Reading...</a>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <button className=" mt-8 border-2 border-black font-sans font-semi-bold font-bold duration-500 px-8 py-2 rounded-full hover:text-white hover:bg-stone-900">
            Load More Items
          </button>
        </div>
      </div>
    </div>
  );
}

export default blog;
