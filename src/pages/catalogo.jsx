import Filtro from "../components/catalogo/filtro";
import Navegacao from "../components/catalogo/navegacao";
import Paginacao from "../components/catalogo/paginacao";
import Produtos from "../components/catalogo/produtos";
import { useState } from "react";

const Catalogo = () => {

  const [selectedOption, setSelectedOption] = useState('todos');

  return (
    <div className="h-full bg-[#F3F5F6]">
      <Navegacao />
      <Filtro selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      <Produtos selectedOption={selectedOption}/>
      <Paginacao />
    </div>
  );
};

export default Catalogo;
