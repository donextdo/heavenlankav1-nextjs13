import Image from "next/image";
import rectangle from '../../../assets/DetailsIcon/Rectangle.png'

const DetailsCard = ({item}:any) => {
    return ( 
        <div className="mt-5 space-y-2 shadow-xl p-4 border border-gray-100 rounded-md ">
            <div className="w-8 h-8">
                <Image
                    src={item?.image}
                    alt="item1"
                    style={{
                        objectFit: "contain",
                        backgroundColor: "white",
                        width: "100%",
                        height: "100%",
                        float: "left"
                    }}
                    width={450}
                    height={400}
                    
                />
            </div>
            <h1 className="font-bold"> {item.name}</h1>
            <p>{item.details}</p>
        </div>
     );
}
 
export default DetailsCard;