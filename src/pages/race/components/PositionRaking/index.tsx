import { twMerge } from "tailwind-merge";
import { RacerInfo, Roles } from "./RacerInfo";
export const gridSpace = "grid-cols-[50px_245px_150px_120px]";
interface PositionRankingProps {
  raceTable: {
    name: string;
    bestLap: string;
    position: string;
    role: Roles;
    gap: string;
    gapSymbol: string;
    gameped: string;
    ranking: string;
  }[];

  position: {
    currentPosition: string;
    totalRacersPosition: string;
  };
}
export const PositionRanking = ({
  raceTable,
  position,
}: PositionRankingProps) => {
  return (
    <div className="flex flex-col ">
      <div className={twMerge(" text-white grid", gridSpace)}>
        <span className=" p-0 m-0  flex justify-center items-center font-bold  h-full"></span>

        <span className=" bg-black/50   font-inter w-full px-4 py-2 flex items-center justify-between">
          <h2 className="uppercase font-inter font-medium text-xs flex items-center gap-2 text-white">
            {position.totalRacersPosition} Players
          </h2>
        </span>

        <span className=" bg-black/50  flex items-center justify-center   font-inter px-4 py-2  ">
          <h2 className="uppercase  justify-center  items-center font-inter font-medium  text-xs flex  gap-2 text-white">
            GAP
          </h2>
        </span>

        <span className=" bg-black/50 flex items-end justify-end   font-inter px-4 py-2  ">
          <h2 className="uppercase   justify-end text-xs  items-end font-inter font-medium flex  gap-2 text-white">
            Best LAP
          </h2>
        </span>
      </div>

      {raceTable.length > 0 &&
        raceTable.map((item, index) => (
          <RacerInfo
            position={item.position}
            gap={item.gap}
            bestTime={item.bestLap}
            key={index}
            name={item.name}
            role={item.role}
            gapSymbol={item.gapSymbol}
            gameped={item.gameped}
            ranking={item.ranking}
          />
        ))}
    </div>
  );
};
