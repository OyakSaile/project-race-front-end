import { twMerge } from "tailwind-merge";

interface SpeedProps {
  mph: string;
}
export function Speed({ mph }: SpeedProps) {
  const SplittedMPH = mph.split("");
  return (
    <div className="flex leading-none items-center justify-center">
      {SplittedMPH.map((item, index) => {
        return (
          <span
            key={index}
            className={twMerge("font-robotoMono text-[80px] text-white/60")}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
