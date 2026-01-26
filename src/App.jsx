import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Specialities from "./components/Specialities";
import WorkProcess from "./components/WorkProcess";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

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
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
