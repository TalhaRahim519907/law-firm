import { FaEnvelope, FaPhone, FaFax } from "react-icons/fa";
import image2 from "../../assets/Images/77.jpg"; // Import B2.jpeg
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";

const offices = [
  {
    city: "ISLAMABAD OFFICE",
    name: "LS Legal Consultants & Associates",
    address: "Elaf Arcade near Judicial Complex G-10 Islamabad",
    email: "lslegalconsultancy@gmail.com",
    phone: "0301 5042088",
    fax: "0301 5042088",
  },
  {
    city: "RAWALPINDI OFFICE",
    name: "LS Legal Consultants & Associates",
    address:
      "310 , 2nd Floor , Sardar Ijaz Ishaq Khan Block District Courts Rawalpindi",
    email: "lslegalconsultancy@gmail.com",
    phone: "0333 5042788",
    fax: null,
  },
  {
    city: "LAHORE OFFICE", // Update this with the real location
    name: "LS Legal Consultants & Associates",
    address: "Bashir Mansion 1-Turner Road Lahore", // Update this
    email: "lslegalconsultancy@gmail.com",
    phone: "0333 5042788",
    fax: "0333 5042788", // Add fax if available
  },
];

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image2})`, // Background image for the hero section
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-8">
          <h2 className="text-white text-4xl font-bold font-serif">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 px-6 py-12 bg-gray-100">
        {offices.map((office, index) => (
          <div key={index} className="bg-white shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-[rgb(12,33,55)] font-serif">
              {office.city}
            </h2>
            <h3 className="text-lg font-semibold text-[rgb(12,33,55)] font-serif">
              {office.name}
            </h3>
            <p className="text-gray-600 mt-2">{office.address}</p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center text-gray-700">
                <FaEnvelope className="mr-2 text-blue-600" /> {office.email}
              </p>
              <p className="flex items-center text-gray-700">
                <FaPhone className="mr-2 text-green-600" /> {office.phone}
              </p>
              {office.fax && (
                <p className="flex items-center text-gray-700">
                  <FaFax className="mr-2 text-gray-500" /> {office.fax}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
