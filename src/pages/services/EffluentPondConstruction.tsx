import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
const images = [
    {src:"/digger.webp", alt:"Digger"},
    {src:"/EffluentPics/EffluentPond3.jpg", alt:"Crew in effluent Pond"},
    {src:"/EffluentPics/EffluentPond4.jpg", alt:"Trailer in effluent Pond"},
    {src:"/EffluentPics/EffluentPondDigging.jpg", alt:"Laying pipes"},
    {src:"/EffluentPics/EffluentPondDigging2.jpg", alt:"Laying pipes 2.0"},
]
export default function EffluentPondConstruction() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className='mx-auto max-w-7xl px-6 py-12 space-y-2'>
                <h1 className='text-2xl font-bold text-gray-800'>Effluent Pond Construction</h1>
                <div className="text-xs text-gray-700 space-y-3 md:text-sm">
                    <p>
                        Ponds provide temporary storage of effluent, when soil conditions are not suitable for
                        irrigation.
                    </p>
                    <p>
                        Having a well designed and constructed pond will save you capital cost and comply with consent
                        conditions.
                    </p>
                    <p>
                        We will ensure:
                    </p>
                    <div>
                        <p>
                            Construction complies with the regulatory requirements
                        </p>
                        <p>
                            Soil type and ground levels are taken into account
                        </p>
                        <p>
                            The pond is positioned correctly
                        </p>
                    </div>
                    <p>
                        We will work with you and provide consultancy and expert advice.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {images.map(function (image,index) {
                        return (
                            <div className="flex flex-col items-center text-center" key={index}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full rounded-lg object-cover shadow-lg h-120"
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