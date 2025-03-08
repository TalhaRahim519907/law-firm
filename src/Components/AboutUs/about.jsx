import image1 from "../../assets/Images/B5.jpeg";
import image2 from "../../assets/Images/B2.jpeg"; // Import B2.jpeg
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image1})`, // Background image for the hero section
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center px-20">
          <h2 className="text-white text-4xl font-bold font-sans">About Us</h2>
        </div>
      </div>

      <div className="container mx-auto pb-4 pt-12 flex flex-col md:flex-row items-center">
        {/* Text Section on the left */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">
            Introduction to LS Legal Consultant & Associates
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-gray-700">
            LS LEGAL CONSULTANTS & ASSOCIATES is a premier law firm dedicated to
            providing expert legal solutions. Our team of experienced
            professionals specializes in various legal fields, ensuring
            comprehensive support for our clients. With years of expertise and a
            strong reputation in the legal industry, we are committed to
            delivering reliable and results-driven legal services. Our goal is
            to provide sound legal advice and strategic guidance to help our
            clients navigate complex legal matters with confidence and ease.
          </p>
        </div>
        {/* Image Section on the rigt */}
        <div className="md:w-1/2 flex justify-center">
          <img src={image2} alt="Firm" className="rounded-lg shadow-lg w-3/4" />
        </div>
      </div>

      {/* Evolution Section Below */}
      <div className="container mx-auto px-6 pt-4 pb-16 flex flex-col md:flex-row items-center">
        <div className="">
          <h2 className="text-3xl font-bold mb-4">Evolution of the Firm</h2>
          <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-gray-700">
            LS Legal Consultant and Associates was founded with a vision to
            provide unparalleled legal support. Over the years, we have expanded
            our expertise in corporate, commercial, and litigation matters,
            building a strong reputation in the industry. Our journey began with
            a small team of dedicated professionals, and today, we stand as a
            trusted name in legal consultancy. We continuously strive to deliver
            strategic, innovative, and client-focused solutions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
