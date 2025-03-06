import image1 from "../../assets/Images/E1.jpg";
import image2 from "../../assets/Images/E2.jpg";
import image3 from "../../assets/Images/E3.jpg";
import image4 from "../../assets/Images/E4.jpg";
import image5 from "../../assets/Images/E5.jpg";
import image6 from "../../assets/Images/E6.jpg";
import image7 from "../../assets/Images/E7.jpg";
import image8 from "../../assets/Images/E8.jpg";

function expertise() {
  const imageData = [
    {
      src: image1,
      title: "Civil Litigation",
      description: "Read More",
    },
    {
      src: image2,
      title: "Criminal Litigation",
      description: "Read More",
    },
    {
      src: image3,
      title: "Family Laws",
      description: "Read More",
    },
    {
      src: image4,
      title: "Consumer Laws",
      description: "Read More",
    },
    {
      src: image5,
      title: "Banking & Finance",
      description: "Read More",
    },
    {
      src: image6,
      title: "Income & Sales Tax",
      description: "Read More",
    },
    {
      src: image7,
      title: "Trade Mark Registration",
      description: "Read More",
    },
    {
      src: image8,
      title: "Company Registration (SECP)e",
      description: "Read More",
    },
  ];
  return (
    <div>
      <div className="h-auto mx-6  p-6">
        <div className="flex flex-col">
          <h2 className=" text-3xl font-bold font-sans mb-2">Our Expertise</h2>
          <div className="w-24 h-1 bg-[rgb(213,179,84)] mt-2 mb-8"></div>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 cursor-pointer">
            {imageData.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  // src={`/src/assets/images/${image.src}`}
                  src={image.src}
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

export default expertise;
