import "./Services.css"
import marineImage from "..dorfflic-barge.png";
import landImage from "..dorfflic-bike.png";
import securityImage from "..dorfflic-boat.png";

function Services() {
  return (
    <section className="services">

      <div className="services-heading">
        <span>OUR SERVICES</span>

        <h2>Solutions for Every Move</h2>

        <p>
          From offshore operations to last-mile delivery, our logistics
          solutions are designed to move people, cargo and projects safely
          and reliably.
        </p>
      </div>

      <div className="services-grid">

        <div className="service-card service-card-large">
            <div className="service-card-image"
                style={{ backgroundImage: `url(${marineImage})` }}
            ></div>
          <span>01</span>

          <h3>Marine Logistics</h3>

          <p>
            Reliable marine transportation and offshore logistics solutions
            tailored to the demands of your operations.
          </p>

          <ul>
            <li>Tugboats</li>
            <li>Barges</li>
            <li>Gunboats</li>
            <li>Speed boats</li>
            <li>Water buses</li>
          </ul>

          <a href="#">Explore Service</a>
        </div>

    <div className="service-card">
        <div className="service-card-inner">

        <div className="service-card-front">
            <span>02</span>

            <h3>Land Logistics</h3>

            <p>
                Reliable land delivery solutions designed to move goods
                efficiently across locations.
            </p>

            <ul>
                <li>Interstate Deliveries</li>
                <li>Last Mile Deliveries</li>
                <li>Pick Up & Drop Off</li>
            </ul>

            {/*<a href="#">Explore Service</a>*/}
        </div>

        <div
            className="service-card-back"
            style={{ backgroundImage: `url(${landImage})` }}
        >
        </div>
        </div>
    </div>

    <div className="service-card">
        <div className="service-card-inner">

            <div className="service-card-front">
            <span>03</span>

            <h3>Security Services</h3>

            <p>
                Marine security solutions supporting safe and secure
                offshore operations.
            </p>

            <ul>
                <li>Marine Security</li>
                <li>Offshore Support</li>
                <li>Vessel Protection</li>
            </ul>

            {/*<a href="#">Explore Service</a>*/}
            </div>

            <div
                className="service-card-back"
                style={{ backgroundImage: `url(${securityImage})` }}
            >
            </div>

            </div>
        </div>

    </div>

    </section>
  );
}

export default Services;