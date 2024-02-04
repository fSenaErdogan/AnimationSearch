import {GrAttachment, GrBraille} from "react-icons/gr";
import ResultItem from "@/components/ResultItem";


const Results = ({results}) => {


    return (
        <div className="bg-white p-4 rounded-3xl px-8 flex flex-col gap-4">
            <div className="flex items-center border-b pb-2 border-fuchsia-700">
                <div className="font-semibold text-xs">
                    Arama sonuclari:
                </div>
                <div className="ms-auto">
                    <GrBraille className="text-xl"/>
                </div>
            </div>
            <div className="flex flex-col gap-4 overflow-auto h-[500px]">
                {
                    results.map((result, index) => (
                        <ResultItem key={index}>
                            {result.content}
                        </ResultItem>
                    ))
                }
            </div>
        </div>
    )
}

export default Results