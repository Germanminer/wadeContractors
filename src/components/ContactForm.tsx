import { useState } from "react";

export default function ContactForm() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed right-4 bottom-4 z-50 rounded-full bg-blue-600 px-4 py-4 text-white shadow-lg transition hover:bg-blue-700"
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
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">Contact Us</h2>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-2xl leading-none text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Form */}
                    <form className="flex-1 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                                <input
                                    type="text"
                                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
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
                                    className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Your Contact*"
                                    required
                                    maxLength={50}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                How can we help?
                                <textarea
                                    className="mt-1 w-full rounded-md border border-gray-300 p-2 h-30 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Services, Hires..."
                                    maxLength={500}
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </form>
                    <a
                        href="tel:0277250250"
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-xl font-bold text-white shadow-lg transition-all hover:from-blue-600 hover:to-indigo-700"
                    >
                        <img className="mr-3 h-8 w-8" src="/phone.svg" alt="phone icon"/>
                        <span>Call us 0277 250 250</span>
                    </a>
                </div>
            </div>
        </>
    );
}
