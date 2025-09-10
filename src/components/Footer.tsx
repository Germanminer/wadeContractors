export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-white flex-shrink-0">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Logo & Brand */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <img src="/logo.png" alt="Wade Contractors Logo" className="h-14 w-auto"/>
                    </div>

                    {/* Address */}
                    <div className="text-center md:text-left space-y-1 text-white text-sm">
                        <span className="font-bold text-xl">Wade Contractors</span>
                        <p>544 Alexandra Road</p>
                        <p>RD1 Te Aroha</p>
                        <p>3391, New Zealand</p>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <a href="tel:0277250250"
                           className="text-lg font-medium hover:text-yellow-500 transition-colors gap-1 items-center">
                            <p className="font-semibold text-2xl">Call now</p>
                             0277 250 250
                        </a>
                    </div>
                </div>

                {/* separator line */}
                <div className="border-t border-gray-700 mt-6"></div>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center gap-4 text-gray-400">
                    <p className="text-gray-500 text-sm mt-2">
                        &copy; {new Date().getFullYear()} Wade Contractors. All rights reserved. | Site by <a href="https://github.com/Germanminer">Pascal Burri</a>
                    </p>
                </div>
            </footer>
        </>
    )
}