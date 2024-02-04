import {GrAttachment} from "react-icons/gr";


const ResultItem = ({children}) => {

    return (
        <div className="flex items-center gap-4">
            <div>
                <GrAttachment/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}


export default ResultItem