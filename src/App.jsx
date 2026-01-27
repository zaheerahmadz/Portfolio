import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Specialities from "./components/Specialities";
import WorkProcess from "./components/WorkProcess";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import About from "./pages/About";

const Home = () => (
  <>
    <Hero />
    <Specialities />
    <WorkProcess />
    <ProjectsSection />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
