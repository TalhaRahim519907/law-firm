import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with form submission (e.g., send data to server)
      console.log("Form data:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div>
      <div className="h-auto bg-gray-100 py-20">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-bold font-sans mb-4">Keep In Touch</h2>
          <div className="w-24 h-0.5 bg-gray-400 mt-4 mb-20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Contact Form */}
          <div className="col-span-1 md:col-span-3 p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-1 text-gray-700 font-sans font-bold">
                  NAME*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="mb-10">
                <label className="block text-gray-700 mb-1 font-sans font-bold">
                  EMAIL*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-1 font-sans font-bold">
                  MESSAGE*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="flex justify-center">
                <button className=" mt-8  border-2 border-black font-semi-bold font-bold duration-500 px-10 py-2 font-sans rounded-full hover:text-white hover:bg-stone-900">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Address Section */}
          <div className="col-span-2 p-6 mt-4">
            <div className="mb-6">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-6 mb-0 size-5 inline-block"
              />
              <h1 className="text-2xl font-bold font-sans mb-2 inline-block">
                Let's Talk
              </h1>
              <p className="text-gray-500 ml-11">+ 01 212 345-6879</p>
            </div>
            <div className="mb-6">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-6 mb-0 size-6 inline-block"
              />
              <h1 className="text-2xl font-bold font-sans mb-2 inline-block">
                Address
              </h1>
              <p className="text-gray-500 ml-11 mb-1">
                128 West 379 Hudson St,
              </p>
              <p className="text-gray-500 ml-11">Brooklyn, NY 10016</p>
            </div>
            <div className="mb-6">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-6 mb-0 size-6 inline-block"
              />
              <h1 className="text-2xl font-bold font-sans mb-2 inline-block">
                Email
              </h1>
              <p className="text-gray-500 ml-11">contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
