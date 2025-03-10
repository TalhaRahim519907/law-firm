import image1 from "../../assets/Images/707.webp";
import Footer from "../Footer/footer.jsx";

const associates = [
  {
    name: "Shahzad Hussain",
    details: ["Adv. High Court", "0300 8877755"],
  },
  {
    name: "Hafiz M. Afif Bashir CH.",
    details: ["Adv. High Court", "0300 7716445"],
  },
  {
    name: "M. Bilal Zafar CH.",
    details: ["Adv. High Court", "0300 7777207"],
  },
  {
    name: "Mian Mohsin Shabbir",
    details: ["Adv. High Court", "0307 4915959"],
  },
  {
    name: "M. Ahsan Majid",
    details: ["Adv. High Court", "0323 7716445"],
  },
  {
    name: "M. Fahad",
    details: ["Adv. High Court", "0332 3976102"],
  },
  {
    name: "Habib Sadiq CH.",
    details: ["Advocate", "0308 5539393"],
  },
  {
    name: "Rana Ahmad Ali",
    details: ["Adv. High Court", "0306 6654727"],
  },
  {
    name: "Rana M. Umar Farooq",
    details: ["Adv. High Court", "0345 4877328"],
  },
];

const Associates = () => {
  return (
    <div className="text-white">
      {/* Header */}
      <div
        className="px-6 relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image1})`, // Background image for the hero section
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-8">
          <h2 className="text-4xl font-bold font-serif">
            LS Consultant Associates
          </h2>
        </div>
      </div>

      {/* Associates List */}
      <div className="max-w-6xl mx-auto px-6 my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {associates.map((associate, index) => (
          <div key={index} className="text-black">
            <h3 className="font-bold text-lg text-[rgb(12,33,55)]">
              {associate.name}
            </h3>
            <ul className="mt-1 text-sm font-medium list-disc list-outside pl-5">
              {associate.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Associates;
