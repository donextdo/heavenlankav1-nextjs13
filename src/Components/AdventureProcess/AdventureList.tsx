import { FiChevronRight } from 'react-icons/fi';
import phone from '../../../assets/Adventure/call.png'
import Chat from '../../../assets/Adventure/Chat.png'
import Choice from '../../../assets/Adventure/Choice.png'
import Confirmed from '../../../assets/Adventure/Confirmed.png'
import AdventureCard from './AdventureCard';

const AdventureList = () => {
   const adventure1= {
        image: phone,
        name: "Dream On, Inquire Away!",
      }
      const adventure2= {
        image: Chat,
        name: "Let's Chat and Make Magic Happen!",
      }
      const adventure3= {
        image: Choice,
        name: "Choice Galore: Your Customized Trip!",
      }
      const adventure4= {
        image: Confirmed,
        name: "Sealed with Wanderlust: Trip Confirmed!",
      }
    return ( 
        <div className='flex flex-row gap-3 justify-center items-center pb-[290px]'>
            <AdventureCard adventure={adventure1}/>
            <FiChevronRight className='w-6 h-6 text-[#077B83] '/>
            <AdventureCard adventure={adventure2}/>
            <FiChevronRight className='w-6 h-6 text-[#077B83]'/>
            <AdventureCard adventure={adventure3}/>
            <FiChevronRight className='w-6 h-6 text-[#077B83]'/>
            <AdventureCard adventure={adventure4}/>

        </div>
     );
}
 
export default AdventureList;