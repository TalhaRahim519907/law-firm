import { useState, useEffect } from "react";
import image2 from "../../assets/Images/55.jpg";
import Footer from "../Footer/footer.jsx";

// Sample images (replace with actual image paths)
import slide1 from "../../assets/Images/11.jpg";
import slide2 from "../../assets/Images/22.jpg";
import slide3 from "../../assets/Images/706.jpg";

import event1 from "../../assets/Images/G1.webp";
import event2 from "../../assets/Images/G2.jpg";
import event3 from "../../assets/Images/G3.jpg";
import event4 from "../../assets/Images/G4.jpg";
import event5 from "../../assets/Images/G5.jpg";
import event6 from "../../assets/Images/G6.jpeg";

// Slider Images Array
const sliderImages = [slide1, slide2, slide3];

// Event Images Array
const eventImages = [event1, event2, event3, event4, event5, event6];

const NewsEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Header */}
      <div
        className="px-6 relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image2})`, // Background image for the hero section
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-8">
          <h2 className="text-4xl text-white font-bold font-serif">
            News & Events
          </h2>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-12 px-0">
        {/* Image Slider */}
        <div className="relative">
          <img
            src={sliderImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-100 md:h-100 object-cover shadow-lg transition-opacity duration-500"
          />

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-yellow-500" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* News Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-[rgb(12,33,55)] font-sans">
            Latest News
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mb-4 mt-2"></div>
          <p className="text-gray-700 mt-4">
            Our latest updates bring you in-depth insights on industry trends,
            legal advancements, and the most significant highlights from our
            firm. We aim to keep you updated on the latest events shaping the
            business and legal landscape.
          </p>
          <p className="text-gray-700 mt-4">
            Stay ahead with our expert opinions, case studies, and market
            analyses. Our team works tirelessly to bring you critical
            information that impacts businesses and individuals, ensuring you
            stay informed and prepared.
          </p>
          <p className="text-gray-700 mt-4">
            We take pride in our success stories, recent achievements, and case
            resolutions. With a strong commitment to excellence, we continuously
            strive to set new standards and deliver the best outcomes for our
            clients.
          </p>
        </div>

        {/* Event Photo Gallery */}
        <div className="mt-10 mb-6">
          <h2 className="text-4xl font-bold text-[rgb(12,33,55)] text-center font-serif">
            Event Photo Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 cursor-pointer">
            {eventImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-72 cursor-pointer object-cover shadow-md transition duration-300"
                />
                {/* Black overlay effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsEvents;
