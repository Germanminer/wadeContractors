import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"

export default function LaserGraderHireage() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className="max-w-7xl mx-auto p-6 flex flex-col items-center text-center space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                    Laser Grader Hireage
                </h2>
                <div className="space-y-3 max-w-2xl text-gray-600">
                    <p>
                        WATCH OUR VIDEO BELOW TO SEE THE LASER GRADER IN ACTION – WHEN YOUR PROJECT NEEDS TO BE PRECISE
                        GIVE US A CALL.
                    </p>
                    <p className="font-semibold text-gray-800">
                        THE LASER GRADER IS ALSO AVAILABLE FOR HIRE.
                    </p>
                </div>
                <video controls className="w-full max-w-3xl shadow-xl ">
                    <source src="/videos/laser_grader_blade_for_hire_1_837.mp4" type="video/mp4"/>
                </video>
            </div>
            <Footer/>
        </>
    )
}