import { useNavigate } from "react-router-dom";
import { imageData } from "./Imagedata";
function Expertise() {
  const navigate = useNavigate();

  return (
    <div className="h-auto mx-6 p-6">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold font-sans mb-2">Our Expertise</h2>
        <div className="w-24 h-1 bg-[rgb(213,179,84)] mt-2 mb-8"></div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 cursor-pointer">
          {imageData.map((image) => (
            <div
              key={image.id}
              onClick={() => navigate(`/expertise/${image.id}`)}
              className="E-card relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h2 className="text-white text-2xl font-bold font-serif mb-2 text-center">
                  {image.title}
                </h2>
                <p className="text-white text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
