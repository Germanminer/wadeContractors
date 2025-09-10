export default function Service({src,text,link}:{src:string,text:string,link:string}) {
    return (
        <>
                    <a href={link}
                       className="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                        <div className="w-full aspect-[16/9] bg-gray-200 overflow-hidden">
                            <img src={src} alt={text}
                                 className="object-cover w-full h-full"/>
                        </div>
                        <div className="p-4 bg-white">
                            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                {text}
                            </h2>
                        </div>
                    </a>
        </>
    )
}