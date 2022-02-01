import { Link } from "react-router-dom";
import "./winter-specials.css";

const WinterSpecials = () => {
  return (
    <section className="specials" id="winterSpecials">
      <div className="special-services">
        <h2 className="specials-title fancy-border unobserve">
          Winter Specials
        </h2>

        <div className="special-list">
          <div className="special-item unobserve">
            <span>manicure</span>
            <span>$18</span>
          </div>
          <div className="special-item unobserve">
            <span>hair styling</span>
            <span>$25</span>
          </div>
          <div className="special-item unobserve">
            <span>haircut</span>
            <span>$35</span>
          </div>
          <div className="special-item unobserve">
            <span>highlights</span>
            <span>$40</span>
          </div>
          <div className="special-item unobserve">
            <span>permanent lashes</span>
            <span>$16</span>
          </div>
        </div>
        <Link to="/services" className="book-now" state={"hair"}>
          BOOK NOW &gt;{" "}
        </Link>
      </div>
    </section>
  );
};

export default WinterSpecials;
