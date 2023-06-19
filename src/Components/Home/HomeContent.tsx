import { FiChevronRight } from "react-icons/fi";
import AdventureList from "../AdventureProcess/AdventureList";
import DetailsCard from "../DetailsCard/DetailsCard";
import DetailsList from "../DetailsCard/Detailslist";
import Slider from "../Shared/Slider";
import TreasuresCard from "../Treasures/TreasuresCard";
import TreasuresList from "../Treasures/TreasuresList";
import FeedbackMsgCard from "../Feedback/FeedbackMsgCard";
import FeedbackMsgList from "../Feedback/FeedbackMsgList";
import FooterView from "../Footer/Footer";

const HomeContent = () => {
    return (
        <div className="container mx-auto px-20 mt-12">
            <div className=" flex flex-col justify-center items-center mt-2 space-y-4">
                <h1 className="text-3xl font-bold font-sans">Why <span className="text-[#077B83]">Heaven Lanka</span></h1>
                <p className="w-[450px] text-center text-sm">At Heaven Lanka, we are passionate about providing our clients with an exceptional travel experience</p>

            </div>

            <div className="mt-8">

                <DetailsList />
            </div>

            <div className=" flex flex-col justify-center items-center mt-14 space-y-4">
                <h1 className="text-3xl font-bold font-sans"><span className="text-[#077B83]">Sri Lanks's</span> Tresasures</h1>
                <p className="w-[450px]  text-sm text-center">At Heaven Lanka, we are passionate about providing our clients with an exceptional travel experience</p>

            </div>

            
            <div className="mt-8">
                <TreasuresList />
            </div>

            
            <div className="mt-[50px] pt-[60px] pb-[60px] pl-[150px] pr-[150px] bg-[#077B83] bg-opacity-[12%]">
            <div className=" flex flex-col  mt-8 space-y-4">
                    <h1 className="text-3xl font-bold font-sans text-left">Voices <span className="text-[#077B83]">of Delight :</span></h1>
                    <p className="w-[400px] text-sm text-left ">Hear What Our Customers Have to Say!</p>

                </div >
                <FeedbackMsgList/>
                 </div>

            <div className="p-5 bg-gray-200 mt-8 flex flex-col justify-center items-center">
                <div className=" flex flex-col justify-center items-center mt-8 space-y-4">
                    <h1 className="text-3xl font-bold font-sans">How It Works - <span className="text-[#077B83]">From Inquiry to Adventure!</span></h1>
                    <p className="w-[400px]  text-center text-sm">Ready to embark on your dream journey to Sri Lanka? Making an inquiry with Heaven Lanka is simple and hassle-free. Follow these easy steps to kickstart your personalized travel experience</p>

                </div>

                <div className="mt-8">
                    <AdventureList />
                </div>
            </div>
            <div className="mt-[50px] pt-[60px] pb-[60px] pl-[150px] pr-[150px] bg-[#077B83] bg-opacity-[10%]">
                <FooterView/>
            </div>

        </div>
    );
}

export default HomeContent;