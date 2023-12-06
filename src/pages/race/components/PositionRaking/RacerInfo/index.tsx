import {
  GameController,
  RocketLaunch,
  SketchLogo,
  Sword,
} from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";
import { gridSpace } from "..";

export type Roles = "vip" | "staff" | "booster" | "streamer";
interface RacerInfoProps {
  name: string;
  role: Roles;
  bestTime: string;
  gap: string;
  position: string;
  gapSymbol: string;
}
export const RacerInfo = ({
  name,
  role,
  bestTime,
  gap,
  position,
  gapSymbol,
}: RacerInfoProps) => {
  const raceMapped: { [key: string]: { icon: JSX.Element; color: string } } = {
    vip: {
      icon: <SketchLogo className="text-orange-400" size={16} weight="fill" />,
      color: "text-pink-300",
    },
    staff: {
      icon: <Sword className="text-red-400" size={16} weight="fill" />,
      color: "text-red-400",
    },
    booster: {
      icon: <RocketLaunch className="text-pink-300" size={16} weight="fill" />,
      color: "text-red-400",
    },
    streamer: {
      icon: (
        <GameController className="text-purple-500" size={16} weight="fill" />
      ),
      color: "text-purple-500",
    },
  };

  const gapColor: { [key: string]: string } = {
    "-": "text-green-400",
    "+": "text-red-400",
    "": "text-gray-400",
  };

  return (
    <div className={twMerge(" text-white grid", gridSpace)}>
      <span className="  bg-black/50  font-robotoMono  flex justify-center items-center font-bold text-2xl ">
        {position}
      </span>
      <span className=" bg-black/50  font-inter w-full px-4 py-2 flex items-center justify-between">
        <h2 className="uppercase font-inter gap-1  font-bold flex items-center ">
          {name.length > 10 ? name.slice(0, 10) + "..." : name}{" "}
          {raceMapped[role]?.icon}
        </h2>
      </span>

      <span className=" bg-black/50  flex items-center justify-center   font-inter px-4 py-2  ">
        <h2
          className={twMerge(
            "uppercase  font-inter font-bold 0",
            gapColor[gapSymbol]
          )}
        >
          {gap}
        </h2>
      </span>
      <span className=" bg-black/50  flex items-end justify-end   font-inter px-4 py-2  ">
        <h2 className="uppercase font-robotoMono  font-bold  text-white">
          {bestTime}
        </h2>
      </span>
    </div>
  );
};
