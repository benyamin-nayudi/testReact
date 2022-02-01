import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/services";

const SingleService = ({ service }) => {
  const dispatch = useDispatch();

  window.scrollTo(0, 0);

  return (
    <>
      <div className="services-section">
        <div className="single-service">
          <div className="single-service-desc">
            <h2>{service.title}</h2>
            <p>{service.body}</p>
          </div>
          <div className="single-hour-price">
            <span>{service.time}</span>
            <span>{service.price}</span>
          </div>
          <Link
            to="/book"
            className="single-service-btn"
            onClick={() => dispatch(setUserData(service))}
            state={service}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleService;
