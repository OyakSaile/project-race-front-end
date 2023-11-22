import {
  GameController,
  RocketLaunch,
  SketchLogo,
  Sword,
} from "@phosphor-icons/react";

export type Roles = "vip" | "staff" | "booster" | "streamer";
interface RacerInfoProps {
  name: string;
  role: Roles;
  bestTime: string;
  gap: string;
  position: string;
}
export const RacerInfo = ({
  name,
  role,
  bestTime,
  gap,
  position,
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

  return (
    <div className="flex text-white  ">
      <span className=" bg-black/60 font-robotoMono  w-[100px] flex justify-center items-center font-bold text-2xl ">
        {position}
      </span>
      <span className=" bg-black/60  font-inter w-full px-4 py-2 flex items-center justify-between">
        <h2 className="uppercase font-inter  font-bold flex items-center gap-2 ">
          {name} {raceMapped[role]?.icon}
        </h2>
      </span>

      <span className=" bg-black/60 w-[40px] flex items-end justify-end   font-inter px-4 py-2  ">
        <h2 className="uppercase  justify-end  items-end font-inter font-bold flex  gap-2 text-red-400">
          {gap}
        </h2>
      </span>
      <span className=" bg-black/60 w-[200px] flex items-end justify-end   font-inter px-4 py-2  ">
        <h2 className="uppercase font-robotoMono   justify-end  items-end  font-bold flex  gap-2 text-white">
          {bestTime}
        </h2>
      </span>
    </div>
  );
};
