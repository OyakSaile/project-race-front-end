export const Balloon = () => {
  return (
    <div className=" p-4 bg-[rgba(24,24,27,0.30)] rounded-md">
      <div className="flex gap-3  items-center">
        <span className="bg-red-500 max-w-[130px] text-xs flex justify-center items-center p-1 px-4 font-inter font-bold text-white rounded-md">
          STAFF
        </span>
        <p className="text-white font-bold text-xs font-inter">Skada [2]:</p>
        <p className="text-white text-xs">Mensagem de teste</p>
      </div>
    </div>
  );
};
