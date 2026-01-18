import { useState } from "react";
import Navbar from "./components/Navbar";
import IntroLoader from "./components/IntroLoader";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showCert, setShowCert] = useState(false); // NEW

  return (
    <>
      {showIntro && <IntroLoader onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          {/* Pass open function to Navbar */}
          <Navbar onOpenCert={() => setShowCert(true)} />

          <Home />
          <Timeline />
          <Experience />
          <Skills />
          <Projects />

          {/* Certifications controlled by state */}
          <Certifications
            show={showCert}
            onClose={() => setShowCert(false)}
          />

          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
