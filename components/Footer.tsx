'use client';

import { useState } from 'react';

export default function Footer() {
    const [year] = useState(() => new Date().getFullYear());
    return (
        <>
            <footer className="flex-shrink-0 bg-gray-900 text-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3">

                    {/* Logo & Brand */}
                    <div className="flex flex-col items-center gap-4 md:items-start">
                        <img src="/logo.webp" alt="Wade Contractors Logo" className="h-14 w-auto" width="120" height="60"/>
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
                           className="flex flex-col items-center gap-1 text-lg font-medium transition-colors hover:text-yellow-500">
                            <span className="text-2xl font-semibold">Call now</span>
                            <span>0277 250 250</span>
                        </a>
                    </div>
                </div>

                {/* separator line */}
                <div className="mt-6 border-t border-gray-700"></div>
                <div className="mx-auto flex max-w-7xl justify-center gap-4 px-6 py-4 text-gray-400">
                    <p className="mt-2 text-sm text-white">
                        &copy; {year} Wade Contractors. All rights reserved. | Site by <a href="https://pascalburri.co.nz">Pascal Burri</a>
                    </p>
                </div>
            </footer>
        </>
    )
}
