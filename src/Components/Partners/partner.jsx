import image1 from "../../assets/Images/705.jpg";
import Footer from "../Footer/footer.jsx";

const partners = [
  {
    name: "Hafiz Muhammad Bilal Sharif Chaudhary",
    details: ["Adv. High Court", "0300 8877755"],
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
                className=" bg-[rgb(213,179,84)] hover:bg-[rgb(240,199,88)] p-3 cursor-pointer text-[rgb(12,33,55)] font-bold font-serif"
              >
                {partner.name}
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Updated Right Section */}
        <div className="w-full md:w-3/4 bg-gray-100 p-8 min-h-screen flex justify-center items-center">
          <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start">
              {/* Left Section - Text */}
              <div className="md:w-3/4">
                {partners.map((partner, index) => (
                  <h2
                    key={index}
                    className="text-3xl font-bold font-serif text-gray-900"
                  >
                    {" "}
                    {partner.name}
                  </h2>
                ))}
                <hr className="my-4 border-gray-300" />
                {/* <p className="text-gray-700">Admitted to practice in 1965.</p> */}

                <h2 className="text-xl font-semibold text-gray-900 mt-4">
                  Qualifications
                </h2>
                <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                  <li>M.A. (Oxon)</li>
                  <li>B.A. Hons. (Jurisprudence), Oxon</li>
                  <li>B.A., L.L.B. (Punjab)</li>
                  <li>Pakistan Rhodes Scholar (1967)</li>
                  <li>Advocate Supreme Court of Pakistan</li>
                </ul>

                <p className="text-gray-700 mt-4">
                  Visiting Law Lecturer, University of the Punjab from 1969 to
                  1972 and 1975 to 1979
                  <br />
                  Associate Member of the Law Society London
                  <br />
                  Associate, Baker and McKenzie, London (1972-1975)
                  <br />
                  Legal Counsel, Asian Development Bank, Manila (1980-1988)
                  <br />
                  Consultant, Asian Development Bank, since 1988.
                </p>

                <h2 className="text-xl font-semibold text-gray-900 mt-6">
                  Expertise
                </h2>
                <p className="text-gray-700 mt-2">
                  Specializing in International Commercial Transactions,
                  Commercial Credits, Laws relating to Project Finance and
                  Development Lending; Contracts and Procurement, and Laws of
                  International Organizations.
                </p>

                <p className="mt-6 text-gray-900 font-semibold">
                  Email:{" "}
                  <a
                    href="mailto:afzal.mufti@clm.com.pk"
                    className="text-blue-600 hover:underline"
                  >
                    afzal.mufti@clm.com.pk
                  </a>
                </p>
              </div>

              {/* Right Section - Image */}
              <div className="md:w-1/4 md:ml-6 mt-6 md:mt-0">
                <img
                  src="/assets/profile.jpg" // Ensure the image is placed in the public/assets folder
                  alt="Afzal H. Mufti"
                  className="w-32 h-40 object-cover rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Partners;
