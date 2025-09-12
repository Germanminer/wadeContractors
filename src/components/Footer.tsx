export default function Footer() {
    return (
        <>
            <footer className="flex-shrink-0 bg-gray-900 text-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3">

                    {/* Logo & Brand */}
                    <div className="flex flex-col items-center gap-4 md:items-start">
                        <img src="/logo.png" alt="Wade Contractors Logo" className="h-14 w-auto"/>
                    </div>

                    {/* Address */}
                    <div className="text-center text-sm text-white space-y-1 md:text-left">
                        <span className="text-xl font-bold">Wade Contractors</span>
                        <p>544 Alexandra Road</p>
                        <p>RD1 Te Aroha</p>
                        <p>3391, New Zealand</p>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center gap-2 md:items-end">
                        <a href="tel:0277250250"
                           className="items-center gap-1 text-lg font-medium transition-colors hover:text-yellow-500">
                            <p className="text-2xl font-semibold">Call now</p>
                             0277 250 250
                        </a>
                    </div>
                </div>

                {/* separator line */}
                <div className="mt-6 border-t border-gray-700"></div>
                <div className="mx-auto flex max-w-7xl justify-center gap-4 px-6 py-4 text-gray-400">
                    <p className="mt-2 text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Wade Contractors. All rights reserved. | Site by <a href="https://github.com/Germanminer">Pascal Burri</a>
                    </p>
                </div>
            </footer>
        </>
    )
}