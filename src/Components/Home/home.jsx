import { useState, useEffect } from "react";
import image1 from "../../assets/Images/Bg1.jpg";
import image2 from "../../assets/Images/Bg2.jpg";
import image3 from "../../assets/Images/Bg3.jpg";
import image4 from "../../assets/Images/Bg4.jpg";
import image5 from "../../assets/Images/Bg5.jpg";
import image6 from "../../assets/Images/Bg6.webp";

const slides = [
  {
    image: image1,
    text: "What sets LS Legal Consultants and Associates apart is its exceptional expertise in both contentious and non-contentious legal matters a rarity in the Pakistani legal industry. Unlike traditional law firms in the country, LS stays ahead by continuously updating itself and its team with the latest technological advancements in the legal sector.",
  },
  {
    image: image2,
    text: "LS Legal Consultants and Associates boasts a highly skilled and dedicated team that consistently goes above and beyond to support its clients. Their extensive knowledge and vast experience make them a trusted choice in Pakistan’s legal industry. They are not only well-informed but also courteous, making them a reliable business partner who always offers sound and strategic advice.",
  },
  {
    image: image3,
    text: "I have had the privilege of collaborating with the partners and associates at LS, who set themselves apart from competitors through their exceptional dedication, expertise, and extensive experience.",
  },
  {
    image: image4,
    text: "I can't think of any other firm in the country with more extensive experience in international arbitration than LS. They boast a highly talented team.",
  },
  {
    image: image5,
    text: "LS Legal Consultants and Associates is renowned for advocating on behalf of both international and local clients in litigation before the Supreme and High Courts, while also possessing extensive expertise in arbitration.",
  },
  {
    image: image6,
    text: "LS Legal Consultants and Associates is highly regarded for its expertise in joint ventures and commercial contract matters.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

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
