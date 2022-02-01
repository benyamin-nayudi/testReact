import { useEffect } from "react";
import "./OrderTime.css";

const OrderTime = ({ handleOrderTimeHours, orderTimeHours, orderTimeView }) => {
  useEffect(() => {
    const spans = document.querySelectorAll(".order-time-wrapper span");
    spans.forEach((span) => {
      span.addEventListener("click", (e) => handleOrderTimeHours(e, spans));
    });
  }, [handleOrderTimeHours]);

  return (
    <>
      <div className="order-time-wrapper">
        <div className="morning">
          <p className="order-title">morning</p>
          <span>6:00 am</span>
          <span>6:30 am</span>
          <span>7:00 am</span>
          <span>7:30 am</span>
          <span>8:00 am</span>
          <span>8:30 am</span>
          <span>9:00 am</span>
          <span>9:30 am</span>
          <span>10:00 am</span>
          <span>10:30 am</span>
          <span>11:00 am</span>
          <span>11:30 am</span>
        </div>
        <div
          className={`afternoon ${
            orderTimeView ? "activeTime" : "inactiveTime"
          }`}
        >
          <p className="order-title">afternoon</p>
          <span>12:00 pm</span>
          <span>12:30 pm</span>
          <span>1:00 pm</span>
          <span>1:30 pm</span>
          <span>2:00 pm</span>
          <span>2:30 pm</span>
          <span>3:00 pm</span>
          <span>3:30 pm</span>
          <span>4:00 pm</span>
        </div>

        <div
          className={`evening ${orderTimeView ? "activeTime" : "inactiveTime"}`}
        >
          <p className="order-title">evening</p>
          <span>5:00 pm</span>
          <span>5:30 pm</span>
          <span>6:00 pm</span>
          <span>6:30 pm</span>
          <span>7:00 pm</span>
          <span>7:30 pm</span>
          <span>8:00 pm</span>
          <span>8:30 pm</span>
          <span>9:00 pm</span>
          <span>9:30 pm</span>
          <span>10:00 pm</span>
          <span>10:30 pm</span>
          <span>11:00 pm</span>
          <span>11:30 pm</span>
          <span>00:00 am</span>
        </div>
      </div>
    </>
  );
};

export default OrderTime;
