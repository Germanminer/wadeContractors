import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/AboutUs.tsx";
import './style.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
export default App
