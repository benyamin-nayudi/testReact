import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content ">
        <div className="footer-social">
          <ul className="footer-social-list">
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
        <p className="creator ">
          © 2021 by Beauty Saloon. Proudly created by{" "}
          <span>Benyamin Nayudi</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
