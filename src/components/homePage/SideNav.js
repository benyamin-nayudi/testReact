import { useEffect } from "react";
import "./sideNav.css";

const SideNav = () => {
  useEffect(() => {
    const sideNavOptions = {
      root: null,
      rootMargin: "-200px",
      threshold: 0.15,
    };
    const sectionToObserve = [
      "home",
      "services",
      "winterSpecials",
      "book-online",
      "testimonial",
      "contact",
    ];

    const sideNavObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionToObserve.map((section) => {
            if (entry.target.id === section) {
              const allLinks = document.querySelectorAll(".side-nav-list a");
              const targetLink = document.querySelector(`#${section}Link`);
              const targetLi = document.querySelector(
                `#${section}Link`
              ).parentElement;
              const allLi = document.querySelectorAll(".side-nav-list li");

              allLi.forEach((li) => li.classList.remove("after-background"));
              targetLi.classList.add("after-background");

              allLinks.forEach((link) => link.classList.remove("active"));
              return targetLink.classList.add("active");
            } else {
              return "";
            }
          });
        }
      });
    }, sideNavOptions);

    document.querySelectorAll("section").forEach((nav) => {
      sideNavObserver.observe(nav);
    });
  }, []);
  return (
    <div className="side-nav">
      <ul className="side-nav-list">
        <li>
          <a id="homeLink" href="#home">
            HOME
          </a>
        </li>
        <li>
          <a id="servicesLink" href="#services">
            SERVICES
          </a>
        </li>
        <li>
          <a id="winterSpecialsLink" href="#winterSpecials">
            WINTER SPECIALS
          </a>
        </li>
        <li>
          <a id="book-onlineLink" href="#book-online">
            BOOK NOW
          </a>
        </li>
        <li>
          <a id="testimonialLink" href="#testimonial">
            TESTIMONIAL
          </a>
        </li>
        <li>
          <a id="contactLink" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
