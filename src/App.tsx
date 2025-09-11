import {Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from './pages/Home';
import About from "./pages/AboutUs.tsx";
import Services from "./pages/ServicePage.tsx";
import EquipmentHire from "./pages/EquipmentHire.tsx";
//Services
import EarthMovingSiteWorks from "./pages/services/EarthMovingSiteWorks.tsx";
import Culverts from "./pages/services/Culverts.tsx";
import EffluentPondConstruction from "./pages/services/EffluentPondConstruction.tsx";
import EffluentSpreading from "./pages/services/EffluentSpreading.tsx";
import LaserGraderHireage from "./pages/services/LaserGraderHireage.tsx";
import TrackAndRaceRepairs from "./pages/services/TrackAndRaceRepairs.tsx";
import LaserDrainage from "./pages/services/LaserDrainage.tsx";
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
              <Route path="/services/effluent-spreading" element={<EffluentSpreading/>}/>
              <Route path="/services/track-and-race-repairs" element={<TrackAndRaceRepairs />} />
              <Route path="/services/effluent-construction" element={<EffluentPondConstruction />} />
              <Route path="/services/laser-grader-hireage" element={<LaserGraderHireage />} />
              <Route path="/services/laser-drainage" element={<LaserDrainage />} />
          </Routes>
    </>
  )
}
export default App
