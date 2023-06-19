import rectangle from '../../../assets/DetailsIcon/Rectangle.png'
import DetailsCard from './DetailsCard';

const DetailsList = () => {
    const detailslists = [
          {
            image: rectangle,
            name: "Personlized Tour Package",
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, corrupti sapiente. Repudiandae a, eos, ipsa sit quos eum distinctio doloribus pariatur recusandae libero deserunt! A voluptatum iste facilis, voluptate perspiciatis rerum reiciendis assumenda facere, at deserunt aspernatur adipisci temporibus sint. Inventore.",
          },
          {
            image: rectangle,
            name: "Personlized Tour Package",
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, corrupti sapiente. Repudiandae a, eos, ipsa sit quos eum distinctio doloribus pariatur recusandae libero deserunt! A voluptatum iste facilis, voluptate perspiciatis rerum reiciendis assumenda facere, at deserunt aspernatur adipisci temporibus sint. Inventore.",
          },
          {
            image: rectangle,
            name: "Personlized Tour Package",
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, corrupti sapiente. Repudiandae a, eos, ipsa sit quos eum distinctio doloribus pariatur recusandae libero deserunt! A voluptatum iste facilis, voluptate perspiciatis rerum reiciendis assumenda facere, at deserunt aspernatur adipisci temporibus sint. Inventore.",
          },
    ]
    return ( 
        <div className='grid grid-cols-3 gap-8'>
            {detailslists.map((item, index) =>(
                <DetailsCard  key={index} item={item}/>
            ))}
        </div>
     );
}
 
export default DetailsList;