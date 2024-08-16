import Card from "./card";
import Cupom from "./cupom";

const CarrinhoProdutos = () => {
  return (
    <div className="flex mx-36 gap-40">
      <div className="flex flex-col">
        <div className="flex flex-col mt-4 gap-2">
          <span className="text-[#123952] font-bold text-xl">SEU CARRINHO</span>
          <span className="text-[#617480]">
            Total (3 produtos) <span className="font-semibold">R$ VALOR</span>
          </span>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Cupom />
    </div>
  );
};

export default CarrinhoProdutos;
