import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/AboutUs.tsx";
import Services from "./pages/ServicePage.tsx";
import './style.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/servicePage" element={<Services/>}/>
      </Routes>
    </>
  )
}
export default App
