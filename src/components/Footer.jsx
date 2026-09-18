import logo from "../assets/dorfflic-logo2.png";
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <img
            src={logo}alt="Dorfflic Logistics"
          />

          <p>
            Marine and land logistics solutions
            you can rely on.
          </p>

          <div className="footer-socials">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dorfflic_logistics?igsh=ZzVnZmhyb3l6dTYz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dorfflic Logistics on Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  ry="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2349167412499"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Dorfflic Logistics on WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M20.5 11.2a8.5 8.5 0 0 1-12.7 7.4L3.5 20l1.4-4.1A8.5 8.5 0 1 1 20.5 11.2Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.7 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.4.6c-.1.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6 0l.6-.4c.2-.1.4-.1.6 0l1.4.6c.2.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .4-1.5.3-1.2-.2-2.5-.9-3.7-2-1.2-1.1-2-2.3-2.3-3.5-.1-.6.1-1.2.3-1.6Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#tracking">Track Delivery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <a href="tel:08081535985">
            080 8153 5985
          </a>

          <a href="mailto:dorffliccommercialconsults@gmail.com">
            dorffliccommercialconsults@gmail.com
          </a>

          <p>
            15 Diffri Road,<br />
            Port Harcourt, Nigeria
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Dorfflic Commercial Consults Nigeria Ltd.
          All rights reserved.
        </p>

        <p>
          RC 8284080
        </p>
      </div>

    </footer>
  );
}

export default Footer;