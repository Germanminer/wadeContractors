import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
const images:{src:string,alt:string}[] = [
    {src:"/drainagePics/1508111-1597420817210922_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/11058572-1597420853877585_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/11063793-1597420783877592_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/11102769-1597420880544249_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-1918_1_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-1920_1_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-2539_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-2831_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-2834_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-3021_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-3478_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-8147_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-8148_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-8149_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-8151_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-8152_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-8165_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/img-8167_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/photo-1_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/photo-3_orig.jpg",alt:"DrainagePics"},
    {src:"/drainagePics/photo-4_orig.jpg",alt:"DrainagePics"}
]
export default function LaserDrainage() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className='max-w-7xl mx-auto px-6 py-12 space-y-2'>
                <h1 className='font-bold text-2xl text-gray-800'>
                    Laser Drainage & Novo-flow Trenching
                </h1>
                <div className='max-w-3xl'>
                    <p className='text-sm text-gray-800'>
                        PRECISION WHERE YOU NEED IT, CHECK OUT THE VIDEOS BELOW TO SEE THE ATTENTION TO DETAIL.
                        MOLE PLOUGH
                        SIDE UNLOADING GRAVEL BIN
                    </p>
                </div>
                <h2 className='font-bold text-xl text-gray-800'>
                    Metal Gravel Bin
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
                    <video controls className='w-full h-100 object-cover rounded-sm shadow-lg'>
                        <source src="/videos/metalGravelBin.mp4"/>
                    </video>
                    <video controls className='w-full h-100 object-cover rounded-sm shadow-lg'>
                        <source src="/videos/metalGravelBin2.mp4"/>
                    </video>
                    <video controls className='w-full h-100 object-cover rounded-sm shadow-lg'>
                        <source src="/videos/metalGravelBin3.mp4"/>
                    </video>
                    <video controls className='w-full h-100 object-cover rounded-sm shadow-lg'>
                        <source src="/videos/drainWet.mp4"/>
                    </video>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {images.map(function (image, index) {
                        return (
                            <div className="flex flex-col items-center text-center" key={index}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-90 object-cover rounded-sm shadow-lg"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}