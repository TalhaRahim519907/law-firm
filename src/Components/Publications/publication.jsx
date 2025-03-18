import image1 from "../../assets/Images/book.jpg";
// import image1 from "../../assets/Images/B5.jpeg";
import image2 from "../../assets/Images/44.jpg"; // Import B2.jpeg
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
            <h2 className="text-3xl font-bold font-sans text-[rgb(12,33,55)] mb-4">
              A History of the Judiciary in Pakistan
            </h2>
            <p className="text-gray-700  leading-relaxed text-justify">
              Hamid Khan, Senior Advocate, Supreme Court of Pakistan Hamid Khan
              is a Senior Advocate of the Supreme Court of Pakistan and a
              founding partner of a leading law firm of Pakistan, Cornelius,
              Lane & Mufti. He is former President of the Supreme Court Bar
              Association of Pakistan (20013), and of the Lahore High Court Bar
              Association (19923). He regularly lectures on various legal
              subjects at the University of the Punjab, Civil Services Academy,
              Administrative Staff College, and the National Institute of Public
              Administration. He is an Ebert and DAAD Fellow, and a member of
              The Hague Academy of International Law. His other publications
              include: Constitutional and Political History of Pakistan, 3rd
              Edition (OUP 2017), Principles of Administrative Law, 2nd Edition
              (OUP 2020), The Islamic Law of Inheritance, 2nd Edition (OUP
              2021), and Comparative Constitutional Law (OUP 2022).
            </p>

            <div className="mt-4 text-gray-800 ">
              <p>
                <strong>Editors: </strong> Hamid Khan
              </p>
              <p>
                <strong>Publication Date: </strong>
                26-Feb-2024
              </p>
              <p>
                <strong>ISBN: </strong> 9789697342242
              </p>
              <p>
                <strong>Publisher: </strong> Oxford University Press
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
