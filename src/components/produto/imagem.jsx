import { useState, useEffect } from "react";

const Imagem = ({ imagens }) => {
  const [imagemPrincipal, setImagemPrincipal] = useState("");

  useEffect(() => {
    if (imagens.length > 0) {
      setImagemPrincipal(imagens[0].url);
    }
  }, [imagens]);

  return (
    <div className="flex gap-10">
      {imagemPrincipal ? (
        <img src={imagemPrincipal} alt="Imagem principal" className="w-[500px] h-[500px] object-cover rounded-lg" />
      ) : (
        <p>Imagem não disponível</p>
      )}
      <div className="flex flex-col gap-4">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem.url}
            alt={`Imagem ${index + 1}`}
            className={`w-[113px] h-[113px] object-cover rounded-lg cursor-pointer ${
              imagemPrincipal === imagem.url ? 'border-2 border-[#F25D27]' : ''
            }`}
            onClick={() => setImagemPrincipal(imagem.url)}
          />
        ))}
      </div>
    </div>
  );
}

export default Imagem;
