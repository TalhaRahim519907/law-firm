import { useState } from "react";
import image2 from "../../assets/Images/66.webp"; // Import B2.jpeg
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

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
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center py-8 px-12">
          <h2 className="text-white text-4xl font-bold font-serif">Careers</h2>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-5 py-16">
        <div className="bg-white p-8 shadow-lg w-full max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-[rgb(12,33,55)]">
            JOIN US
          </h2>
          <h3 className="text-center text-2xl font-bold text-[rgb(12,33,55)] mb-6">
            Associate & Internship
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Phone No
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border"
                  required
                />
              </div>
            </div>

            {/* Position Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium">
                Position
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-2 border"
                required
              >
                <option value="">Please select the position</option>
                <option value="Intern">Intern</option>
                <option value="Associate">Associate</option>
              </select>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-gray-700 font-medium">
                Please upload Curriculum Vitae (CV) (PDF; maximum 5MB)
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full p-2 border"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-[rgb(197,160,57)] text-white px-10 py-2 hover:bg-yellow-700 transition duration-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
