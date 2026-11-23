import Link from 'next/link';
import HeroSlideshow from '../components/HeroSlideshow';
import Socials from '../components/Socials';
import Service from '../components/Service';
import Slideshow from '../components/Slideshow';
import YoutubeEmbed from '../components/YoutubeEmbed';
import FacebookPageEmbed from '../components/FacebookPageEmbed';

export const metadata = {
  title: 'Home | Wade Contractors',
  description: 'Providing agricultural contracting services in Waikato for over 30 years.',
  openGraph: {
    url: 'https://www.wadecontractors.co.nz/',
    siteName: 'Wade Contractors - Earthmoving, effluent management, laser drainage Waikato farm contractors',
    title: 'Wade Contractors',
    description: 'Wade Contractors - Earthmoving, effluent management, laser drainage Waikato farm contractors. Phone 0277 250 250. Location Waikato. Earthmoving and site works.',
    type: 'website',
    images: ['/team.jpg'],
  },
};

const displayServices = [
    {src: "/excavator.jpg", text: "Earth moving & Site Works", link: "/services/earth-moving-site-works"},
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
    "/drainagePics/img-8149_orig.jpg"
]

export default function Home() {
    return (
        <>
            <HeroSlideshow/>
            <div className="mx-auto max-w-7xl items-center justify-between p-6 md:flex">
                <div className="mx-auto max-w-5xl px-6 py-12 text-center text-lg text-gray-800 md:text-xl">
                    <h1 className='mb-5 text-2xl font-semibold'>
                        Welcome to Wade Contractors
                    </h1>
                    <p>
                        We are a family-based business providing agricultural contracting in the Waikato for over 30
                        years. As dairy and goat farmers ourselves, we understand your needs and aim to provide
                        exceptional service. Browse our site for services, photos, and videos — and don't hesitate to
                        get in touch!
                    </p>
                    <Link href="about" className='text-sm'>Read more…</Link>
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
                    <h3 className="mb-2 text-2xl font-semibold">
                        Wade Contractors in Action
                    </h3>
                    <Link href="/services" className="text-xl">
                        Visit our services for more information
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
        </>
    )
}
