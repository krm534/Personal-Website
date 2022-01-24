import "./styles/App.css";
import Header from "./component/header";
import About from "./component/about";
import Projects from "./component/projects";
import Contact from "./component/contact";
import Footer from "./component/footer";

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
