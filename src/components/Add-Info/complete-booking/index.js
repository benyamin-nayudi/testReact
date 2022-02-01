import "./CompleteBooking.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CompleteBooking = () => {
  const navigate = useNavigate();

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

  // get the day name from the date
  var date = new Date(`${orderMonth} ${orderDay}, ${orderYear} `);
  var dayName = date.toString().split(" ")[0];

  return (
    <section className="complete-booking-container">
      <div className="complete-booking-content">
        <h1 className="complete-booking-title">great, you're booked!</h1>
        <p className="complete-booking-subtitle">
          A confirmation email is on its way to you.
        </p>
        <button className="calendar-add calendar-mobile">
          Add to My Google Calendar
        </button>
        <div className="final-booking-info">
          <div className="complete-booking-time">
            <span className="day">{orderDay}</span>
            <span className="month">{orderMonth}</span>
            <span className="hour">
              {dayName} {orderHour}
            </span>
          </div>
          <div className="complete-service">
            <h2 className="booked-service-title">{title}</h2>
            <p className="booked-staff">staff member #1</p>
            <p className="service-time">
              {time} | {price}
            </p>
            <button className="calendar-add">Add to My Google Calendar</button>
          </div>
        </div>
        <Link to="/" className="check-out-more">
          Check out more services
        </Link>
      </div>
    </section>
  );
};

export default CompleteBooking;
