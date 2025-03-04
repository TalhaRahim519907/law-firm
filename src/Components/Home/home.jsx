import { useState, useEffect } from "react";
import image1 from "../../assets/Images/1.jpg";
import image2 from "../../assets/Images/2.jpg";
import image3 from "../../assets/Images/3.jpg";
import image4 from "../../assets/Images/4.jpg";
import image5 from "../../assets/Images/5.jpg";
import image6 from "../../assets/Images/6.jpg";

const slides = [
  {
    image: image1,
    text: "What makes the firm unique is its equally good experience in both contentious and non-contentious work which is very, very rare in the Pakistani legal market. Unlike other old firms in Pakistan, CLM has kept itself and its staff updated with the technological developments in the legal market in Pakistan.",
  },
  {
    image: image2,
    text: "They have a very capable and strong team. They are always willing to go the extra mile to facilitate their client. Their in-depth knowledge and rich experience makes them a ‘go to’ practice in Pakistan. Knowledgeable yet polite. A great business partner, who always provide sound advice.",
  },
  {
    image: image3,
    text: "I have had the opportunity to work with partners and associates in CLM that stand out from the competitors due to their sheer commitment, knowledge, and experience.",
  },
  {
    image: image4,
    text: "I can’t think of any other firm in the country which has a wider experience in international arbitration than CLM. They have a great pool of talent.",
  },
  {
    image: image5,
    text: "Cornelius, Lane & Mufti is well known for representing both international and local clients in litigation before the Supreme and High Courts, as well as having expertise in arbitration",
  },
  {
    image: image6,
    text: "Cornelius, Lane & Mufti is recommended for its experience in joint ventures and commercial contracts work",
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    setTimeout(() => setTextIndex(currentIndex), 400); // Delays text change slightly
    setTimeout(() => setFade(false), 500); // Smooth fade effect
  }, [currentIndex]);

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center text-white text-center px-6 transition-all duration-700"
      style={{
        backgroundImage: `url(${slides[currentIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Text */}
      <div
        className={`relative z-10 max-w-2xl transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-2xl md:text-3xl text-[rgb(213,179,84)] font-bold  mb-4">
          <i>{slides[textIndex].text}</i>
        </h1>
      </div>

      {/* Navigation Circles */}
      <div className="absolute bottom-10 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              currentIndex === index
                ? "bg-[rgb(213,179,84)] border-white scale-110"
                : "bg-gray-500 border-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
