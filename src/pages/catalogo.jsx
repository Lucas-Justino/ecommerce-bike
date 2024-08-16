import Filtro from "../components/catalogo/filtro";
import Navegacao from "../components/catalogo/navegacao";
import Paginacao from "../components/catalogo/paginacao";
import Produtos from "../components/catalogo/produtos";

const Catalogo = () => {
  return (
    <div className="h-full bg-[#F3F5F6]">
      <Navegacao />
      <Filtro/>
      <Produtos/>
      <Paginacao />
    </div>
  );
};

export default Catalogo;
