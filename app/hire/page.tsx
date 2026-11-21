import TextImagePair from '../../components/TextImagePair';

export const metadata = {
  title: 'Equipment Hire | Wade Contractors',
  description: 'Earthmoving and site works · Track and race repairs · Culverts and Bridges · Effluent Spreading · Family Business. Welcome to Wade Contractors.',
  keywords: 'Equipment Hire, Machinery Rental, Farm Equipment Hire, Earthmoving Equipment, Laser Grader Hire, Construction Equipment Rental, Agricultural Machinery Hire, Heavy Machinery Hire, Rural Equipment Hire, Track and Site Equipment',
};

const imagePairs = [
    {src:"/roller.jpg",title:"10 tonne roller",text:"(Sheep foot shell kit optional)"},
    {src:'/vibratingRoller.jpg',title:"4.5 tonne vibrating roller"},
    {src:'/muckSpreader.jpg',title:"10 tonne muckspreader"},
    {src:'trailer.png',title:"10 Tonne tip trailer"},
]

export default function EquipmentHire() {
    return (
        <>
            <div className='mx-auto mb-10 max-w-7xl'>
                <div className="my-10 mb-4 text-center text-3xl">
                    <h2>Machine hire - Daily or weekly rates</h2>
                    <h2>Contact us for a price</h2>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {imagePairs.map(function (pair, index) {
                        return <TextImagePair {...pair} key={index}/>
                    })}
                </div>
            </div>
        </>
    )
}
