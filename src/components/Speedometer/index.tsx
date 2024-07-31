import { twMerge } from "tailwind-merge";

interface SpeedometerProps {
  mph: string;
  quilometragem: string;
}

export const Speedometer = ({ mph, quilometragem }: SpeedometerProps) => {
  const SplittedMPH = mph.split("");

  return (
    <div className="font-oswald italic text-3xl items-end flex-col text-gray-300/40 leading-none font-bold drop-shadow-2xl flex">
      {quilometragem}
      <div className="flex items-end gap-1">
        {SplittedMPH.map((item, index) => {
          return (
            <span
              key={index}
              className={twMerge(
                "font-oswald text-8xl italic flex text-gray-300/40"
              )}
            >
              {item}
            </span>
          );
        })}
        <p className="font-oswald font-medium not-italic">MPH</p>
      </div>

      <div className="flex w-full gap-1 h-[32px] mt-3">
        <div className="bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]"></div>
        <div className="bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]"></div>
        <div className="bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]"></div>
        <div className="bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]"></div>
        <div className="bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]"></div>
        <div className="bg-black/20 w-[18px] h-[34px] transform -skew-x-[12deg]"></div>
        <div className="bg-black/20 w-[18px] h-[34px] transform -skew-x-[12deg]"></div>
        <div className="bg-black/20 w-[18px] h-[34px] transform -skew-x-[12deg]"></div>
        <div className="bg-[#B9191C]/60 w-[18px] h-[34px] transform -skew-x-[12deg]"></div>
      </div>
    </div>
  );
};
