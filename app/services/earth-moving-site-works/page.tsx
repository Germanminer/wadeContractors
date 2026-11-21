import Slideshow from '../../../components/Slideshow';
import VideoPlayer from '../../../components/VideoPlayer';

export const metadata = {
  title: 'Earth Moving & Site Works | Wade Contractors',
  description: 'Earthmoving and site works · Family Business. Welcome to Wade Contractors.',
};

const boardDrainImages: string[] = [
    "/siteWorksPics/DrainCrossingpics/688436_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/747489_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/1430518_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/1542928_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/2278713_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/3248248_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/5989050_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/6479602_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/7196066_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/7669762_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/9566015_orig.jpg",
    "/siteWorksPics/DrainCrossingpics/9882525_orig.jpg",
]

export default function EarthMovingSiteWorks() {
    return (
        <>
            <div className='mx-auto max-w-7xl px-6 py-12 space-y-2'>
                <h1 className='text-2xl font-bold text-gray-800'>
                    Site works
                </h1>
                <div className='max-w-3xl'>
                    <p className='text-sm text-gray-800'>
                        WE HAVE ALL THE EQUIPMENT AND EXPERTISE YOU NEED FOR COST EFFECTIVE SITE WORKS.
                        USING OUR EXPERIENCE GAINED ON THE JOB WE CAN HELP YOU GET THE JOB DONE ON TIME AND ON BUDGET.
                        CHECK OUT OUR GALLERY FOR MORE DETAILS ON THE TYPES OF PROJECT WE ARE USED TO WORKING ON.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <VideoPlayer src="/videos/bigDigoutSiteWorks.mp4" type="video/mp4"/>
                    <VideoPlayer src="/videos/SmartSheltersSiteWorks.mp4" type="video/mp4"/>
                    <div className="md:col-span-2 flex justify-center">
                        <div className="w-full md:max-w-2xl">
                            <VideoPlayer src='/videos/motorGradingVideo.mp4' type='video/mp4'/>
                        </div>
                    </div>
                </div>
                <h2 className='text-xl font-semibold text-gray-800'>
                    Board Drain Crossing
                </h2>
                <Slideshow images={boardDrainImages}/>
            </div>
        </>
    )
}
