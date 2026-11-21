export default function TextImagePair({src, title, text}: {src: string; title: string; text: string} | {src: string; title: string; text?: undefined}) {

    return(
        <>
            <div className="bg-white p-6 shadow">
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="leading-relaxed text-gray-700">{text? text:"​"}</p>
                <img src={src} alt={title} className="h-60 w-full rounded-sm object-cover" width="640" height="360"/>
            </div>
        </>
    )
}
