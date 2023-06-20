import InputField from "./InputField";



const SubscriptionCard = () => {
    return ( 
      
            <div className='h-[416px] w-[1170px] space-y-4  flex flex-col items-center bg-[#FA7436] rounded-[20px] pt-[60px]'>
               <h1 className="text-4xl w-[500px] font-bold font-sans text-[#ffffff] text-center leading-[64px]">Subscribe and get exclusive deals & offer</h1>
               <div className="pt-[50px]">
               <InputField/>
               </div>
                
        </div>
    
     );
}
 
export default SubscriptionCard;