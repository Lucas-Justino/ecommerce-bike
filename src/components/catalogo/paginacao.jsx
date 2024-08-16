import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Paginacao = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="flex justify-end px-36 gap-14 py-14 items-center">
      <div>
        <button
          onClick={() => handlePageChange(selectedPage - 1)}
          className="text-[#667085] font-semibold flex items-center gap-3"
          disabled={selectedPage === 1}
        >
          <FaArrowLeft />
          <span>Anterior</span>
        </button>
      </div>
      <div className="flex">
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 rounded-[8px] flex items-center justify-center border ${
              selectedPage === page
                ? "bg-[#F25D27] text-white"
                : "text-[#667085] font-semibold border-none"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <div>
        <button
          onClick={() => handlePageChange(selectedPage + 1)}
          className="text-[#667085] font-semibold flex items-center gap-3"
        >
          <span>Proximo</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Paginacao;
