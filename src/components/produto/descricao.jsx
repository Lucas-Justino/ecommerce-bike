import { useContext } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { CarrinhoContext } from "../context/carrinhoContext";

const Descricao = ({ produto, nome, marca, valor, descricao }) => {

  const { adicionarAoCarrinho } = useContext(CarrinhoContext)

  return (
    <div className="flex flex-col text-[#617480] justify-between items-start">
      <div className="flex flex-col gap-4">
        <span className="">{marca}</span>
        <span className="text-[#123952] font-semibold text-3xl">{nome}</span>
        <span className="text-[#123952] font-bold">R$ {valor}</span>
        <span className="">
          *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
          R$900,00.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">DESCRIÇÃO</h1>
        <p className="">{descricao}</p>
        <div className="flex gap-5">
          <FaFacebook color="#115D8C" />
          <FaTwitter color="#115D8C" />
          <FaPinterest color="#115D8C" />
          <FaInstagram color="#115D8C" />
        </div>
      </div>
      <button className="flex justify-center items-center gap-6 bg-[#F25D27] text-white h-10 w-[340px] px-10 rounded-[4px] font-semibold"
        onClick={() => {adicionarAoCarrinho(produto)}}>
        <FiShoppingBag />
        ADICIONAR AO CARRINHO
      </button>
    </div>
  );
};

export default Descricao;
