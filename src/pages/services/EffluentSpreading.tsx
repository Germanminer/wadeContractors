import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
export default function EffluentSpreading() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className='max-w-7xl mx-auto px-6 py-12 space-y-2'>
                <h1 className='font-bold text-2xl text-gray-800'>Effluent Spreading</h1>
                <p className="text-gray-800 md:text-sm text-xs">
                    DAIRY EFFLUENT IS A SOURCE OF NITROGEN AND TRACE ELEMENTS THAT CAN INCREASE PASTURE PRODUCTION.
                    IN ADDITION THE ORGANIC MATTER CONTAINED WITHIN IT WILL ALSO IMPROVE SOIL WATER HOLDING CAPABILITY, SOIL AERATION, DRAINAGE AND SOIL TILLAGE CHARACTERISTICS.
                    RESEARCH IS SHOWING THAT 100 COWS WILL PRODUCE APPROXIMATELY 590KG PER YEAR OF NITROGEN BACK INTO THE SOIL IF SPREAD ON PADDOCKS EFFICIENTLY.
                    WE WILL WORK WITH YOU TO DEVELOP A PLAN THAT SUITS YOUR CONDITIONS.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/EffluentPics/effluentSpreadingInBarn.jpg"
                            alt="Effluent Spreading in Barn"
                            className="w-full h-120 object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/EffluentPics/EffluentSpreadingOutside.jpg"
                            alt="Effluent Spreading Outside."
                            className="w-full h-120 object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}