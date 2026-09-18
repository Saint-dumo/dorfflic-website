import "./Hero.css";
import heroLand from "..dorfflic-hero.png";
import heroMarine from "..dorfflic-marinehero.png";
import { useState, useEffect } from "react";


function Hero() {

  const images = [heroLand, heroMarine];

  const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 5000);
  return () => clearInterval(interval);
  }, []);

  return (
  <>
    <section className="hero" >
      <div className={`hero-background hero-background-one ${currentImage === 0 ? "active" : ""}`}
        style={{ backgroundImage: `url(${heroLand})` }}
      ></div>

      <div className={`hero-background hero-background-two ${currentImage === 1 ? "active" : ""}`}
        style={{ backgroundImage: `url(${heroMarine})` }}
      ></div>

      <div className="hero-content">
        <h1>Moving What Matters</h1>
        <p>Reliable Marine, & Land Logistics for businesses and individuals.</p>
        <div className="hero-buttons">
            <a href="#track" className="btn-primary">Track Delivery</a>
            <a href="#contact" className="btn-secondary">Get a Quote</a>
        </div>
      </div>
    </section>
  </>
  );
}

export default Hero;