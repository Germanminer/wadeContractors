import '../style.css'
import Navbar from '../components/Navbar.tsx'
import HeroSlideshow from "../components/HeroSlideshow.tsx";
import ContactForm from "../components/ContactForm.tsx";
function Home() {
    return (
        <>
            <Navbar/>
            <HeroSlideshow/>
            <ContactForm/>
        </>
    )
}
export default Home
