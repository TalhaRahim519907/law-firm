import image1 from "../../assets/Images/book.jpg";
import image2 from "../../assets/Images/44.jpg";
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
          backgroundImage: `url(${image2})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8">
          <h2 className="text-white text-4xl font-bold font-serif md:text-5xl">
            Publications
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="flex flex-col md:flex-row border-4 border-[rgb(213,179,84)] bg-white py-8 px-4 md:py-16 md:px-10 max-w-6xl shadow-lg">
          {/* Book Image */}
          <img
            src={image1}
            alt="Justice A.R. Cornelius - A Constitutionalist"
            className="w-full h-auto mb-4 md:mb-0 md:w-64 md:h-auto mr-0 md:mr-6"
          />

          {/* Book Info */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[rgb(12,33,55)] mb-4">
              A History of the Judiciary in Pakistan
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify mb-4">
              Hamid Khan, Senior Advocate, Supreme Court of Pakistan Hamid Khan
              is a Senior Advocate of the Supreme Court of Pakistan and a
              founding partner of a leading law firm of Pakistan, Cornelius,
              Lane & Mufti. He is a former President of the Supreme Court Bar
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

            <div className="text-gray-800">
              <p>
                <strong>Editors: </strong>Hamid Khan
              </p>
              <p>
                <strong>Publication Date: </strong>26-Feb-2024
              </p>
              <p>
                <strong>ISBN: </strong>9789697342242
              </p>
              <p>
                <strong>Publisher: </strong>Oxford University Press
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
