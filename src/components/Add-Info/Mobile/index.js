import { useState } from "react";
import Coupon from "../coupon";
import "../Desktop/Info.css";
import { useNavigate } from "react-router-dom";

const InfoMobile = () => {
  const [openCoupon, setOpenCoupon] = useState(false);
  const toggleCoupon = (e) => {
    e.preventDefault();
    setOpenCoupon(!openCoupon);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [tel, setTel] = useState("");
  const [message, messageHandler] = useState("");

  const navigate = useNavigate();

  return (
    <section className="info-container">
      <div className="info-wrapper">
        <div className="info">
          <button onClick={() => navigate(-1)} className="info-back-btn">
            {" "}
            &lt; Back
          </button>

          <div className="info-content">
            <h2 className="info-title">add your info</h2>
            <p className="info-subtitle">Tell us a bit about yourself</p>

            <form action="" className="info-form">
              <div className="form-inputs">
                <label htmlFor="fname">Name *</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="fname"
                  type="text"
                  id="fname"
                  required
                />

                <label htmlFor="email">Email *</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  type="email"
                  id="email"
                  required
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                  name="tel"
                  type="tel"
                  id="phone"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />

                <label htmlFor="message">Add your message</label>
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => messageHandler(e.target.value)}
                ></textarea>

                <p className="required">* required info</p>
              </div>

              <div className="info-floating-box">
                <h3 className="floating-title">full mani-pedi </h3>
                <p className="info-price-hour">1 hr 30 min | $60</p>
                <hr />
                <p className="info-time">december 10,2021 4:30 pm</p>
                <hr />

                <Coupon toggleCoupon={toggleCoupon} openCoupon={openCoupon} />

                <button className="submit">book it </button>
                <p className="info-error">
                  complete the requirement fields to continue
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoMobile;
