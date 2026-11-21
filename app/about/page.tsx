import VideoPlayer from '../../components/VideoPlayer';

export const metadata = {
  title: 'About Us | Wade Contractors',
  description: 'The Wade family are dairy farmers as well as being agricultural contractors and it\'s this combination of skill sets which brings a unique understanding of the requirements of their farmer clients.',
  keywords: 'About Us, Company Information, Our Story, Our Team, Business Background, Company History, Mission and Values, Leadership, Meet the Team, Company Overview',
};

export default function About() {
    return (
        <>
            <div className="mx-auto mb-15 max-w-6xl items-center justify-center p-4">
                <h1 className="mb-5 text-2xl font-bold text-gray-800">About us</h1>
                <h2 className="mb-5 text-xl font-bold text-gray-800">Meet the Team</h2>
                <div className='overflow-hidden'>
                    <img className="mx-auto scale-150" src="/team.jpg" alt="Photo of the wade contracting team" width="800" height="600"/>
                </div>
                <div className="mb-5 text-center text-gray-800">
                    <p className='mb-5 text-sm font-semibold'>From left to right: Klinton, Gary, Robyn & Kevin Wade with
                        Mark Sayer & Tony Vincent</p>
                    <p className="mb-3">
                        It's a team effort at Wade Contractors with the whole family doing their bit to ensure the job
                        gets done to the best possible standards for you.
                    </p>
                    <p>
                        We are approachable and available, so give us a call any time and we will work out a solution
                        with you.
                    </p>
                </div>
                <div className="my-6 border-t border-gray-300"></div>
                <div>
                    <div className="mx-auto text-lg leading-relaxed text-gray-800 space-y-4 md:text-sm">
                        <p>
                            The Wade family are dairy farmers as well as being agricultural contractors and it's this
                            combination of skill sets which brings a unique understanding of the requirements of their
                            farmer clients.
                        </p>
                        <p>
                            "Because we are farmers, we know what's needed on farm and we understand the challenges
                            farmers face," says Kevin Wade who became an agricultural contractor by chance about 40
                            years ago.
                        </p>
                        <p>
                            "My father Arthur, who was a contractor from Wardville, had adapted a Ford 5000 tractor for
                            contracting which ended up on my farm and when neighbours saw it, they started asking me to
                            use it to do work for them," says Kevin who with wife Robyn, was then milking cows and
                            raising a young family on a dairy farm just south of Te Aroha.
                        </p>
                        <p>
                            As their own farm has developed, now a mix of dairy and goats, the ideas and innovations
                            have continued. Today son Klinton manages the contracting business while their other son
                            Gary runs the dairy goat, and existing dairy cow farming operations.
                        </p>
                        <p>
                            Having just previously built a dairy goat milking shed with 40 sets of cups and a spacious
                            goat house for up to 700 goats, they have a unique appreciation for the needs of their
                            clients. Regularly cleaning out the shavings from the goat house is an essential part of the
                            operation and Wade Contractors has the equipment to remove the shavings and either compost
                            or spread them onto paddocks. It's a service they also offer to other goat and chicken
                            farmers.
                        </p>
                        <p>
                            "We are keen to develop composting techniques and manage the process for other farmers as we
                            see the material taken from the goat houses as being a very useful input for the farming
                            system," says Kevin.
                        </p>
                        <p>
                            Klinton says Wade Contractors also has the skills and equipment to help in the site
                            preparation for new goat or cow houses, poultry sheds, dairies, stand-off pads, water and
                            effluent storage facilities, races, tanker tracks and drainage projects.
                        </p>
                        <p>
                            The lazer blades the company has designed and built allow for accurate leveling or
                            contouring of construction sites. "We can get it accurate to plus or minus 10mm and have
                            three sets of lazer gear which can be fitted to other equipment as well as the lazer blade,"
                            says Klinton.
                        </p>
                        <p>
                            Recent large projects include preparing the new Fonterra factory site at Waitoa, earthworks
                            for a very large water storage tank which required very precise contouring, construction and
                            cleaning of effluent storage ponds, using a digger with a 10 metre extension and goat
                            housing site works.
                        </p>
                        <p>
                            Wade Contractors has five full time staff but during the busy times from February to June,
                            numbers grow to 13. The machinery and equipment that the company uses includes diggers, a
                            grader, rollers, trucks and trailers for sand, metal and fertiliser cartage, tractors and
                            scoops, an effluent spreader, lazer blade and mole plough.
                        </p>
                        <p>
                            The company offers its services to clients throughout the Waikato.
                        </p>
                    </div>
                    <VideoPlayer src='/videos/History.mp4' type='video/mp4' />
                </div>
            </div>
            <div className="flex w-full items-center justify-center gap-1 bg-gray-700 text-white h-[150px]">
                <h4 className="text-2xl">We are always happy to hear from you</h4>
            </div>
        </>
    )
}
