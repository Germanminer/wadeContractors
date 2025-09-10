import '../style.css'
import Navbar from '../components/Navbar.tsx'
import HeroSlideshow from "../components/HeroSlideshow.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Socials from "../components/Socials.tsx"
import Fillbox from "../components/FillBox.tsx";
import Footer from "../components/Footer.tsx";
function Home() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <HeroSlideshow/>
            <Socials/>
            <Fillbox/>
            <Footer/>
        </>
    )
}

export default Home
