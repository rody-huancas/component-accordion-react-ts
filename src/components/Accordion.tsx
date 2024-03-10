export const Accordion = () => {
  return (
    <div className="bg-[#e9e9e9] p-5 border border-[#c9c6c655] rounded-md w-[280px] group is-active">
      <div className="flex items-center">
        <div className="w-full group-[.is-active]:font-bold">
          Whats your name?
        </div>
        <div className="text-xl rotate-90 group-[.is-active]:rotate-[270deg]">
          {">"}
        </div>
      </div>
      <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100px]">
        Mi name is Rody Huancas
      </div>
    </div>
  );
};
