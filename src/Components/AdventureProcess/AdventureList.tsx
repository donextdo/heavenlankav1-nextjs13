import { FiChevronRight } from 'react-icons/fi';
import phone from '../../../assets/Adventure/call.png'
import AdventureCard from './AdventureCard';

const AdventureList = () => {
   const adventure1= {
        image: phone,
        name: "Dream On, Inquire Away!",
      }
      const adventure2= {
        image: phone,
        name: "Dream On, Inquire Away!",
      }
    return ( 
        <div className='flex flex-row gap-3 items-center'>
            <AdventureCard adventure={adventure1}/>
            <FiChevronRight className='w-6 h-6 text-[#077B83]'/>
            <AdventureCard adventure={adventure2}/>
            <FiChevronRight className='w-6 h-6 text-[#077B83]'/>
            <AdventureCard adventure={adventure2}/>
            <FiChevronRight className='w-6 h-6 text-[#077B83]'/>
            <AdventureCard adventure={adventure2}/>

        </div>
     );
}
 
export default AdventureList;