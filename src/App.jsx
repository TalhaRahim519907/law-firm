import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Components/Sidebar/sidebar.jsx";
import Navbar from "./Components/Navbar/navbar.jsx";
import Home from "./Components/Home/home.jsx";
import About from "./Components/About/about.jsx";
import Services from "./Components/Services/services.jsx";
import Portfolio from "./Components/Portfolio/portfolio.jsx";
import Client from "./Components/Clients/client.tsx";
import Review from "./Components/Reviews/review.tsx";
import Blogs from "./Components/Blogs/blog.jsx";
import MyShop from "./Components/MyShop/shop.jsx";
import Partner from "./Components/Partners/partner.jsx";
import Contact from "./Components/Contact/contact.jsx";
import BlogPost from "./Components/BlogPost/blogpost.jsx";
import CommentSection from "./Components/CommentSection/comment.jsx";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const sectionRefs = useRef({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (section) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("data-section"));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        activeSection={activeSection}
        onScrollToSection={scrollToSection}
      />
      <div className="flex-1 md:ml-64">
        <Navbar toggleSidebar={toggleSidebar} />
        <div>
          <div
            ref={(el) => (sectionRefs.current["Home"] = el)}
            data-section="Home"
          >
            <Home />
          </div>
          <div
            ref={(el) => (sectionRefs.current["About"] = el)}
            data-section="About"
          >
            <About />
          </div>
          <div
            ref={(el) => (sectionRefs.current["Services"] = el)}
            data-section="Services"
          >
            <Services />
          </div>
          <div
            ref={(el) => (sectionRefs.current["Portfolio"] = el)}
            data-section="Portfolio"
          >
            <Portfolio />
          </div>
          <div
            ref={(el) => (sectionRefs.current["Client"] = el)}
            data-section="Client"
          >
            <Client />
          </div>
          <div
            ref={(el) => (sectionRefs.current["Review"] = el)}
            data-section="Review"
          >
            <Review />
          </div>
          <div
            ref={(el) => (sectionRefs.current["Blogs"] = el)}
            data-section="Blogs"
          >
            <Blogs />
          </div>
          <div
            ref={(el) => (sectionRefs.current["MyShop"] = el)}
            data-section="MyShop"
          >
            <MyShop />
          </div>
          <div
            ref={(el) => (sectionRefs.current["Partner"] = el)}
            data-section="Partner"
          >
            <Partner />
          </div>
          <div
            ref={(el) => (sectionRefs.current["Contact"] = el)}
            data-section="Contact"
          >
            <Contact />
          </div>
          <div
            ref={(el) => (sectionRefs.current["Blogs"] = el)}
            data-section="Blogs"
          >
            <BlogPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
