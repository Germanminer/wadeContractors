import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
import VideoPlayer from "../../components/VideoPlayer.tsx";
import Slideshow from "../../components/Slideshow.tsx";
const images:string[] = [
    "/drainagePics/1508111-1597420817210922_orig.jpg",
    "/drainagePics/11058572-1597420853877585_orig.jpg",
    "/drainagePics/11063793-1597420783877592_orig.jpg",
    "/drainagePics/11102769-1597420880544249_orig.jpg",
    "/drainagePics/img-1918_1_orig.jpg",
    "/drainagePics/img-1920_1_orig.jpg",
    "/drainagePics/img-2539_orig.jpg",
    "/drainagePics/img-2831_orig.jpg",
    "/drainagePics/img-2834_orig.jpg",
    "/drainagePics/img-3021_orig.jpg",
    "/drainagePics/img-3478_orig.jpg",
    "/drainagePics/img-8147_orig.jpg",
    "/drainagePics/img-8148_orig.jpg",
    "/drainagePics/img-8149_orig.jpg",
    "/drainagePics/img-8151_orig.jpg",
    "/drainagePics/img-8152_orig.jpg",
    "/drainagePics/img-8165_orig.jpg",
    "/drainagePics/img-8167_orig.jpg",
    "/drainagePics/photo-1_orig.jpg",
    "/drainagePics/photo-3_orig.jpg",
    "/drainagePics/photo-4_orig.jpg",
]
export default function LaserDrainage() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className='mx-auto max-w-7xl px-6 py-12 space-y-2'>
                <h1 className='text-2xl font-bold text-gray-800'>
                    Laser Drainage & Novo-flow Trenching
                </h1>
                <div className='max-w-3xl'>
                    <p className='text-sm text-gray-800'>
                        PRECISION WHERE YOU NEED IT, CHECK OUT THE VIDEOS BELOW TO SEE THE ATTENTION TO DETAIL.
                        MOLE PLOUGH
                        SIDE UNLOADING GRAVEL BIN
                    </p>
                </div>
                <h2 className='text-xl font-bold text-gray-800'>
                    Metal Gravel Bin
                </h2>
                <div className='mb-20 grid grid-cols-1 gap-8 md:grid-cols-2'>
                    <div className='w-full rounded-sm object-cover shadow-lg'>
                        <VideoPlayer src='/videos/metalGravelBin.mp4' type='video/mp4'/>
                    </div>
                    <div className='w-full rounded-sm object-cover shadow-lg'>
                        <VideoPlayer src='/videos/metalGravelBin3.mp4' type='video/mp4'/>
                    </div>
                    <div className="md:col-span-2 flex justify-center rounded-sm object-cover shadow-lg">
                        <div className="w-full md:max-w-2xl">
                            <VideoPlayer src='/videos/drainWet.mp4' type='video/mp4'/>
                        </div>
                    </div>
                </div>
                <Slideshow images={images}/>
            </div>
            <Footer/>
        </>
    )
}