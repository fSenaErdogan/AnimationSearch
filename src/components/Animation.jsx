import {BsCloudy, BsFillSunFill} from "react-icons/bs";
import {GrHadoop} from "react-icons/gr";
import {GiGrass} from "react-icons/gi";


const Animation = () => {
    return (
        <div>
            <div className="text-center relative overflow-hidden w-[200px] pt-24">
                <BsCloudy className="text-[2rem] element text-blue-400 absolute left-0 top-10 z-10"/>
                <BsFillSunFill className="text-[2rem] text-yellow-500 z-20 absolute top-2 right-2"/>
                <GrHadoop className="text-[4rem] mb-3 mx-auto animate-bounce"/>
                <div className="text-green-600">
                    <GiGrass className="text-[2rem] absolute bottom-0 left-0 "/>
                    <GiGrass className="text-[2rem] absolute bottom-0 left-[10%] "/>
                    <GiGrass className="text-[2rem] absolute bottom-0 left-[20%] "/>
                    <GiGrass className="text-[2rem] absolute bottom-0 left-[30%] "/>
                    <GiGrass className="text-[2rem] absolute bottom-0 left-[40%] "/>
                    <GiGrass className="text-[2rem] absolute bottom-0 left-[50%] "/>
                    <GiGrass className="text-[2rem] absolute bottom-0 left-[60%] "/>
                    <GiGrass className="text-[2rem] absolute bottom-0 left-[70%] "/>
                    <GiGrass className="text-[2rem] absolute bottom-0 left-[80%] "/>
                    <GiGrass className="text-[2rem] absolute bottom-0 left-[90%] "/>
                    <GiGrass
                        className="text-[2rem] absolute bottom-0 left-[100%] "/>
                </div>
            </div>
            <div className="pb-8 text-center mt-4">
                Lutfen bekleyiniz...
            </div>
        </div>
    )
}

export default Animation