import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState("bars");
  const [navbar, setNavbar] = useState(true);

  const handleToggle = () => {
    setToggle(toggle === "bars" ? "times" : "bars");
    setNavbar(!navbar);
  };

  return (
    <nav className="nav-container">
      <div className="nav__inner">
        <div className="logo">
          <a href="/">
            <span>beauty sal</span>
            <sup>oo</sup>
            <span>n</span>
          </a>
        </div>
        <div className="toggle-icon">
          <i onClick={handleToggle} className={`fas fa-${toggle} bars`}></i>
        </div>

        <div className={`nav-items   ${navbar ? "" : "nav-items-deactive"}`}>
          <div className="toggle-icon">
            <i onClick={handleToggle} className="fas fa-times times"></i>
          </div>

          <span className="login">
            <i className="fas fa-user-circle"></i>
            log In
          </span>
          <ul className="nav-list ">
            <li className="nav-item">
              <Link onClick={handleToggle} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#services" onClick={handleToggle}>
                services
              </a>
            </li>
            <li className="nav-item">
              <a href="/#winterSpecials" onClick={handleToggle}>
                specials
              </a>
            </li>
            <li className="nav-item">
              <Link to="/services" onClick={handleToggle}>
                book online
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#contact" onClick={handleToggle}>
                contact
              </a>
            </li>
          </ul>
          <div className="social-container">
            <ul className="nav-social-list">
              <li>
                <i className="fab fa-instagram-square"></i>
              </li>
              <li>
                <i className="fab fa-twitter-square"></i>
              </li>
              <li>
                <i className="fab fa-facebook"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
