export default function TextImagePair({src,title,text}:{src:string,title:string,text:string}|{src:string,title:string,text?:undefined}){

    return(
        <>
            <div className="bg-white shadow p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{text? text:"​"}</p>
                <img src={src} alt="Example" className="w-full h-60 object-cover rounded-sm "/>
            </div>
        </>
    )
}