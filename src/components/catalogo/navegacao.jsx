import Logo from "./logo";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navegacao = () => {
  const navigate = useNavigate();

  const handleCarrinhoClick = () => {
    navigate('/carrinho')
  };

  return (
    <div className="flex justify-between items-center bg-white h-20 pt-[19px] px-36">
      <Logo />
      <div className="bg-[#F3F5F6] w-[352px] h-[42px] flex px-5 justify-between items-center text-[#737380] rounded-[8px]">
        Pesquise aqui
        <FiSearch size={20} />
      </div>
      <button onClick={handleCarrinhoClick}>
        <FiShoppingBag color="gray" size={20} />
      </button>
    </div>
  );
};

export default Navegacao;
