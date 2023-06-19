import beach from '../../../assets/Treasures/beach.png'
import Slider from '../Shared/Slider';
import TreasuresCard from './TreasuresCard';

const TreasuresList = () => {
    const TreasuresLists = [
        {
          image: beach,
          name: "Unspoiled Beaches",
        },
        {
          image: beach,
          name: "Unspoiled Beaches",
        },
        {
          image: beach,
          name: "Unspoiled Beaches",
        },
        {
            image: beach,
            name: "Unspoiled Beaches",
          },
          {
            image: beach,
            name: "Unspoiled Beaches",
          },
          {
            image: beach,
            name: "Unspoiled Beaches",
          },
    ]
    return ( 
        <div className='mt-4'>
            <Slider>
                {TreasuresLists.map((item, index)=>(
                    <TreasuresCard key={index} item={item}/>
                ))}
            </Slider>

        </div>
     );
}
 
export default TreasuresList;