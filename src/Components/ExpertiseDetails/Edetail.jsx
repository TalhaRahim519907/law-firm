import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import image2 from "../../assets/Images/3.jpg";
import Footer from "../Footer/footer.jsx";
import { imageData } from "../Expertise/Imagedata.jsx";

const Edetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id && imageData.length > 0) {
      navigate(`/expertise/${imageData[0].id}`, { replace: true });
    }
  }, [id, navigate]);

  const selected =
    imageData.find((image) => image.id === parseInt(id)) || imageData[0];

  return (
    <div>
      {/* Header */}
      <div
        className="px-6 relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-8">
          <h2 className="text-4xl text-white font-bold font-serif">
            LS Expertise
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold font-serif text-[rgb(12,33,55)] mb-4 text-center">
            EXPERTISE
          </h2>
          <div className="space-y-4">
            {imageData.map((image) => (
              <a
                key={image.id}
                href={`/expertise/${image.id}`}
                className={`block text-left px-4 py-2 border font-semibold text-[rgb(12,33,55)] ${
                  selected?.id === image.id
                    ? "bg-[rgb(213,179,84)] text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {image.title}
              </a>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          {selected ? (
            <>
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full h-96 object-cover shadow-md"
              />
              <h3 className="text-2xl font-bold text-gray-900 mt-4">
                {selected.title}
              </h3>
              {selected.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mt-2 text-justify">
                  {paragraph}
                </p>
              ))}
            </>
          ) : (
            <p className="text-red-500 text-xl">No expertise found!</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Edetail;
