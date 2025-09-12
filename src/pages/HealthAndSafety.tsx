import '../style.css'
import Navbar from '../components/Navbar.tsx'
import ContactForm from "../components/ContactForm.tsx";
import Footer from "../components/Footer.tsx"
export default function HealthAndSafety() {
    return (
        <>
            <Navbar/>
            <ContactForm/>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative bg-blue-600 text-white py-10 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Health & Safety</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        MAKE SURE YOU KNOW THE HAZARDS AROUND YOUR WORK SITE. REPORT ANY NEW
                        HAZARDS TO YOUR CONTACT.
                    </p>
                </div>

                {/* Side-by-Side Sections */}
                <div className="max-w-6xl mx-auto my-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Form Section */}
                    <div className="bg-white shadow-lg rounded-2xl py-10 px-6">
                        <h2 className="text-2xl font-bold mb-6">Health & Safety Form</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-semibold mb-1">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-1">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold mb-1">
                                    Emergency Contact Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-2">
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
                                            <input type="checkbox" className="h-4 w-4" />
                                            {item}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold mb-1">Further Information</label>
                                <textarea className="w-full border border-gray-300 rounded px-3 py-2" rows={4}></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 text-white font-semibold rounded px-6 py-3 hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Emergency Procedures Section */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
                        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Emergency Procedures</h2>
                        <p className="font-semibold text-red-600 text-2xl">IN CASE OF EMERGENCY DIAL 111</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Fire, Ambulance, Police, Gas or Chemical Spills</li>
                            <li>Tell the operator what service you require</li>
                            <li>Wait until the service answers</li>
                            <li>Give details of the type of emergency (e.g., accident, fire, gas or chemical spill)</li>
                        </ul>

                        <div>
                            <p className="font-semibold">Company Name:</p>
                            <p>Wade Contractors</p>

                            <p className="font-semibold mt-2">Employer:</p>
                            <a href="tel:0277250250">
                                <p>Klinton Wade – 0277 250 250</p>
                            </a>
                        </div>

                        <div className="mt-4">
                            <p className="font-semibold">Location of Emergency Equipment:</p>
                            <ul className="list-disc list-inside font-semibold">
                                <li>Located Behind Driver's Seat
                                    <img src="/HealthAndSafetyPics/firstAid.jpg" alt=""/>
                                </li>
                                <li>Located Behind Driver's Seat
                                    <img src="/HealthAndSafetyPics/fireExtinguisher.jpg" alt=""/>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-4 bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                            <p className="font-semibold">Evacuation Procedures:</p>
                            <ul className="list-disc list-inside space-y-1">
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
