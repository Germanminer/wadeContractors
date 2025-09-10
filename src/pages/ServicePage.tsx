import '../style.css'
import Navbar from '../components/Navbar.tsx'
import ContactForm from "../components/ContactForm.tsx";
import Service from "../components/Service.tsx";
import Footer from "../components/Footer.tsx"
const services = [
    {src:"/servicePics/EarthMovingSiteWorks.jpg", text: "Earth moving & Site Works",link:"/earth-Moving-Site-works"},
    {src:"/culvert.png", text: "Culverts", link: "/culverts"},
    {src:"/servicePics/EffluentSpreading.jpg", text: "Effluent Spreading",link: "/effluent-spreading"},
    {src:"/servicePics/TrackAndRaceRepairs.jpg",text:"Track & Race Repairs",link:"/track-and-race-repairs"},
    {src: "/servicePics/EffluentPond.jpg", text: "Effluent Pond Construction", link: "/effluent-construction"},
    {src:"/servicePics/LasergraderHireage.jpg",text:"Laser grader Hireage",link:"/laser-grader-hireage"},
    {src:"/servicePics/LaserDrainage.jpg",text:"Laser Drainage",link:"/laser-drainage"},
    {src:"/digger.png",text:"Digger digging hole",link:"/"},
]

function Services() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div>
                <h1 className="text-3xl font-bold text-gray-900">Services</h1>
                <p className="text-gray-800 mb-8">
                    Here's an introduction into what we do, click through the titles for more information, then feel free to give us a call or use our contact form.
                </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(function (_service, index) {
                        return <Service {..._service} key={index}/>
                    })}
                </div>
                <p className="text-gray-800 mt-8 min-w-1/2 max-w-3/4">Give us a call if you have a project that you think we could help with that doesn't quite fit into these categories.
                    We can apply our services and expertise to any kind of farm contracting project and we would be happy to discuss your requirements with you.
                    Call or email us today and get the ball rolling.</p>
            </div>
            <Footer/>
        </>
    )
}

export default Services