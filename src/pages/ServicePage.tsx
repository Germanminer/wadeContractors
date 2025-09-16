import '../style.css'
import Navbar from '../components/Navbar.tsx'
import ContactForm from "../components/ContactForm.tsx";
import Service from "../components/Service.tsx";
import Footer from "../components/Footer.tsx"
const services = [
    {src:"/excavator.jpg", text: "Earth moving & Site Works",link:"/services/earth-Moving-Site-works"},
    {src:"/servicePics/laserBlade.jpg",text:"Laser grader Hireage",link:"/services/laser-grader-hireage"},
    {src:"/servicePics/LaserDrainage.jpg",text:"Laser Drainage",link:"/services/laser-drainage"},
    {src:"/culvert.webp", text: "Culverts", link: "/services/culverts"},
    {src:"/servicePics/EffluentSpreading.jpg", text: "Effluent Spreading",link: "/services/effluent-spreading"},
    {src:"/servicePics/motorGrader.jpg",text:"Track & Race Repairs",link:"/services/track-and-race-repairs"},
    /*{src: "/servicePics/EffluentPond.jpg", text: "Effluent Pond Construction", link: "/services/effluent-construction"},*/
]

function Services() {
    return (
        <>
            <meta name="description" content="Earthmoving | Effluent management | Precision levelling · Wade Contractors - Earthmoving, effluent management, laser drainage Waikato farm contractors."/>
            <meta name="keywords"
                  content="Agricultural Contracting, Farm Services, Earth Moving, Site Works, Culverts and Bridges,
                   Effluent Spreading, Track and Race Repairs, Laser Grader Hire, Laser Drainage, Farm earthmoving services,
                   Agricultural site preparation, Bridge and culvert construction, Effluent management services, Farm track maintenance,
                   Race track repairs, Precision laser grading, Drainage solutions for farms, Rural contracting services"/>

            <meta name="language" content="English"/>
            <meta name="author" content="Pascal Burri"/>
            <Navbar/>
            <ContactForm/>
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Services</h1>
                    <p className="mb-8 text-gray-800">
                        Here's an introduction into what we do, click through the titles for more information, then feel
                        free to give us a call or use our contact form.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(function (_service, index) {
                        return <Service {..._service} key={index}/>
                    })}
                </div>
                <p className="mt-8 text-gray-800 min-w-1/2 max-w-3/4">Give us a call if you have a project that you
                    think we could help with that doesn't quite fit into these categories.
                    We can apply our services and expertise to any kind of farm contracting project and we would be
                    happy to discuss your requirements with you.
                    Call or email us today and get the ball rolling.</p>
            </div>
            <Footer/>
        </>
    )
}

export default Services