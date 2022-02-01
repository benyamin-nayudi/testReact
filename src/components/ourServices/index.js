import "./OurServices.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SingleService from "./SingleService";

const OurServices = () => {
  //get the data from homepage's  link
  const location = useLocation();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // get the data from the store
  const data = useSelector((state) => state.entities.services.data);

  useEffect(() => {
    if (!location.state) {
      const filteredData = data.filter((item) => item.type === "nails");
      setLoading(false);
      setServices(filteredData);
    } else {
      const filteredData = data.filter((item) => item.type === location.state);
      setLoading(false);
      setServices(filteredData);
    }

    // this function is the same function for moving the marker div
    const moveMarker = function moveMarker(offset, width) {
      const marker = document.querySelector(".selected-item");
      const header = document.querySelector(".headers");
      const elementOffset = offset - header.offsetLeft;

      marker.style.width = width + "px";
      marker.style.transform = `translate(${elementOffset}px, -3px)`;
    };

    // check if client manually comes to services page load nails data
    if (location.state === null) {
      // get the nails element
      let targetElement = document.querySelector(`#nails`);
      let offset = targetElement.offsetLeft;
      let width = targetElement.getBoundingClientRect().width;

      // move the marker to the nails element
      moveMarker(offset, width);
    } else {
      // get the target element that link is going to fetch its data
      let targetElement = document.querySelector(`#${location.state}`);
      let offset = targetElement.offsetLeft;
      let width = targetElement.getBoundingClientRect().width;

      // move the marker to the specific element
      moveMarker(offset, width);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // filter data by client selected item
  const filterServices = (e) => {
    let filteredData;

    e.target.nodeName === "SELECT"
      ? (filteredData = data.filter((item) => item.type === e.target.value))
      : (filteredData = data.filter((item) => item.type === e.target.id));

    setServices(filteredData);
    setLoading(false);
  };

  // border effect functions
  useEffect(() => {
    //get element offset
    const getItemOffset = function getItemOffset(item) {
      return item.offsetLeft;
    };

    //move the div (border)
    const moveMarker = function moveMarker(offset, width) {
      const marker = document.querySelector(".selected-item");
      const header = document.querySelector(".headers");
      const elementOffset = offset - header.offsetLeft;

      marker.style.width = width + "px";
      marker.style.transform = `translate(${elementOffset}px, -3px)`;
    };

    //get the width and offset of the element
    const toggleActive = function toggleActive(e) {
      e.preventDefault();

      if (e.target.tagName === "LI") {
        const links = document.querySelectorAll(".menu-item");

        links.forEach((link) => link.classList.remove("selected-item"));

        const activeItem = e.target;

        const offset = getItemOffset(activeItem);
        const width = activeItem.getBoundingClientRect().width;
        moveMarker(offset, width);
      }
    };

    const menu = document.querySelector(".headers-list");
    menu.addEventListener("click", toggleActive);
  }, []);

  return (
    <section className="our-services-container">
      <h1 className="fancy-border our-services-title">Our Services</h1>
      <div className="our-services">
        {/*desktop view of the selection box  */}
        <div className="headers">
          <ul onClick={(e) => filterServices(e)} className="headers-list ">
            <li id="nails" className="menu-item">
              nails
            </li>
            <li id="hair" className="menu-item">
              hair
            </li>
            <li id="facial" className="menu-item">
              facial
            </li>
          </ul>
          <div className="selected-item"></div>
        </div>

        {/* mobile view of the selection */}
        <div className="select">
          <select
            onChange={(e) => filterServices(e)}
            className="select-services"
          >
            <option id="nails" value="nails">
              nails
            </option>
            <option id="hair" value="hair" defaultValue={"hair"}>
              hair
            </option>
            <option id="facial" value="facial">
              facial
            </option>
          </select>
        </div>

        {loading && <div className="lds-dual-ring"></div>}
        {services.map((service) => (
          <SingleService key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
