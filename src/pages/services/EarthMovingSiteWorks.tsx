import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
export default function EarthMovingSiteWorks() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className="h-[700px]">
                <p className='text-3xl text-center mt-10'>
                    Nothing Here yet
                </p>
            </div>
            <Footer/>
        </>
    )
}