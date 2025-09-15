import {FacebookProvider, Page} from "react-facebook";
export default function FacebookPageEmbed({link}:{link:string}){
    return (
    <div className='flex justify-center'>
        <FacebookProvider appId='774902915278277'>
            <Page
                href={link}
                tabs="timeline"
                width={340}
                height={400}
                smallHeader={false}
                hideCover={false}
                showFacepile={true}
            />
        </FacebookProvider>
    </div>
    )
}