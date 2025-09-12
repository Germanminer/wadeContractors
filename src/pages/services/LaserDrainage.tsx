import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
import VideoPlayer from "../../components/VideoPlayer.tsx";
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
                        <VideoPlayer src='/videos/metalGravelBin2.mp4' type='video/mp4'/>
                    </div>
                    <div className='w-full rounded-sm object-cover shadow-lg'>
                        <VideoPlayer src='/videos/metalGravelBin3.mp4' type='video/mp4'/>
                    </div>
                    <div className='w-full rounded-sm object-cover shadow-lg'>
                        <VideoPlayer src='/videos/drainWet.mp4' type='video/mp4'/>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {images.map(function (image, index) {
                        return (
                            <div className="flex flex-col items-center text-center" key={index}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full rounded-sm object-cover shadow-lg h-90"
                                    loading='lazy'
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