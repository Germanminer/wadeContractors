import {Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Home from './pages/Home';
import About from "./pages/AboutUs.tsx";
import Services from "./pages/ServicePage.tsx";
import EquipmentHire from "./pages/EquipmentHire.tsx";
import './style.css'
function App() {
  return (
    <>
            <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services/>}/>
              <Route path="/hire" element={<EquipmentHire/>}/>
          </Routes>
    </>
  )
}
export default App
