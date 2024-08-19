const Cupom = ({valor}) => {

  const entrega = 100;

  return (
    <div className="flex flex-col bg-white w-[400px] p-8">
      <span className="text-[#41414D] text-2xl font-bold">
        Resumo do pedido
      </span>
      <div className="flex flex-col mt-20 text-[#41414D] text-xl gap-4">
        <div className="flex justify-between">
            <span>Subtotal de produtos</span>
            <span>R$ {valor}</span>
        </div>
        <div className="flex justify-between">
            <span>Entrega</span>
            <span>R$ {entrega.toFixed(2)}</span>
        </div>
        <div className="h-[1px] bg-[#D1D1D8] mt-4"></div>
        <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>R$ {(parseFloat(valor) + parseFloat(entrega)).toFixed(2)}</span>
        </div>
      </div>
      <button className="mt-20 bg-[#51B853] text-[#F5F5FA] font-semibold h-[44px] rounded">
        FINALIZAR A COMPRA
      </button>
    </div>
  );
};

export default Cupom;
