import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";
import renderCalendar, { date } from "./CalendarGenerator";
import OrderTime from "./OrderTime";
import { setUserData } from "../store/services";

const Calendar = () => {
  const dispatch = useDispatch();

  const [orderTime, setOrderTime] = useState(false);
  const [availableTime, setAvailableTime] = useState(false);
  const [viewTogglerBtn, setViewTogglerBtn] = useState(false);

  //create a navigate function for the back btn
  const navigate = useNavigate();

  // change the state of hour in floating box
  const [orderHour, setOrderHour] = useState("");

  // change the state of hour in floating box
  const [orderDay, setOrderDay] = useState("");

  // change the state of month in floating box
  const [orderMonth, setOrderMonth] = useState("");

  // change the state of year in floating box
  const [orderYear, setOrderYear] = useState("");

  // get the service data from store
  const serviceData = useSelector(
    (state) => state.entities.services.userServices
  );

  // an object containing information needed about users choices (will be store in redux)
  const infoObj = {
    orderDay,
    orderMonth,
    orderYear,
    orderHour,
    price: serviceData.price,
    title: serviceData.title,
    time: serviceData.time,
  };

  // set error message for not selecting any time or day in the calendar
  const [infoNeeded, setInfoNeeded] = useState(false);

  useEffect(() => {
    // navigate to home page is the page refreshes
    !Object.keys(serviceData).length && navigate("/");

    // select month-name, year and calendar-days spans
    const monthName = document.querySelector(".month-name");
    const calendarDays = document.querySelector(".calendar-days");
    const year = document.querySelector(".year");

    //select month and year span for mobile view
    const mobileMonthName = document.querySelector(".time-mobile .month-name");
    const mobileYear = document.querySelector(".time-mobile .year");

    //render two calendars for mobile and desktop
    renderCalendar(mobileMonthName, mobileYear, calendarDays);
    renderCalendar(monthName, year, calendarDays);

    // attach event listener to all .back-time btns
    document.querySelectorAll(".back-time").forEach((btn) => {
      btn.addEventListener("click", () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar(mobileMonthName, mobileYear, calendarDays);
        renderCalendar(monthName, year, calendarDays);

        //creating click event for days available and unavailable td.
        attachAvailableEventListener();
        attachUnAvailableEventListener();
      });
    });

    // attach event listener to all .forward-time btns
    document.querySelectorAll(".forward-time").forEach((btn) => {
      btn.addEventListener("click", () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar(monthName, year, calendarDays);
        renderCalendar(mobileMonthName, mobileYear, calendarDays);

        //creating click event for days available and unavailable td.
        attachAvailableEventListener();
        attachUnAvailableEventListener();
      });
    });

    // attach event listener to today btn
    document.querySelector(".today-btn").addEventListener("click", () => {
      //reset date object ro show today
      date.setMonth(new Date().getMonth());
      date.setFullYear(new Date().getFullYear());
      date.setDate(new Date().getDate());

      renderCalendar(monthName, year, calendarDays);

      //creating click event for days available and unavailable td.
      attachAvailableEventListener();
      attachUnAvailableEventListener();
    });

    //creating click event for days available td.
    function attachAvailableEventListener() {
      document
        .querySelectorAll('.calendar-days td:not([class*="date"])')
        .forEach((td) => {
          td.addEventListener("click", (e) => {
            setAvailableTime(false);

            setOrderTime(true); //show order time component

            setViewTogglerBtn(true); //toggle the hours

            // scroll to top for calendar-days td
            window.scrollTo({
              top: 800,
              behavior: "smooth",
            });

            // set Day , year and month name in the floating div
            setOrderDay(e.target.innerText);
            setOrderYear(date.getFullYear());
            setOrderMonth(() => {
              const month = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
              const monthNum = date.getMonth();
              return month[monthNum];
            });
          });
        });
    }
    // fire the function at the beginning of page render
    attachAvailableEventListener();

    //creating click event for days unavailable td.
    function attachUnAvailableEventListener() {
      document
        .querySelectorAll('.calendar-days [class*="date"]')
        .forEach((td) => {
          td.addEventListener("click", (e) => {
            setOrderTime(false);
            setAvailableTime(true);

            // scroll to top for calendar-days td
            window.scrollTo({
              top: 800,
              behavior: "smooth",
            });
          });
        });
    }
    // fire the function at the beginning of page render
    attachUnAvailableEventListener();

    //  creating click event for order time span
    const orderSpans = document.querySelectorAll(".order-time-wrapper span");
    orderSpans.forEach((span) => {
      span.addEventListener("click", (e) => {
        orderSpans.forEach((span) => {
          span.classList.remove("active");
        });

        e.target.classList.add("active");
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [orderTimeHours, setOrderTimeHours] = useState(null);

  //add active class to the selected time in the hours section
  const handleOrderTimeHours = (e, spans) => {
    const targetElementClassList = Array.from(e.target.classList);
    const spansArray = Array.from(spans);

    // removing active class from all spans
    spansArray.map((span) => {
      return span.classList.remove("active");
    });

    // adding active class to the target span
    targetElementClassList.includes("active")
      ? setOrderTimeHours(e.target.classList.remove("active"))
      : setOrderTimeHours(e.target.classList.add("active"));

    // scroll to top of the page if it was in desktop view
    if (window.innerWidth > 900) {
      window.scrollTo({
        top: 250,
        behavior: "smooth",
      });
    }

    // set the order time in floating div
    setOrderHour(e.target.innerText);
  };

  const [orderTimeView, setOrderTimeView] = useState(false);

  const handleView = () => {
    setOrderTimeView(!orderTimeView);
  };

  return (
    <section className="calendar-container">
      <div className="calendar-cover">
        <button onClick={() => navigate(-1)} className="calendar-link">
          {" "}
          &lt; Back
        </button>
        <div className="calendar-wrapper">
          <div className="calendar-content">
            <h1 className="calendar-title">Schedule Online</h1>
            <div className="calendar">
              <p className="time-zone">
                denmark time (GMT +01:00){" "}
                <span className="local-time-zone">
                  view in my local time zone
                </span>
              </p>

              {/* desktop view of buttons */}
              <div className="calendar-btn">
                <div className="time">
                  <span className="month-name">
                    {/* month name goes here */}
                  </span>
                  <span className="year">{/* year goes here */}</span>
                </div>

                <div className="back-forward-btn">
                  <button className="back-time"> &lt;</button>
                  <button className="forward-time"> &gt;</button>
                </div>
                <button className="today-btn">Today</button>
              </div>

              {/* mobile view of buttons */}
              <div className="calendar-btn-mobile">
                <div className="time-mobile">
                  <button className="back-time"> &lt;</button>

                  <p className="month-year">
                    <span className="month-name">{/* month here */}</span>.
                    <span className="year">{/* years here */}</span>
                  </p>

                  <button className="forward-time"> &gt;</button>
                </div>
              </div>

              <div className="calendar-table-container">
                <div className="calendar-table-content">
                  <table className="calendar-table">
                    <thead className="weekdays">
                      <tr>
                        <th>sun.</th>
                        <th>mon.</th>
                        <th>tue.</th>
                        <th>wed.</th>
                        <th>thu.</th>
                        <th>fri.</th>
                        <th>sat.</th>
                      </tr>
                    </thead>
                    <tbody className="calendar-days"></tbody>
                  </table>
                </div>
              </div>

              {/* toggle betweeen weekly and montyly view */}

              {/* <button className="toggle-weekly">Weekly view </button> */}
              {/* <button className="toggle-monthly">Monthly view </button> */}

              {/* mobile time zone */}
              <div className="time-zone-mobile-view">
                <p>select a time</p>
                <p className="time-zone-mobile">Jerusalem time (GMT +02:00) </p>
                <span className="local-time-zone">change</span>
              </div>

              {availableTime && (
                <div className="unavailable">
                  <p>this time is unavailable</p>
                </div>
              )}

              {orderTime ? (
                <OrderTime
                  orderTimeView={orderTimeView}
                  handleOrderTimeHours={handleOrderTimeHours}
                  orderTimeHours={orderTimeHours}
                />
              ) : null}

              <button
                onClick={handleView}
                className={`${
                  viewTogglerBtn ? "time-order-view" : "inactive"
                } `}
              >
                Change View{" "}
              </button>

              {/* if it was in mobile view port go to /info-review (infoMobileAddInformation) component and show error if client didn't choose data */}
              <button
                onClick={() => {
                  if (!infoObj.orderDay || !infoObj.orderHour) {
                    setInfoNeeded(true);
                  } else {
                    dispatch(setUserData(infoObj));
                    navigate("/info-review");
                  }
                }}
                className="submit-info"
              >
                Next
              </button>

              {infoNeeded && (
                <p className="calendar-error">
                  please select all needed information
                </p>
              )}
            </div>
          </div>

          {/* floating div containing info about order : time,  title,  day , price ... . it gets the data from useLocation state object that comes from singleService component*/}
          <div className="calendar-floating">
            <h2 className="floating-service">{serviceData.title}</h2>
            <p className="floating-time">
              {serviceData.time} | {serviceData.price}
            </p>
            {orderDay && (
              <div>
                <hr />
                <p className="floating-date">
                  <span>{orderMonth}</span>,<span>{orderDay}</span>,
                  <span>{orderYear}</span>
                  <span>{orderHour}</span>
                </p>
              </div>
            )}

            {/* set a btn so if the client didn't select anything shows warning */}
            <button
              onClick={() => {
                if (!infoObj.orderDay || !infoObj.orderHour) {
                  setInfoNeeded(true);
                } else {
                  dispatch(setUserData(infoObj));
                  navigate("/information");
                }
              }}
              className="calendar-floating-btn"
            >
              Next
            </button>

            {infoNeeded && (
              <p className="calendar-error">
                please select all needed information
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
