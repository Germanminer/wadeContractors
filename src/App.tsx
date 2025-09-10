import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/AboutUs.tsx";
import Services from "./pages/ServicePage.tsx";
import EquipmentHire from "./pages/EquipmentHire.tsx";
import './style.css'
function App() {
  return (
    <>
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
