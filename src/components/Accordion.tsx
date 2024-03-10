import React, { useState } from "react";

interface PropsAccordion {
  question: string;
  answer: string;
  active?: number;
}

export const Accordion: React.FC<PropsAccordion> = ({ question, answer, active = 0 }) => {
  const [isActive, setIsActive] = useState(active === 1);

  const handleToggleActive = () => setIsActive(!isActive);

  return (
    <div
      className={`bg-[#e9e9e9] p-5 border border-[#c9c6c655] rounded-md w-[280px] group cursor-pointer ${
        isActive ? "is-active bg-white" : ""
      }`}
      onClick={handleToggleActive}
    >
      <div className="flex items-center">
        <div className="w-full font-medium duration-500">{question}</div>
        <div className="text-xl rotate-90 group-[.is-active]:rotate-[270deg] duration-500">
          {">"}
        </div>
      </div>
      <hr className="hidden group-[.is-active]:block border border-b-gray-300 my-1" />
      <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] duration-500">
        {answer}
      </div>
    </div>
  );
};
