import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Coupon from "../coupon";
import "./InfoMobileAddInformation.css";
import { isAlpha, isEmail } from "validator";

const InfoMobileAddInformation = () => {
  const navigate = useNavigate();

  const [openCoupon, setOpenCoupon] = useState(false);
  const toggleCoupon = (e) => {
    e.preventDefault();
    setOpenCoupon(!openCoupon);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [tel, setTel] = useState("");
  const [message, messageHandler] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [error, setError] = useState(false);

  return (
    <section className="info-mobile-add-information">
      <button onClick={() => navigate(-1)} className="info-back-btn">
        {" "}
        &lt; Back
      </button>
      <div className="add-info-wrapper">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="info-mobile-form-inputs"
        >
          <input
            placeholder="Name *"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="fname"
            type="text"
            id="fname"
            required
          />
          <input
            placeholder="Email *"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            type="email"
            id="email"
            required
          />
          <input
            placeholder="Phone Number"
            name="tel"
            type="tel"
            id="phone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <textarea
            placeholder="Add your Message"
            name="message"
            id="message"
            value={message}
            onChange={(e) => messageHandler(e.target.value)}
          ></textarea>

          <Coupon toggleCoupon={toggleCoupon} openCoupon={openCoupon} />

          <button
            onClick={(e) => {
              if (!isAlpha(name) || !isEmail(email)) {
                e.preventDefault();
                setError(true);
              } else {
                navigate("/finish");
              }
            }}
            className="info-submit"
          >
            Book It
          </button>
          {error && (
            <div className="info-form-error">
              {!isEmail(email) && <p>invalid email address</p>}
              {!isAlpha(name) && <p>your name should not contain numbers</p>}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default InfoMobileAddInformation;
