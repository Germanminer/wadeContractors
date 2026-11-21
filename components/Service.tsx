import Link from 'next/link';

export default function Service({src, text, link}: {src: string; text: string; link: string}) {
    return (
        <>
            <Link href={link}
                  className="block overflow-hidden rounded-lg shadow transition group hover:shadow-lg">
                <div className="w-full overflow-hidden bg-gray-200 aspect-[16/9]">
                    <img src={src} alt={text}
                         className="h-full w-full object-cover"/>
                </div>
                <div className="bg-white p-4">
                    <h2 className="text-lg font-semibold text-gray-800 transition group-hover:text-blue-600">
                        {text}
                    </h2>
                </div>
            </Link>
        </>
    )
}
