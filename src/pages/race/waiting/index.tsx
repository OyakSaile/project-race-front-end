import { Button } from "@/components/Button";
import { NextRaceCountDown } from "@/components/NextRaceCountDown";
import { RenderIf } from "@/components/RenderIf";
import { DefaultTitle } from "@/components/UI/DefaultTitle";
import { Info } from "@/components/UI/info";
import { useRace } from "@/hooks/useRace";
import { twMerge } from "tailwind-merge";

export function RaceWaiting() {
  const { raceCountDown, raceStats, playersInRace } = useRace();
  return (
    <div className="absolute bottom-1/2 transform translate-y-1/2   left-12 flex flex-col  ">
      <div className="bg-black/80 max-h-[500px] w-[300px] p-4">
        <div className="mb-4">
          <DefaultTitle className="uppercase">
            {raceStats?.data?.raceName}
          </DefaultTitle>
          <DefaultTitle className="uppercase">
            {raceStats?.data.car}
          </DefaultTitle>
        </div>

        <div className="flex flex-col  ">
          <Info title="Weather:" text={raceStats?.data.weather} />
          <Info
            title="Time:"
            text={` ${String(raceStats?.data?.hour).padStart(2, "0")}:${String(
              raceStats?.data?.minute
            ).padStart(2, "0")}`}
          />

          <RenderIf
            condition={raceStats?.data.raceType.toLocaleLowerCase() === "laps"}
          >
            <Info title="Laps:" text={raceStats?.data.raceLaps} />
          </RenderIf>

          <RenderIf
            condition={raceStats?.data.raceHoster.toLocaleLowerCase() !== "#"}
          >
            <Info title="Hoster:" text={raceStats?.data.raceHoster} />
          </RenderIf>

          <Info title="Players:" text={playersInRace} />
          <Info
            className="mt-4 text-red-200 uppercase text-xs"
            text="Wait your car to access bennys"
          />

          <div className="w-full  flex justify-center">
            <NextRaceCountDown />
          </div>
        </div>
      </div>

      <Button className={twMerge("mt-4")}>PRESS (E) TO BENNYS</Button>
    </div>
  );
}
