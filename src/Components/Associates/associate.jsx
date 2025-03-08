import image1 from "../../assets/Images/B5.jpeg";
import Footer from "../Footer/footer.jsx";

const associates = [
  {
    name: "AHMED ZAFAR",
    details: [
      "Admitted to practice in 2023",
      "LL.B. (Hons.) (University of Westminster)",
      "Advocate",
    ],
  },
  {
    name: "FAKIR HUSSAIN RANA",
    details: [
      "Admitted to practice in 2002",
      "LL.B. (Punjab)",
      "Advocate High Court",
    ],
  },
  {
    name: "MIRZA ABBAS BAIG",
    details: [
      "Admitted to practice in 1975",
      "M.A., LL.B. (Punjab)",
      "Advocate High Court",
    ],
  },
  {
    name: "AIEMA HUSAIN",
    details: [
      "Admitted to practice in 2023",
      "B. A. LL.B. (Hons.) (LUMS)",
      "Advocate",
    ],
  },
  {
    name: "HASEEB ZIA SYED",
    details: [
      "Admitted to practice in 2018",
      "LL.B. (Hons.) (University of Hertfordshire, UK)",
      "LL.M (City, University of London, UK)",
    ],
  },
  {
    name: "MUHAMMAD HAMEED BAKHSH",
    details: [
      "Admitted to practice in 2011",
      "BA-LL.B. (LUMS)",
      "Advocate High Court",
    ],
  },
  {
    name: "MUHAMMAD YAHYA",
    details: ["Admitted to practice in 2022", "LL.B. (Hons.) (London)"],
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
          <h2 className="text-4xl font-bold">LS Consultant Associates</h2>
        </div>
      </div>

      {/* Associates List */}
      <div className="max-w-6xl mx-auto px-6 my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
