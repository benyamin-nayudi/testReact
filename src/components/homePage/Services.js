import { Link } from "react-router-dom";
import "./services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="row-one">
        <div className="facial">
          <h4 className="services-title fancy-border unobserve">facials</h4>
          <Link to="/services" className="book-now unobserve" state={"facial"}>
            BOOK NOW &gt;{" "}
          </Link>
        </div>

        <div className="cream"></div>

        <div className="makeup">
          <h4 className="services-title fancy-border unobserve">MAKE UP</h4>
          <Link to="/services" className="book-now unobserve" state={"hair"}>
            BOOK NOW &gt;{" "}
          </Link>
        </div>

        <div className="mascara"></div>
      </div>

      <div className="row-two">
        <div className="makeup-kit"></div>

        <div className="hair-style">
          <h4 className="services-title fancy-border unobserve">
            HAIR STYLING
          </h4>
          <Link to="/services" className="book-now unobserve" state={"hair"}>
            BOOK NOW &gt;{" "}
          </Link>
        </div>

        <div className="nail-polish"></div>

        <div className="nails ">
          <h4 className="services-title fancy-border unobserve">NAILS</h4>
          <Link to="/services" className="book-now unobserve" state={"nails"}>
            BOOK NOW &gt;{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
