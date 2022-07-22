import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
    </div>
  );
}

export default App;
