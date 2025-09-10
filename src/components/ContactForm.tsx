import { useState } from "react";

export default function ContactForm() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-4 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
                Contact Us
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
                    open ? "bg-black/50 opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={(e) => e.target === e.currentTarget && setOpen(false)}
            >
                {/* Slide-in Panel */}
                <div
                    className={`w-96 bg-white h-full p-6 shadow-lg flex flex-col transform transition-transform duration-300 ease-in-out ${
                        open ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Contact Us</h2>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Form */}
                    <form className="space-y-4 flex-1">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                                <input
                                    type="text"
                                    className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your Name"
                                    maxLength={50}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Phone / Email
                                <input
                                    type="text"
                                    className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your Contact*"
                                    required
                                    maxLength={50}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                How can we help?
                                <input
                                    type="text"
                                    className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Services, Hires..."
                                    maxLength={500}
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                    <a href="tel:0277250250">
                        <div className="font-semibold text-2xl flex items-center bg-blue-600 hover:bg-blue-700 rounded-2xl text-white pl-3">
                            <img className="w-16 h-16 pr-5" src="/phone.svg" alt="phone icon"/>
                            <p>Call us 0277 250 250
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
