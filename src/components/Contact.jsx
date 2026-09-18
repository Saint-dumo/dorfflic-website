import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-heading">
        <span>CONTACT US</span>

        <h2>Let's Talk.</h2>

        <p>
          Whether you need marine logistics, land logistics solutions,
          or support with an ongoing operation, our team is ready to help.
        </p>
      </div>

      <div className="contact-grid">

        <div className="contact-details">

          <div className="contact-item">
            <span>PHONE</span>

            <div className="contact-phones">
                <a href="tel:08081535985">
                    080 8153 5985
                </a>

                <a href="tel:09167412499">
                    091 6741 2499
                </a>
            </div>
          </div>

          <div className="contact-item">
            <span>EMAIL</span>
            <a href="mailto:dorffliccommercialconsults@gmail.com">
              dorffliccommercialconsults@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>ADDRESS</span>
            <p>
              15 Diffri Road,<br />
              Port Harcourt, Nigeria
            </p>
          </div>

        </div>

        <div className="contact-map">
            <iframe
                title="Dorrflic Commercial Consults Nigeria Ltd location"
                src="https://www.google.com/maps?q=4.779056,7.036002&z=16&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

      </div>

    </section>
  );
}

export default Contact;