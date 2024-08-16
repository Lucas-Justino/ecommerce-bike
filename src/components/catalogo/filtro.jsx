import { IoIosArrowDown } from "react-icons/io";

const Filtro = ({selectedOption, setSelectedOption}) => {

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="mt-20">
      <div className="flex justify-between px-36 text-[#737380]">
        <div className="flex gap-8">
          <span
            onClick={() => handleOptionClick('todos')}
            className={`cursor-pointer relative ${selectedOption === 'todos' ? 'text-[#123952] font-bold' : ''}`}
          >
            TODOS AS MARCAS
            {selectedOption === 'todos' && (
              <div className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#F25D27]" />
            )}
          </span>
          <span
            onClick={() => handleOptionClick('caloi')}
            className={`cursor-pointer relative ${selectedOption === 'caloi' ? 'text-[#123952] font-bold' : ''}`}
          >
            Caloi
            {selectedOption === 'caloi' && (
              <div className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#F25D27]" />
            )}
          </span>
          <span
            onClick={() => handleOptionClick('krw')}
            className={`cursor-pointer relative ${selectedOption === 'krw' ? 'text-[#123952] font-bold' : ''}`}
          >
            krw
            {selectedOption === 'krw' && (
              <div className="absolute bottom-[-2px] left-0 w-full h-[4px] bg-[#F25D27]" />
            )}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>Organizar por</span>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Filtro;
