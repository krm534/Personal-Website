import "./styles/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
