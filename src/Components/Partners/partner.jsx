import React from "react";

function partner() {
  const partnerData = [
    {
      src: "src/assets/Images/ic-partner-01.png",
    },
    {
      src: "src/assets/Images/ic-partner-02.png",
    },
    {
      src: "src/assets/Images/ic-partner-03.png",
    },
    {
      src: "src/assets/Images/ic-partner-04.png",
    },
  ];
  return (
    <div className="py-36">
      <div className="clients px-20 grid gap-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {partnerData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col text-cente items-center justify-center"
          >
            <img src={data.src} alt="" className="cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default partner;
