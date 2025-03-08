import image1 from "../../assets/Images/B5.jpeg";
import Footer from "../Footer/footer.jsx";

const partners = [
  {
    name: "Afzal H. Mufti",
    details: [
      "Admitted to practice in 1965.",
      "M.A. (Oxon)",
      "B.A. Hons. (Jurisprudence), Oxon",
      "B.A., LL.B. (Punjab)",
      "Pakistan Rhodes Scholar (1967)",
      "Advocate Supreme Court of Pakistan",
    ],
  },
  {
    name: "Hamid Khan",
    details: [
      "Admitted to practice in 1968.",
      "LL.M. (Illinois)",
      "M.A. (Punjab), LL.B. (Punjab)",
      "Senior Advocate, Supreme Court of Pakistan",
    ],
  },
  {
    name: "Salman Aslam Butt",
    details: [
      "Admitted to practice in 1982.",
      "B.A., LL.B. (Punjab)",
      "LL.M. (London)",
      "Senior Advocate, Supreme Court of Pakistan",
    ],
  },
  {
    name: "Munawar-us-Salam",
    details: [
      "Admitted to practice in 1998.",
      "B.A. (Punjab), LL.B. (Hons.) (London)",
      "Post Graduate Diploma in Professional Legal Skills (London)",
      "Barrister-at-Law (Lincoln’s Inn)",
      "Advocate Supreme Court of Pakistan",
    ],
  },
  {
    name: "Shehzad Ata Elahi",
    details: [
      "Admitted to practice in 2001.",
      "LL.B. (Hons.) (London)",
      "Post Graduate Diploma in Professional Legal Skills (City University)",
      "Barrister-at-Law (Lincoln’s Inn)",
      "Advocate Supreme Court of Pakistan",
    ],
  },
  {
    name: "Waleed Khalid",
    details: [
      "Admitted to practice in 2004.",
      "LL.B. (Hons.) (London)",
      "Post Graduate Diploma in Professional Legal Studies (BPP, London)",
      "Barrister-at-Law (Lincoln’s Inn)",
      "Advocate Supreme Court of Pakistan",
    ],
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
          <h2 className="text-white text-4xl font-bold font-sans">
            LS Consultant Partners
          </h2>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row px-6 py-10">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4 p-4">
          <h2 className="text-2xl text-[rgb(12,33,55)] text-center font-bold mb-4">
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
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-100 p-6 shadow-md ">
              <h3 className="text-xl font-bold text-[rgb(12,33,55)]">
                {partner.name}
              </h3>
              <ul className="mt-2 text-sm font-medium text-gray-700 list-disc list-inside">
                {partner.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <p className="mt-2 text-[rgb(182,150,62)] cursor-pointer">
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
