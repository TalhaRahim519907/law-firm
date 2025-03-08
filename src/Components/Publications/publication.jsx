import image1 from "../../assets/Images/book.jpg";
// import image1 from "../../assets/Images/B5.jpeg";
import image2 from "../../assets/Images/2.jpg"; // Import B2.jpeg
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";

const Publications = () => {
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
            Publications
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-0">
        <div className="flex border-4 border-[rgb(213,179,84)] bg-white py-16 px-10 max-w-6xl shadow-lg">
          {/* Book Image */}
          <img
            src={image1} // Ensure this image is in the 'public' folder in Vite
            alt="Justice A.R. Cornelius - A Constitutionalist"
            className="w-64 h-auto mr-6"
          />

          {/* Book Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold font-sans text-[rgb(12,33,55)] mb-2">
              Justice A.R. Cornelius - A Constitutionalist
            </h2>
            <p className="text-gray-700  leading-relaxed">
              On the 30th death anniversary of Justice (Retd.) Alvin Robert
              Cornelius, a former Chief Justice of Pakistan and a former Senior
              Partner of CLM, a book titled{" "}
              <strong>“Justice A.R. Cornelius - A Constitutionalist”</strong>{" "}
              has been published to commemorate his life and legacy. It contains
              personal reflections by people who knew and learned from Cornelius
              in his lifetime; essays and articles by academics and scholars and
              select speeches and writings by Cornelius (some previously
              unpublished).
            </p>

            <div className="mt-4 text-gray-800 ">
              <p>
                <strong>Editors:</strong> Asad Ullah Khan and Amna Umar Khan
              </p>
              <p>
                <strong>Publication Date:</strong> December 2021
              </p>
              <p>
                <strong>ISBN:</strong> 9789696641483
              </p>
              <p>
                <strong>Publisher:</strong> Jahangir’s World Times Publications
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
