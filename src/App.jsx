import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Trackdelivery from "./components/Trackdelivery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    useEffect(() => {
      fetch("http://localhost:5000/api/health")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Backend connection failed:", error);
        });
    }, []);


  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="track">
        <Trackdelivery />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;