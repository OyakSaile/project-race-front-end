import { twMerge } from "tailwind-merge";

interface SpeedometerProps {
  mph: string;
  quilometragem: string;
}

export const Speedometer = ({ mph, quilometragem }: SpeedometerProps) => {
  const SplittedMPH = mph.split("");

  return (
    <div className="font-oswald italic text-3xl items-end  flex-col text-gray-300/40   leading-none font-bold   drop-shadow-2xl flex   ">
      {quilometragem}
      <div className="flex">
        {SplittedMPH.map((item, index) => {
          return (
            <span
              key={index}
              className={twMerge(
                " font-oswald text-8xl italic flex text-gray-300/40   "
              )}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};
