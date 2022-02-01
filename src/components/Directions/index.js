import "./index.css";

const Directions = () => {
  return (
    <section className="direction-container">
      <div className="direction-wrapper">
        <h1 className="fancy-border">Directions</h1>
        <p className="address">
          <span>500 Terry Francois Street</span>
          <span className="slash">,</span> <span>San Francisco, CA 94158</span>{" "}
        </p>
        <p className="info">
          <span>info@mysite.com</span> <span className="slash">\</span>{" "}
          <span>Tel: 123-456-7890</span>{" "}
        </p>
        <h3>opening hours</h3>
        <p className="days">
          <span>Mon - Fri: 7am - 10pm </span> <span className="slash">\</span>{" "}
          <span>​​Saturday: 8am - 10pm</span> <span className="slash">\</span>{" "}
          <span>Sunday: 8am - 11pm</span>
        </p>
      </div>
      <div className="map">
        <iframe
          title="hi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218009.99468142723!2d48.53050444442829!3d31.375362320287675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc3df8b8d29bbf5%3A0x4968f1dd5789625c!2sAhvaz%2C%20Khuzestan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1640440565091!5m2!1sen!2s"
          width="600"
          height="450"
          className="map"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Directions;
