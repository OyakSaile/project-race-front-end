import { twMerge } from "tailwind-merge";

interface SpeedometerProps {
  mph: string;
  quilometragem: string;
  rpm?: number;
}

export const Speedometer = ({ mph, quilometragem, rpm }: SpeedometerProps) => {
  const SplittedMPH = mph.split("");

  return (
    <div className="font-oswald italic text-3xl items-end flex-col text-gray-300/40 leading-none font-bold drop-shadow-2xl flex">
      <div className="flex items-end gap-1">
        {SplittedMPH.map((item, index) => {
          return (
            <span
              key={index}
              className={twMerge(
                "font-robotoMono text-8xl italic flex text-gray-300/40"
              )}
            >
              {item}
            </span>
          );
        })}
        <p className="font-oswald font-medium not-italic">{quilometragem}</p>
      </div>

      <div className="flex w-full gap-1 h-[32px] mt-3">
        <div
          className={twMerge(
            "bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]",
            rpm && rpm >= 10 ? "bg-white/25" : "bg-black/20"
          )}
        ></div>
        <div
          className={twMerge(
            "bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]",
            rpm && rpm >= 20 ? "bg-white/25" : "bg-black/20"
          )}
        ></div>
        <div
          className={twMerge(
            "bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]",
            rpm && rpm >= 30 ? "bg-white/25" : "bg-black/20"
          )}
        ></div>
        <div
          className={twMerge(
            "bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]",
            rpm && rpm >= 40 ? "bg-white/25" : "bg-black/20"
          )}
        ></div>
        <div
          className={twMerge(
            "bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]",
            rpm && rpm >= 50 ? "bg-white/25" : "bg-black/20"
          )}
        ></div>
        <div
          className={twMerge(
            "bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]",
            rpm && rpm >= 60 ? "bg-white/25" : "bg-black/20"
          )}
        ></div>
        <div
          className={twMerge(
            "bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]",
            rpm && rpm >= 70 ? "bg-white/25" : "bg-black/20"
          )}
        ></div>
        <div
          className={twMerge(
            "bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]",
            rpm && rpm >= 80 ? "bg-white/25" : "bg-black/20"
          )}
        ></div>
        <div
          className={twMerge(
            "bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]",
            rpm && rpm >= 90 ? "bg-white/25" : "bg-black/20"
          )}
        ></div>
        <div
          className={twMerge(
            "bg-white/25 w-[18px] h-[34px] transform -skew-x-[12deg]",
            rpm && rpm >= 100 ? "bg-[#B9191C]" : "bg-[#B9191C]/60"
          )}
        ></div>
      </div>
    </div>
  );
};
