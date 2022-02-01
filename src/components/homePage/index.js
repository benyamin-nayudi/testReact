import Banner from "./Banner";
import Book from "./Book";
import Services from "./Services";
import WinterSpecials from "./WinterSpecials";
import Testimonial from "./Testimonial";
import VisitUs from "./VisitUs";
import SideNav from "./SideNav";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, observer) => {
        if (entry.intersectionRatio) {
          entry.target.classList.remove("unobserve");
          entry.target.classList.add("observe");
        }
      });
    }, options);

    document.querySelectorAll(".unobserve").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div>
      <Banner />
      <SideNav />
      <Services />
      <WinterSpecials />
      <Book />
      <Testimonial />
      <VisitUs />
    </div>
  );
}

export default HomePage;
