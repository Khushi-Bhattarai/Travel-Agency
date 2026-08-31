import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout/MainLayout';
import Vlog from './pages/Vlog/Vlog';
import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';
import Tours from './pages/Tours/Tours';
import Contact from './pages/Contact/Contact';
import DestinationDetail from "./pages/Destinations/DestinationDetail";
import Booking from "./pages/Booking/Booking";

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
        <Route path="/booking/:destinationId" element={<Booking />}></Route>

      </Route>

    </Routes>

  );
}

export default App;