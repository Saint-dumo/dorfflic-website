import marineImage from "../assets/dorfflic-marinehero.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-content">

        <div className="about-text">
          <span>WHO WE ARE</span>

          <h2>Marine & Land Logistics Built Around Reliability</h2>

          <p>
            Our customer-centric team is driven by a single objective - to ensure
            safe execution and the reliable availability of vessels and marine
            services for our clients.
          </p>

          <p>
            At Dorfflic Commercial Consult Nigeria Ltd (DCCNL), we are dedicated
            to revolutionizing marine and land logistics with expertise,
            cutting-edge solutions and an unwavering commitment to excellence.
          </p>

          <p>
            Established on 20th February 2025, we provide marine logistics,
            land logistics and security services tailored to meet the unique
            demands of our clients.
          </p>

          <button>Learn More About Us</button>
        </div>

        <div className="about-visual">
          <div className="about-image">
            <div className="about-image"><img src={marineImage} alt="Dorrflic marine logistics" /></div>
          </div>

          <div className="about-stats">
            <div className="about-stats">
                <div className="about-stat">
                    <strong>6,000+</strong>
                    <span>Deliveries</span>
                </div>

                <div className="about-stat">
                    <strong>500+</strong>
                    <span>Clients</span>
                </div>

                <div className="about-stat">
                    <strong>2025</strong>
                    <span>Established</span>
                </div>
            </div>
          </div>
        </div>

      </div>

      <div className="about-services">
        <div className="about-services-heading">
            <span>WHAT WE DO</span>
            <h2>Logistics Solutions Built Around Your Needs</h2>
        </div>

    <div className="about-service-cards">
            <div className="about-service-card">
            <span>01</span>

            <h3>Marine Logistics</h3>

            <p>
                Reliable marine transportation solutions designed to support
                offshore operations and the movement of people, equipment and cargo.
            </p>

            <ul>
                <li>Tugboats</li>
                <li>Barges</li>
                <li>Gunboats</li>
                <li>Speed boats</li>
                <li>Water buses</li>
            </ul>
            </div>

            <div className="about-service-card">
            <span>02</span>

            <h3>Land Logistics</h3>

            <p>
                Efficient land delivery solutions that keep goods moving safely
                and reliably from origin to destination.
            </p>

            <ul>
                <li>Interstate deliveries</li>
                <li>Last-mile deliveries</li>
                <li>Pickup & drop-off</li>
            </ul>
            </div>
        </div>
    </div>

    <div className="security-service">
        <div className="security-content">
            <span>SECURITY SERVICES</span>

            <h2>Safety. Reliability. Excellence.</h2>

            <p>
            We provide security solutions tailored to the demands of offshore
            operations, helping our clients operate with confidence in challenging
            environments.
            </p>
        </div>
        <a href="#contact">Talk to Our Team</a>
    </div>
    </section>
  );
}

export default About;