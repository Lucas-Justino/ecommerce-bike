import { useState } from "react";

const Card = () => {
  const [quantidade, setQuantidade] = useState(1);

  const handleQuantidadeClick = (quantidade) => {
    if (quantidade >= 1) setQuantidade(quantidade);
  };

  return (
    <div>
      <div className="flex mt-8 gap-8">
        <img
          src="https://images.tcdn.com.br/img/img_prod/394779/bicicleta_feminina_gts_aro_29_freio_a_disco_cambio_gtsm1_mx8_24_marchas_e_amortecedor_gts_m1_ride_fe_1017_variacao_6300_2_cd285db44aaafcd4815fad90c5e746d4.jpg"
          height={200}
          width={200}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <div className="flex w-[600px] justify-between text-[#123952] font-bold text-xl">
            <span>Nome do Produto</span>
            <span>R$ VALOR</span>
          </div>
          <div className="">
            <span className="text-[#A0ACB2] text-lg">marca do produto</span>
          </div>
          <div className="flex gap-8 mt-4">
            <div className="flex justify-between px-3 items-center w-[161px] h-[52px] border text-[#123952] font-bold text-xl">
              <button onClick={() => handleQuantidadeClick(quantidade - 1)}>
                -
              </button>
              <span>{quantidade}</span>
              <button onClick={() => handleQuantidadeClick(quantidade + 1)}>
                +
              </button>
            </div>
            <button className="text-[#F25D27] font-semibold">REMOVER</button>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-[830px] bg-[#D1D1D8] mt-8"></div>
    </div>
  );
};

export default Card;
