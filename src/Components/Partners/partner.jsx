import image1 from "../../assets/Images/705.jpg";
import Footer from "../Footer/footer.jsx";

const partners = [
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

const Partners = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image1})`, // Background image for the hero section
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-8">
          <h2 className="text-white text-4xl font-bold font-serif">
            LS Consultant Partners
          </h2>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row px-6 py-10">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 p-4">
          <h2 className="text-2xl text-[rgb(12,33,55)] text-center font-bold mb-4 font-serif">
            LS CONSULTANT PARTNERS
          </h2>
          <ul className="space-y-2">
            {partners.map((partner, index) => (
              <li
                key={index}
                className="bg-gray-200 hover:bg-[rgb(213,179,84)] p-3 cursor-pointer text-[rgb(12,33,55)] font-bold"
              >
                {partner.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Partner Cards */}
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 shadow-md border-2 border-yellow-300"
            >
              <h3 className="text-xl font-bold font-serif text-[rgb(12,33,55)]">
                {partner.name}
              </h3>
              <ul className="mt-2 text-sm font-medium text-gray-700 list-disc list-inside">
                {partner.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <p className="mt-2 text-[rgb(182,150,62)] cursor-pointer text-sm">
                View Profile
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partners;
