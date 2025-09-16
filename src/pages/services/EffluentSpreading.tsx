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
            </div>
            <Footer/>
        </>
    )
}