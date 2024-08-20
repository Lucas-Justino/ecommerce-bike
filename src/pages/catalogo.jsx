import { useEffect, useState } from "react";
import Filtro from "../components/catalogo/filtro";
import Navegacao from "../components/catalogo/navegacao";
import Paginacao from "../components/catalogo/paginacao";
import Produtos from "../components/catalogo/produtos";
import { useLocation } from "react-router-dom";

const Catalogo = () => {
  const [selectedOption, setSelectedOption] = useState('todos');
  const [selectedOrder, setSelectedOrder] = useState('original');
  const [filtro, setFiltro] = useState('');

  const location = useLocation();

  useEffect(() => {
    // Reseta o filtro quando a navegação volta para esta página
    setFiltro('');
  }, [location]);

  return (
    <div className="h-full bg-[#F3F5F6]">
      <Navegacao filtro={filtro} setFiltro={setFiltro} />
      <Filtro selectedOption={selectedOption} setSelectedOption={setSelectedOption} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
      <Produtos selectedOption={selectedOption} selectedOrder={selectedOrder} filtro={filtro} />
      <Paginacao />
    </div>
  );
};

export default Catalogo;
