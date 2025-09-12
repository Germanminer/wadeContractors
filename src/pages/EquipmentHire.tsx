import '../style.css'
import Navbar from '../components/Navbar.tsx'
import ContactForm from "../components/ContactForm.tsx";
import Footer from '../components/Footer.tsx'
import TextImagePair from "../components/TextImagePair.tsx";
const imagePairs = [
    {src:"/roller.jpg",title:"10 tonne roller",text:"(Sheep foot shell kit optional)"},
    {src:'/vibratingRoller.jpg',title:"4.5 tonne vibrating roller"},
    {src:'/muckSpreader.jpg',title:"10 tonne muckspreader"},
    {src:'trailer.png',title:"10 Tonne tip trailer"},
]
export default function EquipmentHire() {

    return (
        <>
            <Navbar/>
            <div>
                <div className='mx-auto mb-10 max-w-7xl'>
                    <div className="my-10 mb-4 text-center text-3xl">
                        <h2>Machine hire - Daily or weekly rates</h2>
                        <h2>Contact us for a price</h2>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {imagePairs.map(function (pair, index) {
                            return <TextImagePair {...pair} key={index}/>
                        })}
                    </div>
                </div>
            </div>
            <ContactForm/>
            <Footer/>

        </>
    )
}