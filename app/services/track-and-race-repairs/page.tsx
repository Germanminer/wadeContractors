import VideoPlayer from '../../../components/VideoPlayer';

export const metadata = {
  title: 'Track & Race Repairs | Wade Contractors',
  description: 'Track and Race Repairs · Wade Contractors - Earthmoving, effluent management, laser drainage Waikato farm contractors.',
};

const videoTextPairs: {src: string; text: string}[] = [
    {src:"/videos/trackAndRaceRepairs/hyndmans_quarry_-_argillite_rubble.mp4",text:"Hyndmans Quarry\nArgillite Rubble"},
    {src:"/videos/trackAndRaceRepairs/hyndmans_quarry_-_brown_rotten_rock_623.mp4",text:"Hyndmans Quarry:\nBrown rotten Rock"},
    {src:"/videos/trackAndRaceRepairs/hyndmans_quarry_-_farmers_40_orange-green_mix_393.mp4",text:"Hyndmans Quarry\nOrange Green Mix"},
    {src:"/videos/trackAndRaceRepairs/toataoroa_quarry_-_farmers_40_soft_785.mp4",text:"Toataoroa Quarry\nFarmers 40\n"},
    {src:"/videos/trackAndRaceRepairs/tauhei_quarry_map40_332.mp4",text:"Tauhei Quarry\nMAP 40\n"},
    {src:"/videos/trackAndRaceRepairs/hyndmans_quarry_-_gap40_for_tanker_tracks_923.mp4",text:"Hyndmans Quarry\nGAP 40\n"},
    {src:"/videos/trackAndRaceRepairs/TaotaoroaQuarry2040DrainageMetal.mp4",text:"Taotaoroa Quarry\n20/40 Drainage Metal\n"},
    {src:"/videos/trackAndRaceRepairs/leachQuarryTirohiaCrusherRun.mp4",text:"Leach Quarry Tirohia\nCrusher Run"},
    {src:"/videos/trackAndRaceRepairs/tauhei_quarry_map465_332.mp4",text:"Tauhei Quarry\nMAP 65"},
    {src:"/videos/trackAndRaceRepairs/hyndmansQuarryArglite6540mm.mp4",text:"Hyndmans Quarry\nArgelite 65-40mm"},
    {src:"/videos/trackAndRaceRepairs/WaikatoAggregatesDrainageMetal10-25mm.mp4",text:"Waikato Aggregates\nDrainage Metal 10-25mm"},
    {src:"/videos/trackAndRaceRepairs/RotoruaStockRock.mp4",text:"Rotorua\nStock Rock"},
    {src:"/videos/trackAndRaceRepairs/mcDonaldsLimeRawLimeGap6.mp4",text:"McDonalds Lime\nRaw Lime GAP 6"},
    {src:"/videos/trackAndRaceRepairs/WeddingsQuarryHuntlySoftBrownRottenRock.mp4",text:"Weddings Quarry Huntly\nSoft Brown Rotten Rock. \n"},
]

export default function TrackAndRaceRepairs() {
    return (
        <>
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
        </>
    )
}
