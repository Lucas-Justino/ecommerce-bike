import CarrinhoProdutos from "../components/carrinho/carrinho";
import Navegacao from "../components/catalogo/navegacao";
import Voltar from "../components/produto/voltar";

const Carrinho = () => {
  return (
    <div className="h-full bg-[#F3F5F6]">
      <Navegacao />
      <Voltar />
      <CarrinhoProdutos />

    </div>
  );
};

export default Carrinho;
