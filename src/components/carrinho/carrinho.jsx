import { useContext } from "react";
import Card from "./card";
import Cupom from "./cupom";
import { CarrinhoContext } from "../context/carrinhoContext";

const CarrinhoProdutos = () => {

  const {carrinho} = useContext(CarrinhoContext);

  return (
    <div className="flex mx-36 gap-40">
      <div className="flex flex-col">
        <div className="flex flex-col mt-4 gap-2">
          <span className="text-[#123952] font-bold text-xl">SEU CARRINHO</span>
          <span className="text-[#617480]">
            Total (3 produtos) <span className="font-semibold">R$ VALOR</span>
          </span>
        </div>
        {carrinho.map((produto, index) => (
          <Card key={index} imagem={produto.images[0].url} nome={produto.name} valor={produto.price} marca={produto.brand}/>
        ))}
      </div>
      <Cupom />
    </div>
  );
};

export default CarrinhoProdutos;
