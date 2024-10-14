import React from "react";

function client() {
  const clientData = [
    {
      title: "Happy Clients",
      number: "286",
    },
    {
      title: "Project Completed",
      number: "223",
    },
    {
      title: "Design Awards",
      number: "12",
    },
    {
      title: "Coffee & Beer",
      number: "869",
    },
  ];
  return (
    <div className="py-36">
      <div className="clients px-20 grid gap-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {clientData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col text-cente items-center justify-center"
          >
            <h1 className="font-extrabold font-sans text-5xl mb-2 text-neutral-700">
              {data.number}
            </h1>
            <p className="text-1xl text-gray-500">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default client;
