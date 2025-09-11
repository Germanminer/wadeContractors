import '../style.css'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar.tsx'
import HeroSlideshow from "../components/HeroSlideshow.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Socials from "../components/Socials.tsx"
import Footer from "../components/Footer.tsx";
import Service from "../components/Service.tsx";
import Slideshow from "../components/Slideshow.tsx";
import VideoPlayer from "../components/VideoPlayer.tsx";
const displayServices = [
    {src: "/servicePics/EarthMovingSiteWorks.jpg", text: "Earth moving & Site Works", link: "/services/earth-Moving-Site-works"},
    {src: "/culvert.webp", text: "Culverts", link: "/services/culverts"},
    {src: "/servicePics/EffluentSpreading.jpg", text: "Effluent Spreading", link: "/services/effluent-spreading"},
];
const slideShowImages = [
    "/culvert.webp",
    "/digger.png",
    "/excavator.jpg",
    "/culvert.webp",
    "/digger.png",
    "/excavator.jpg",
    "/culvert.webp",
    "/digger.png",
    "/excavator.jpg",
    "/culvert.webp",
    "/digger.png",
    "/excavator.jpg",
    "/culvert.webp",
    "/digger.png",
    "/excavator.jpg",
    "/culvert.webp",
    "/digger.png",
    "/excavator.jpg",

]
function Home() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <HeroSlideshow/>
            <div className="md:flex items-center justify-between max-w-7xl mx-auto p-6">
                <div className="max-w-5xl mx-auto px-6 py-12 md:text-xl text-lg text-gray-800 text-center">
                    <h1 className='text-2xl font-semibold mb-5'>
                        Welcome to Wade Contractors
                    </h1>
                    <p>
                        We are a family-based business providing agricultural contracting in the Waikato for over 30
                        years. As dairy and goat farmers ourselves, we understand your needs and aim to provide
                        exceptional service. Browse our site for services, photos, and videos — and don’t hesitate to
                        get in touch!
                    </p>
                    <Link to={"about"} className='text-sm'>Read more...</Link>
                </div>
                <div className="ml-6">
                    <Socials/>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {displayServices.map(function (_service, index) {
                        return <Service {..._service} key={index}/>
                    })}
                </div>
            </div>
            <div className="max-w-4xl mx-auto p-4">
                <div className="text-center mb-4">
                    <Link to="/services">
                        <h3 className="text-2xl font-semibold mb-2">
                            Wade Contractors in Action
                        </h3>
                        <h3 className="text-xl">
                            Visit our services for more information
                        </h3>
                    </Link>
                </div>
                <Slideshow images={slideShowImages}/>
            </div>
            <div className="max-w-6xl mx-auto p-4 mb-15">
                <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">
                        Feature Videos
                    </h3>
                    <h4 className="text-l mb-2">
                        You will find more videos on our services pages, if there's anything you need more information on just give us a call or fill out the contact form in the bottom right.
                    </h4>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <VideoPlayer src="/videos/graterBlade.mp4" type="video/mp4"/>
                    <VideoPlayer src="/videos/graterBlade2.mp4" type="video/mp4"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home
