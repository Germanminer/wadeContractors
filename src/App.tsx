import {Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from './pages/Home';
import About from "./pages/AboutUs.tsx";
import Services from "./pages/ServicePage.tsx";
import EquipmentHire from "./pages/EquipmentHire.tsx";
//Services
import EarthMovingSiteWorks from "./pages/services/EarthMovingSiteWorks.tsx";
import Culverts from "./pages/services/Culverts.tsx";
import './style.css'
function App() {
  return (
    <>
            <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
              <Route path="/hire" element={<EquipmentHire/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/services/earth-Moving-Site-works" element={<EarthMovingSiteWorks/>}/>
              <Route path="/services/culverts" element={<Culverts/>}/>
          </Routes>
    </>
  )
}
export default App
