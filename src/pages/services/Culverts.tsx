import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
import Slideshow from "../../components/Slideshow.tsx";
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
]
export default function Culverts() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
                <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
                    <h1 className='font-bold text-2xl text-center text-gray-800'>Culverts</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="/culvertPics/culvertsGalvanisedTurnbuckle.jpg"
                                alt="Service 1"
                                className="w-full h-120 object-cover rounded-2xl shadow-lg"
                            />
                            <h2 className="mt-4 text-2xl font-bold text-gray-800">
                                16m Galvanised turnbuckle eye to eye
                            </h2>
                        </div>

                        {/* Image 2 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="/culvertPics/culvertsWireRopeGrips.jpg"
                                alt="Service 2"
                                className="w-full h-120 object-cover rounded-2xl shadow-lg"
                            />
                            <h2 className="mt-4 text-2xl font-bold text-gray-800">
                                10mm wire rope grips, 7 mm thread x 40mm long and 10mm galv wire rope
                            </h2>
                        </div>
                    </div>

                    <div className="w-full">
                        <h2 className="text-3xl font-bold text-center mb-6">Our Work in Action</h2>
                        <Slideshow images={slideShowImages}/>
                    </div>
                </div>
            <Footer/>
        </>
    )
}