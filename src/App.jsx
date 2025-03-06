import Navbar from "./Components/Navbar/navbar.jsx";
import Home from "./Components/Home/home.jsx";
import Introduction from "./Components/Introduction/intro.jsx";
import Expertise from "./Components/Expertise/expertise.jsx";
import Footer from "./Components/Footer/footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
        <Introduction />
        <Expertise />
        <Footer />
      </div>
    </div>
  );
}

export default App;
