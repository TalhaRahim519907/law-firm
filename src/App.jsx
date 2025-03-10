import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.jsx";
import Home from "./Components/Home/home.jsx";
import Introduction from "./Components/Introduction/intro.jsx";
import Expertise from "./Components/Expertise/expertise.jsx";
import Footer from "./Components/Footer/footer.jsx";
import AboutUs from "./Components/AboutUs/about.jsx"; // Import About Page
import Partners from "./Components/Partners/partner.jsx";
import Associates from "./Components/Associates/associate.jsx";
import ExpertiseDetails from "./Components/ExpertiseDetails/Edetail.jsx";
import News from "./Components/News/news.jsx";
import Publications from "./Components/Publications/publication.jsx";
import Careers from "./Components/Careers/career.jsx";
import ContactUs from "./Components/ContactUs/contact.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Introduction />
                <Expertise />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partner" element={<Partners />} />
          <Route path="/associate" element={<Associates />} />
          <Route path="/Edetail" element={<ExpertiseDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/publication" element={<Publications />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
