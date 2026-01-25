import { Contact } from "lucide-react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Specialities from "./components/Specialities";
import WorkProcess from "./components/WorkProcess";

function App() {
  return (
    <>
      <Navbar />
      {/* We will add other sections here later */}
      <Hero />
      <Specialities />
      <WorkProcess />
      <ProjectsSection />
      <Footer />
      <Contact />
    </>
  );
}

export default App;
