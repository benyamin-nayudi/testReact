import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar/index";
import Footer from "./components/footer";
import OurServices from "./components/ourServices";
import Calendar from "./components/Calendar";
import InfoDesktop from "./components/Add-Info/Desktop";
import InfoMobileAddInformation from "./components/Add-Info/Mobile/InfoMobileAddInformation";
import InfoMobileReview from "./components/Add-Info/Mobile/InfoMobileReview";
import CompleteBooking from "./components/Add-Info/complete-booking/";
import Directions from "./components/Directions";
import NotFound from "./components/NotFound";
import HomePage from "./components/homePage";

import { useDispatch } from "react-redux";
import { ActionFetchServices } from "./components/store/middleware/api";

function App() {
  const dispatch = useDispatch();

  // fetch the data from database
  useEffect(() => {
    dispatch(ActionFetchServices());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/book" element={<Calendar />} />

          <Route path="/information" element={<InfoDesktop />} />

          {/* information component splitted into two components for mobile view */}
          <Route path="/info-review" element={<InfoMobileReview />} />
          <Route path="/info" element={<InfoMobileAddInformation />} />

          <Route path="/finish" element={<CompleteBooking />} />
          <Route path="/directions" element={<Directions />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
