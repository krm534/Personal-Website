import './styles/App.css';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Modal from './components/Modal';
import { Route, Routes, Router, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <Routes>
          <Route>
            <Route path="/experience/:id" element={<Modal />} />
            <Route path="/project/:id" element={<Modal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
