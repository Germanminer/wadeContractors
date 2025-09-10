import '../style.css'
import Navbar from '../components/Navbar.tsx'
import ContactForm from "../components/ContactForm.tsx";
import Footer from '../components/Footer.tsx'
import Fillbox from "../components/FillBox.tsx";
function About() {
    return (
        <>
            <Navbar/>
            <div>
                About us - In development
            </div>
            <Fillbox/>
            <ContactForm/>
            <Footer/>
        </>
    )
}
export default About
