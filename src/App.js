import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import MyJourney from "./components/MyJourney";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <MyJourney />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
