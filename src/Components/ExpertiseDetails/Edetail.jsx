import { useState } from "react";
import image1 from "../../assets/Images/E1.jpg"; // Use the same image for all or replace with different ones
import image2 from "../../assets/Images/B5.jpeg";
import Footer from "../Footer/footer.jsx";

// Updated Expertise Data
const expertiseData = [
  {
    title: "Civil Litigation",
    content:
      "We provide legal representation in civil disputes, ensuring effective resolution through court proceedings.",
    image: image1,
  },
  {
    title: "Criminal Litigation",
    content:
      "Our firm offers expert legal defense and prosecution services in criminal cases, safeguarding clients' rights.",
    image: image1,
  },
  {
    title: "Family Laws",
    content:
      "We assist with family legal matters, including divorce, child custody, and inheritance disputes.",
    image: image1,
  },
  {
    title: "Consumer Laws",
    content:
      "Protecting consumer rights through legal advocacy, ensuring fair treatment in commercial transactions.",
    image: image1,
  },
  {
    title: "Banking & Finance",
    content:
      "Advising clients on banking regulations, financial transactions, and compliance strategies.",
    image: image1,
  },
  {
    title: "Income & Sales Tax",
    content:
      "Providing expert guidance on taxation matters, including compliance and tax planning.",
    image: image1,
  },
  {
    title: "Trade Mark Registration",
    content:
      "Assisting businesses in protecting their brand identity through trademark registration services.",
    image: image1,
  },
  {
    title: "Company Registration (SECP)",
    content:
      "Helping entrepreneurs establish their businesses by ensuring seamless company registration with SECP.",
    image: image1,
  },
];

const Expertise = () => {
  const [selected, setSelected] = useState(expertiseData[0]); // Default selection

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
            LS Expertise
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold font-serif text-[rgb(12,33,55)] mb-4 text-center">
            EXPERTISE
          </h2>
          <div className="space-y-2">
            {expertiseData.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className={`w-full text-left px-4 py-2 border font-semibold text-[rgb(12,33,55)] ${
                  selected.title === item.title
                    ? "bg-[rgb(213,179,84)] text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <img
            src={selected.image}
            alt={selected.title}
            className="w-full h-80 object-cover shadow-md"
          />
          <h3 className="text-2xl font-bold text-gray-900 mt-4">
            {selected.title}
          </h3>
          <p className="text-gray-700 mt-2">{selected.content}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Expertise;
