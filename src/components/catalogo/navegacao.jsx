import Logo from "./logo";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const Navegacao = () => {
    return(
        <div className="flex justify-between items-center bg-white h-20 pt-[19px] px-36">
            <Logo/>
            <div className="bg-[#F3F5F6] w-[352px] h-[42px] flex px-5 justify-between items-center text-[#737380] rounded-[8px]">
                Pesquise aqui
                <FiSearch size={20} />
            </div>
            <div className="">
            <FiShoppingBag color="gray" size={20} />
            </div>
        </div>
    );
}

export default Navegacao;