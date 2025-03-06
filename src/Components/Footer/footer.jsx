import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[rgb(12,33,55)] text-white py-10 px-6">
      <div className="max-w-6xl mx-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">ISLAMABAD OFFICE</h3>
          <div className="w-16 h-1 bg-[rgb(213,179,84)] mt-2 mb-6"></div>
          <p className="flex items-center gap-2 mb-4">
            <FaMapMarkerAlt size={20} color="rgb(213,179,84)" />
            Elaf Arcade near Judicial Complex G-10 Islamabad
          </p>
          <p className="flex items-center gap-2 mb-4">
            <FaEnvelope size={20} color="rgb(213,179,84)" />{" "}
            lslegalconsultancy@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone size={20} color="rgb(213,179,84)" /> 0301 5042088
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">RAWALPINDI OFFICE</h3>
          <div className="w-16 h-1 bg-[rgb(213,179,84)] mt-2 mb-6"></div>
          <p className="flex items-center gap-2 mb-4">
            <FaMapMarkerAlt size={20} color="rgb(213,179,84)" />
            310 , 2nd Floor , Sardar Ijaz Ishaq Khan Block District Courts
            Rawalpindi
          </p>
          <p className="flex items-center gap-2 mb-4">
            <FaEnvelope size={20} color="rgb(213,179,84)" />{" "}
            lslegalconsultancy@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone size={20} color="rgb(213,179,84)" /> 0333 5042788
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">LAHORE OFFICE</h3>
          <div className="w-16 h-1 bg-[rgb(213,179,84)] mt-2 mb-6"></div>
          <p className="flex items-center gap-2 mb-4">
            <FaMapMarkerAlt size={20} color="rgb(213,179,84)" />
            Bashir Mansion 1-Turner Road Lshore
          </p>
          <p className="flex items-center gap-2 mb-4">
            <FaEnvelope size={20} color="rgb(213,179,84)" />{" "}
            lslegalconsultancy@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone size={20} color="rgb(213,179,84)" /> 0333 5042788
          </p>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Expertise</h3>
          <div className="w-16 h-1 bg-[rgb(213,179,84)] mt-2 mb-6"></div>
          <ul>
            {[
              "Civil litigation",
              "Criminal Litigation",
              "Family Laws",
              "Consumer Laws",
              "Banking & Finance",
              "Income & Sales Tax",
              "Trade Mark Registration",
              "Company Registration (SECP)",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 mb-2 cursor-pointer hover:text-[rgb(213,179,84)]"
              >
                <span style={{ color: "rgb(213,179,84)" }}>&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
