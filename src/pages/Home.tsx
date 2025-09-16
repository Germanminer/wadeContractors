import '../style.css'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar.tsx'
import HeroSlideshow from "../components/HeroSlideshow.tsx";
import ContactForm from "../components/ContactForm.tsx";
import Socials from "../components/Socials.tsx"
import Footer from "../components/Footer.tsx";
import Service from "../components/Service.tsx";
import Slideshow from "../components/Slideshow.tsx";
import YoutubeEmbed from "../components/YoutubeEmbed.tsx";
import FacebookPageEmbed from "../components/FacebookPageEmbed.tsx";
const displayServices = [
    {src: "/excavator.jpg", text: "Earth moving & Site Works", link: "/services/earth-Moving-Site-works"},
    {src: "/culvert.webp", text: "Culverts", link: "/services/culverts"},
];
const slideShowImages = [
    "/culvert.webp",
    "/team.jpg",
    "/digger.webp",
    "/homeSlideShow/scraper.jpg",
    "/mainHeroSlideshowTractorWTrailer.jpg",
    "/roller.jpg",
    "/homeSlideShow/EffluentSpreaderHome.jpg",
    "/homeSlideShow/wetEffluentSpreader.jpg",
    "/EffluentPics/EffluentSpreadingOutside.jpg",
    "/EffluentPics/EffluentSpreaderOutside2.jpeg",
    "/EffluentPics/EffluentLoading.jpeg",
    "/drainagePics/photo-4_orig.jpg",
    "/drainagePics/photo-1_orig.jpg",
    "/drainagePics/photo-2_orig.jpg",
    "/drainagePics/sidedigger_orig.jpg",
    "drainagePics/img-8149_orig.jpg"
]
function Home() {
    return (
        <>
            <meta
                name="keywords"
                content="Dairy Effluent, effluent spreading, excavation, earthmoving, site works, effluent pond liner,
                pond construction, effluent, sand and metal cartage, transport, agricultural contractor, grader, long reach digger,
                goat farming, New Zealand goat farming, grader hire Waikato, race repair, track repair, goat shed construction,
                dairy effluent, truck hire, cartage, tractor hire, muckspreader hire, laser drainage consultancy, laser drainage,
                 dry hire agricultural equipment, Wades, Kevin Wade, Wade Contractors, Wade Farms, earthworks Waikato, Klinton Wade,
                 Farm Races, agricultural contracting, sub soil drainage, novaflow laying, novaflow drainage, dairy effluent, goat,
                 cow, excavation, earthmover"
            />
            <meta
                name="description"
                content="Providing agricultural contracting services in Waikato for over 30 years."
            />
            <meta name="language" content="English"/>
            <meta name="author" content="Pascal Burri"/>
            <meta property="og:url" content="https://wadecontractors.pages.dev/"/>
            <meta property="og:site_name" content="Wade Contractors - Earthmoving, effluent management, laser drainage Waikato farm contractors"/>
            <meta property="og:title" content="Wade Contractors"/>
            <meta
                property="og:description"
                content="Wade Contractors - Earthmoving, effluent management, laser drainage Waikato farm contractors.
                 Phone 0277 250 250. Location Waikato. Earthmoving and site works."
            />
            <meta property="og:type" content="website"/>
            <meta property="og:image" content="/team.jpg"/>
            <link rel="preconnect" as='image' href='/team.jpg'/>
            <Navbar/>
            <ContactForm/>
            <HeroSlideshow/>
            <div className="mx-auto max-w-7xl items-center justify-between p-6 md:flex">
                <div className="mx-auto max-w-5xl px-6 py-12 text-center text-lg text-gray-800 md:text-xl">
                    <h1 className='mb-5 text-2xl font-semibold'>
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
            <div className="mx-auto max-w-7xl px-6 md:py-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {displayServices.map(function (_service, index) {
                        return <Service {..._service} key={index}/>
                    })}
                </div>
            </div>
            <div className="mx-auto max-w-4xl p-4">
                <div className="mb-4 text-center">
                    <Link to="/services">
                        <h3 className="mb-2 text-2xl font-semibold">
                            Wade Contractors in Action
                        </h3>
                        <h3 className="text-xl">
                            Visit our services for more information
                        </h3>
                    </Link>
                </div>
                <div className='md:flex'>
                    <Slideshow images={slideShowImages}/>
                    <FacebookPageEmbed link='https://www.facebook.com/WadeContractors/'/>
                </div>
            </div>
            <div className="mx-auto mb-15 max-w-6xl p-4">
                <div className="mb-4 text-center">
                    <h3 className="mb-2 text-xl font-bold">
                        Feature Videos
                    </h3>
                    <h4 className="mb-2 text-l">
                        You will find more videos on our services pages, if there's anything you need more information
                        on just give us a call or fill out the contact form in the bottom right.
                    </h4>

                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-center">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                        <YoutubeEmbed videoId="8oPjE_vtv9U" isShort/>
                    </div>
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                        <YoutubeEmbed videoId="7IwLPLC9rto" isShort/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home
