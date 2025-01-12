import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
