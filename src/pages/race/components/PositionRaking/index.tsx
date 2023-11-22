import { RacerInfo, Roles } from "./RacerInfo";

interface PositionRankingProps {
  raceTable: {
    name: string;
    bestLap: string;
    position: string;
    role: Roles;
    gap: string;
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
    <div className="flex flex-col gap-0 w-[500px]">
      <div className="flex text-white items-center  ">
        <span className=" bg-black/60  w-[100px] flex justify-center items-center font-bold text-2xl "></span>
        <span className=" bg-black/60   font-inter w-full px-4 py-2 flex items-center justify-between">
          <h2 className="uppercase font-inter font-medium text-xs flex items-center gap-2 text-white">
            {position.totalRacersPosition} Players
          </h2>
        </span>

        <span className=" bg-black/60 w-[40px] flex items-end justify-end   font-inter px-4 py-2  ">
          <h2 className="uppercase  justify-end  items-end font-inter font-medium  text-xs flex  gap-2 text-white">
            GAP
          </h2>
        </span>
        <span className=" bg-black/60 w-[200px] flex items-end justify-end   font-inter px-4 py-2  ">
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
          />
        ))}
    </div>
  );
};
