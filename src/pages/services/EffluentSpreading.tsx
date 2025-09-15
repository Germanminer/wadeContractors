import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
import YoutubeEmbed from "../../components/YoutubeEmbed.tsx";
export default function EffluentSpreading() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className='mx-auto max-w-7xl px-6 py-12 space-y-2'>
                <h1 className='text-2xl font-bold text-gray-800'>Effluent Spreading</h1>
                <p className="text-xs text-gray-800 md:text-sm">
                    DAIRY EFFLUENT IS A SOURCE OF NITROGEN AND TRACE ELEMENTS THAT CAN INCREASE PASTURE PRODUCTION.
                    IN ADDITION THE ORGANIC MATTER CONTAINED WITHIN IT WILL ALSO IMPROVE SOIL WATER HOLDING CAPABILITY,
                    SOIL AERATION, DRAINAGE AND SOIL TILLAGE CHARACTERISTICS.
                    RESEARCH IS SHOWING THAT 100 COWS WILL PRODUCE APPROXIMATELY 590KG PER YEAR OF NITROGEN BACK INTO
                    THE SOIL IF SPREAD ON PADDOCKS EFFICIENTLY.
                    WE WILL WORK WITH YOU TO DEVELOP A PLAN THAT SUITS YOUR CONDITIONS.
                </p>
                <YoutubeEmbed videoId='V-XJhn1HAlc'/>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/EffluentPics/effluentSpreadingInBarn.jpg"
                            alt="Effluent Spreading in Barn"
                            className="w-full rounded-2xl object-cover shadow-lg h-120"
                        />
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/EffluentPics/EffluentSpreadingOutside.jpg"
                            alt="Effluent Spreading Outside."
                            className="w-full rounded-2xl object-cover shadow-lg h-120"
                        />
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                        <div className="w-full md:max-w-2xl">
                            <img
                                src="/EffluentPics/MuckSpreader.jpg"
                                alt="Effluent Spreading Outside."
                                className="w-full rounded-2xl object-cover shadow-lg h-120"
                            />
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}