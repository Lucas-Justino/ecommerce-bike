import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api-frontend-test.orbesoft.com.br/api/products"
        );
        setProdutos(response.data.content);
        console.log(response.data.content);
      } catch (error) {
        console.log("Erro ao carregar os produtos");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 px-36 pt-8">
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          id={produto.id}
          imagem={produto.images[0].url}
          marca={produto.brand}
          nome={produto.name}
          valor={produto.price}
        />
      ))}
    </div>
  );
};

export default Produtos;
