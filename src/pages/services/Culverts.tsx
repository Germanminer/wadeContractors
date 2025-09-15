import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
import Slideshow from "../../components/Slideshow.tsx";
import VideoPlayer from "../../components/VideoPlayer"
const slideShowImages:string[] = [
    "/culvertPics/culvertSlideshow/521875-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/994616-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/1402636-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/2062255-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/2344723-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/2386213-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/2590239-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/3706197-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/4224283-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/4418666-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/4795416-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/5018544-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/6166898-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/6625926-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/6805542-orig_orig.jpg",
    "/culvertPics/culvertSlideshow/7157623-orig_orig.jpg",
    "/culvertPics/culvertsGalvanisedTurnbuckle.jpg",
    "/culvertPics/culvertSlideshow/img-2189_orig.jpg",
    "/culvertPics/culvertSlideshow/img-2191_orig.jpg",
    "/culvertPics/culvertSlideshow/img-2193.jpg",
    "/culvertPics/culvertSlideshow/img-3302-1_orig.jpg",
    "/culvertPics/culvertSlideshow/img-3303-1_orig.jpg",
    "/culvertPics/culvertSlideshow/img-3304-1_orig.jpg",
    "/culvertPics/culvertSlideshow/img-3384_orig.jpg",
    "/culvertPics/culvertSlideshow/img-3386_orig.jpg",
    "/culvertPics/culvertSlideshow/img-3387_orig.jpg",
    "/culvertPics/culvertSlideshow/img-3389_orig.jpg",
    "/culvertPics/culvertsWireRopeGrips.jpg",
]
export default function Culverts() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className="mx-auto max-w-7xl px-6 py-12 space-y-12">
                <h1 className="text-center text-2xl font-bold text-gray-800">Culverts</h1>
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                        <div className="w-full max-w-xs rounded-sm shadow-lg">
                            <VideoPlayer src="/videos/Culverts.mp4" type=""/>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="mb-6 text-center text-3xl font-bold">Our Work in Action</h2>
                        <Slideshow images={slideShowImages}/>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}