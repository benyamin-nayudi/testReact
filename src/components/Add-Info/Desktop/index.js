import { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAlpha, isEmail } from "validator";

import Coupon from "../coupon";

import "./Info.css";

const InfoDesktop = () => {
  const [openCoupon, setOpenCoupon] = useState(false);
  const toggleCoupon = (e) => {
    e.preventDefault();
    setOpenCoupon(!openCoupon);
  };

  const navigate = useNavigate();

  const form = useRef();
  const formHandler = (e) => {
    e.preventDefault();
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [tel, setTel] = useState("");
  const [message, messageHandler] = useState("");

  // error for not completing the inputs
  const [error, setError] = useState(false);

  // get the data from store
  const serviceDate = useSelector(
    (state) => state.entities.services.userServices
  );

  var { orderDay, orderMonth, orderHour, orderYear, price, time, title } =
    serviceDate;

  useEffect(() => {
    // navigate to home page is the page refreshes
    !Object.keys(serviceDate).length && navigate("/");
  }, [navigate, serviceDate]);

  return (
    <section className="info-container">
      <div className="info-wrapper">
        <div className="info">
          <button onClick={() => navigate(-1)} className="info-back-btn">
            {" "}
            &lt; Back{" "}
          </button>

          <div className="info-content">
            <h2 className="info-title">add your info</h2>
            <p className="info-subtitle">Tell us a bit about yourself</p>

            <form
              onSubmit={(e) => formHandler(e)}
              ref={form}
              className="info-form"
            >
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
                <h3 className="floating-title">{title}</h3>
                <p className="info-price-hour">
                  {time} | {price}
                </p>
                <hr />
                <p className="info-time">
                  {orderMonth} {orderDay},{orderYear} {orderHour}
                </p>
                <hr />

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
                  className="submit"
                >
                  book it{" "}
                </button>
                {error && (
                  <div className="calendar-error">
                    {!isEmail(email) && <p>invalid email address</p>}
                    {!isAlpha(name) && (
                      <p>your name should not contain numbers</p>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoDesktop;
