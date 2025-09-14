import '../../style.css'
import Navbar from '../../components/Navbar'
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer"
import VideoPlayer from "../../components/VideoPlayer.tsx";
const videoTextPairs:{src:string,text:string}[] =[
    {src:"/videos/trackAndRaceRepairs/hyndmans_quarry_-_argillite_rubble.mp4",text:"Hyndmans Quarry\n" + "Argillite Rubble"},
    {src:"/videos/trackAndRaceRepairs/hyndmans_quarry_-_brown_rotten_rock_623.mp4",text:"Hyndmans Quarry:     \n" + "Brown rotten Rock"},
    {src:"/videos/trackAndRaceRepairs/hyndmans_quarry_-_farmers_40_orange-green_mix_393.mp4",text:"Hyndmans Quarry \n" + "Orange Green Mix"},
    {src:"/videos/trackAndRaceRepairs/toataoroa_quarry_-_farmers_40_soft_785.mp4",text:"Toataoroa Quarry\n" + "Farmers 40\n"},
    {src:"/videos/trackAndRaceRepairs/tauhei_quarry_map40_332.mp4",text:"Tuahei Quarry\n" + "MAP 40\n"},
    {src:"/videos/trackAndRaceRepairs/hyndmans_quarry_-_gap40_for_tanker_tracks_923.mp4",text:"Hyndmans Quarry \n" +"GAP 40\n"},
    {src:"/videos/trackAndRaceRepairs/TaotaoroaQuarry2040DrainageMetal.mp4",text:"Taotaoroa Quarry\n" + "20/40 Drainage Metal\n"},
    {src:"/videos/trackAndRaceRepairs/leachQuarryTirohiaCrusherRun.mp4",text:"Leach Quarry Tirohia\n" + "Crusher Run"},
    {src:"/videos/trackAndRaceRepairs/tauhei_quarry_map465_332.mp4",text:"Tauhei Quarry\n" + "MAP 65"},
    {src:"/videos/trackAndRaceRepairs/hyndmansQuarryArglite6540mm.mp4",text:"Hyndmans Quarry\n" + "Argelite 65-40mm"},
    {src:"/videos/trackAndRaceRepairs/WaikatoAggregatesDrainageMetal10-25mm.mp4",text:"Waikato Aggregates\n" + "Drainage Metal 10-25mm"},
    {src:"/videos/trackAndRaceRepairs/RotoruaStockRock.mp4",text:"Rotorua\n" + "Stock Rock"},
    {src:"/videos/trackAndRaceRepairs/mcDonaldsLimeRawLimeGap6.mp4",text:"McDonalds Lime\n" + "Raw Lime GAP 6"},
    {src:"/videos/trackAndRaceRepairs/WeddingsQuarryHuntlySoftBrownRottenRock.mp4",text:"Weddings Quarry Huntly\n" + "Soft Brown Rotten Rock. \n"},
]
export default function TrackAndRaceRepairs() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className='mx-auto max-w-7xl px-6 py-12 space-y-2'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold text-gray-800'>
                        Track and Race Repairs
                    </h1>
                    <div className='text-sm font-semibold text-gray-800'>
                        <p className='mb-5'>
                            KEEP THE HERD PRODUCTIVE!
                        </p>
                        <p>
                            WE WILL CONSTRUCT A SOUND BASE WITH STRONG FOUNDATION MATERIAL. PROVIDING:-
                        </p>
                        <p>
                            ADEQUATE COMPACTION.
                        </p>
                        <p>
                            A SUITABLE WEARING / WALKING SURFACE
                        </p>
                        <p>
                            CROWN THE RACE.
                        </p>
                        <p>
                            CONSTRUCT AN EFFICIENT DRAINAGE SYSTEM.
                        </p>
                        <p>
                            USE A FENCING DESIGN THAT KEEPS COWS OUT OF THE DRAIN BUT PROVIDES ACCESS FOR CLEANING.
                        </p>
                        <p>
                            WE WILL ALSO INCLUDE A MAINTENANCE PROGRAM
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {videoTextPairs.map(function ({src, text}, index) {
                        return (
                            <div>
                                <p className='whitespace-pre-line text-lg font-bold text-gray-800'>
                                    {text}
                                </p>
                                <div className="w-full rounded-sm shadow-lg" key={index}>
                                    <VideoPlayer src={src} type="video/mp4"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}