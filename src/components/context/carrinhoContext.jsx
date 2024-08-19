import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (item) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find(produto => produto.id === item.id);
      if (itemExistente) {
        // Atualiza a quantidade se o item já estiver no carrinho
        return prevCarrinho.map(produto =>
          produto.id === item.id
            ? { ...produto, quantidade: produto.quantidade + 1 }
            : produto
        );
      } else {
        // Adiciona o item novo com quantidade 1
        return [...prevCarrinho, { ...item, quantidade: 1 }];
      }
    });
  };

  const atualizarQuantidade = (id, novaQuantidade) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map(produto =>
        produto.id === id
          ? { ...produto, quantidade: novaQuantidade }
          : produto
      )
    );
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter(produto => produto.id !== id)
    );
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, atualizarQuantidade, removerDoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
