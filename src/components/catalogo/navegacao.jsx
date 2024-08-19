import { useContext } from "react";
import Logo from "./logo";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../context/carrinhoContext";

const Navegacao = () => {
  const navigate = useNavigate();

  const handleCarrinhoClick = () => {
    navigate('/carrinho')
  };

  const {carrinho} = useContext(CarrinhoContext);

  return (
    <div className="flex justify-between items-center bg-white h-20 pt-[19px] px-36">
      <Logo />
      <div className="bg-[#F3F5F6] w-[352px] h-[42px] flex px-5 justify-between items-center text-[#737380] rounded-[8px]">
        Pesquise aqui
        <FiSearch size={20} />
      </div>
      <button onClick={handleCarrinhoClick} className="relative">
      <FiShoppingBag color="gray" size={20} />
      {carrinho.length > 0 && (
        <span className="absolute bottom-[-8px] right-[-8px] bg-[#F25D27] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
          {carrinho.length}
        </span>
      )}
    </button>
    </div>
  );
};

export default Navegacao;
