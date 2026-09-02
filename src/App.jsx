import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout/MainLayout';
import Vlog from './pages/Vlog/Vlog';
import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';
import Tours from './pages/Tours/Tours';
import Contact from './pages/Contact/Contact';
import DestinationBooking from "./pages/Booking/DestinationBooking";
import TourPackageBooking from "./pages/Booking/TourPackageBooking";
import DestinationDetail from "./pages/Destinations/DestinationDetail";
import TourPackageDetail from "./pages/Tours/ToursDetail";

function App() {
  return (

    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />}> </Route>
        <Route path="/vlog" element={<Vlog />}> </Route>
        <Route path="/destinations" element={<Destinations />}> </Route>
        <Route path="/tours" element={<Tours />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/destinations/:destinationId" element={<DestinationDetail />}> </Route>
        <Route path="/booking/destinations/:destinationId" element={<DestinationBooking />}></Route>
        <Route path="/tourPackages/:tourPackageId" element={<TourPackageDetail />}></Route>
        <Route path="/booking/tourPackages/:tourPackageId" element={<TourPackageBooking />}></Route>

      </Route>

    </Routes>

  );
}

export default App;