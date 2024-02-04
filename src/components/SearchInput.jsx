import {GrFormSearch} from "react-icons/gr";


const SearchInput = ({search, setSearch}) => {

    return (
        <div className="bg-white p-4 rounded-full px-8 flex items-center">
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Aratmak istediginiz icerigi giriniz." className="w-full outline-0"/>

            <div className="ms-auto">
                <GrFormSearch className="text-3xl"/>
            </div>
        </div>
    )

}

export default SearchInput