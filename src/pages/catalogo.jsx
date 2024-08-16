import Filtro from "../components/catalogo/filtro";
import Navegacao from "../components/catalogo/navegacao";
import Paginacao from "../components/catalogo/paginacao";
import Produtos from "../components/catalogo/produtos";
import { useState } from "react";

const Catalogo = () => {

  const [selectedOption, setSelectedOption] = useState('todos');
  const [selectedOrder, setSelectedOrder] = useState('original');

  return (
    <div className="h-full bg-[#F3F5F6]">
      <Navegacao />
      <Filtro selectedOption={selectedOption} setSelectedOption={setSelectedOption} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder}/>
      <Produtos selectedOption={selectedOption} selectedOrder={selectedOrder}/>
      <Paginacao />
    </div>
  );
};

export default Catalogo;
