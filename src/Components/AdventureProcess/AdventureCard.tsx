import Image from "next/image";

const AdventureCard = ({adventure}:any) => {
    return ( 
        <div>
            <div className='h-40 w-32 space-y-4  flex flex-col items-center justify-center bg-gray-200'>
            <div className="h-28 w-full bg-[#077B83] rounded-md">
                {/* <Image
                    src={adventure?.image}
                    alt="adventure1"
                    style={{
                        objectFit: "contain",
                        backgroundColor: "white",
                        width: "100%",
                        height: "100%",
                    }}
                    width={450}
                    height={400}
                /> */}
            </div>
            <h1 className='text-[#077B83] text-xs px-2 font-bold text-center'>{adventure.name}</h1>
        </div>
        </div>
     );
}
 
export default AdventureCard;