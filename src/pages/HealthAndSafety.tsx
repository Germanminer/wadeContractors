import '../style.css'
import Navbar from '../components/Navbar.tsx'
import ContactForm from "../components/ContactForm.tsx";
import Footer from "../components/Footer.tsx"
export default function HealthAndSafety() {
    return (
        <>
            <meta name="description" content="Health and safety"/>
            <meta name="keywords"
                  content="Health and Safety, Workplace Safety, Occupational Safety, Safety Guidelines, Safety Procedures,
                   Workplace hazard prevention, Employee safety training, Construction site safety, Personal protective equipment,
                   Health and safety compliance, Accident prevention at work, Safety risk assessment, Safety reporting procedures,
                   Safety management system, How to stay safe at work, Safety tips for employees, Safety regulations New Zealand,
                   Safety checklist for workers"/>

            <meta name="language" content="English"/>
            <meta name="author" content="Pascal Burri"/>
            <Navbar/>
            <ContactForm/>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative bg-blue-600 px-6 py-10 text-center text-white">
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">Health & Safety</h1>
                    <p className="mx-auto max-w-2xl text-lg md:text-xl">
                        MAKE SURE YOU KNOW THE HAZARDS AROUND YOUR WORK SITE. REPORT ANY NEW
                        HAZARDS TO YOUR CONTACT.
                    </p>
                </div>

                {/* Side-by-Side Sections */}
                <div className="mx-auto my-16 grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
                    {/* Form Section */}
                    <div className="rounded-2xl bg-white px-6 py-10 shadow-lg">
                        <h2 className="mb-6 text-2xl font-bold">Health & Safety Form</h2>
                        <form className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-1 block font-semibold">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded border border-gray-300 px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block font-semibold">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded border border-gray-300 px-3 py-2"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-1 block font-semibold">
                                    Emergency Contact Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="w-full rounded border border-gray-300 px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block font-semibold">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded border border-gray-300 px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-semibold">
                                    What items of protection should you wear? <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        "Safety glasses",
                                        "Hearing protection",
                                        "Foot protection",
                                        "Hand protection",
                                        "Safety helmets",
                                        "High visibility clothing/vest",
                                        "All of the above",
                                    ].map((item) => (
                                        <label key={item} className="flex items-center gap-2">
                                            <input type="checkbox" className="h-4 w-4"/>
                                            {item}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="mb-1 block font-semibold">Further Information</label>
                                <textarea className="w-full rounded border border-gray-300 px-3 py-2"
                                          rows={4}></textarea>
                            </div>

                            <button
                                type="submit"
                                className="rounded bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Emergency Procedures Section */}
                    <div className="rounded-2xl bg-white p-6 shadow-lg space-y-4">
                        <h2 className="mb-6 text-center text-2xl font-bold md:text-left">Emergency Procedures</h2>
                        <p className="text-2xl font-semibold text-red-600">IN CASE OF EMERGENCY DIAL 111</p>
                        <ul className="list-inside list-disc space-y-2">
                            <li>Fire, Ambulance, Police, Gas or Chemical Spills</li>
                            <li>Tell the operator what service you require</li>
                            <li>Wait until the service answers</li>
                            <li>Give details of the type of emergency (e.g., accident, fire, gas or chemical spill)</li>
                        </ul>

                        <div>
                            <p className="font-semibold">Company Name:</p>
                            <p>Wade Contractors</p>

                            <p className="mt-2 font-semibold">Employer:</p>
                            <a href="tel:0277250250">
                                <p>Klinton Wade – 0277 250 250</p>
                            </a>
                        </div>

                        <div className="mt-4">
                            <p className="font-semibold">Location of Emergency Equipment:</p>
                            <ul className="list-inside list-disc font-semibold">
                                <li>Located Behind Driver's Seat
                                    <img src="/HealthAndSafetyPics/firstAid.jpg" alt=""/>
                                </li>
                                <li>Located Behind Driver's Seat
                                    <img src="/HealthAndSafetyPics/fireExtinguisher.jpg" alt=""/>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-4 rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
                            <p className="font-semibold">Evacuation Procedures:</p>
                            <ul className="list-inside list-disc space-y-1">
                                <li>A continuous fire alarm or long horn blast indicates a site emergency requiring
                                    evacuation.
                                </li>
                                <li>All personnel must proceed immediately and safely to the designated assembly area.
                                </li>
                                <li>Remain there until all personnel are accounted for and instructed otherwise.</li>
                                <li>Do not return to work until clearance has been given.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
