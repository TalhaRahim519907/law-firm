import image1 from "../../assets/Images/5.jpg";
import image2 from "../../assets/Images/Ab1.jpg"; // Import B2.jpeg
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
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center px-16">
          <h2 className="text-white text-4xl font-bold font-serif">About Us</h2>
        </div>
      </div>

      <div className="container mx-auto pb-4 pt-12 flex flex-col md:flex-row items-center">
        {/* Text Section on the left */}
        <div className="p-3 md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">
            Introduction to LS Legal Consultants & Associates
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-gray-700 text-justify">
            LS LEGAL CONSULTANTS & ASSOCIATES is a premier law firm dedicated to
            providing expert legal solutions. Our team of experienced
            professionals specializes in various legal fields, ensuring
            comprehensive support for our clients. With years of expertise and a
            strong reputation in the legal fraternity, we are committed to
            delivering reliable and results-driven legal services. Our goal is
            to provide sound legal advice and strategic guidance to help our
            clients navigate complex legal matters with confidence and ease.
          </p>
        </div>
        {/* Image Section on the rigt */}
        <div className="md:w-1/2 flex justify-center">
          <img src={image2} alt="Firm" className="shadow-lg w-3/4" />
        </div>
      </div>

      {/* Evolution Section Below */}
      <div className="container mx-auto px-6 pt-4 pb-2 flex flex-col md:flex-row items-center">
        <div className="">
          <h2 className="text-3xl font-bold mb-3">Evolution of the Firm</h2>
          <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-gray-700 text-justify">
            LS Legal Consultants and Associates was founded with a vision to
            provide unparalleled legal support. Over the years, we have expanded
            our expertise in Civil, Criminal, Family, Tax matters, building a
            strong reputation in the industry. Our journey began with a small
            team of dedicated professionals, and today, we stand as a trusted
            name in legal consultancy. We continuously strive to deliver
            strategic, innovative, and client-focused solutions.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-4 pb-2 flex flex-col md:flex-row items-center">
        <div className="">
          <p className="text-gray-700 text-justify">
            Our mission is to empower our clients by offering personalized legal
            counsel and representation that safeguards their rights and
            interests. We take pride in our ability to simplify complex legal
            matters, guiding individuals and businesses through intricate legal
            challenges with clarity and confidence. Whether you are navigating
            corporate compliance issues or seeking justice in a dispute, LS
            LEGAL CONSULTANTS & ASSOCIATES is here to advocate for you with
            unwavering commitment.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-4 pb-2 flex flex-col md:flex-row items-center">
        <div className="">
          <p className="text-gray-700 text-justify">
            With years of experience in the legal industry, our firm has
            established a reputation for excellence and reliability. We believe
            in fostering long-term client relationships built on trust and
            transparency. Our approach is client-centric, ensuring that every
            legal strategy we devise is aligned with our clients’ unique goals
            and circumstances. At LS LEGAL CONSULTANTS & ASSOCIATES, we do not
            just offer legal services; we build legal solutions that drive
            success.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-2 pb-16 flex flex-col md:flex-row items-center">
        <div className="">
          <p className="text-gray-700 text-justify">
            As a forward-thinking law firm, we stay ahead of legal trends and
            emerging regulations to provide our clients with innovative and
            effective legal strategies. Our team is dedicated to upholding the
            highest ethical standards while delivering results-driven advocacy.
            At LS LEGAL CONSULTANTS & ASSOCIATES, we are not just your lawyers;
            we are your trusted legal partners, committed to protecting your
            rights and achieving the best possible outcomes for you.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
