import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (item) => {
    console.log(item);
    setCarrinho((prevCarrinho) => {
        if(!prevCarrinho.some((produto) => produto.id === item.id)) {
            return [...prevCarrinho, item];
        }
        return prevCarrinho;
    });
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
