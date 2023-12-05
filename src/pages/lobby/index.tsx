import { useRace } from "@/hooks/useRace";
import { debugData } from "@/utils/debugData";
import { RainbowCloud, Trophy } from "@phosphor-icons/react";
import React, { useState } from "react";

interface raceStats {
  stats: string;
  raceId: number;
  raceName: string;
  raceHoster: string;
  raceType: string;
  raceLaps: number;
  raceCheckpoints: {};
  raceFlag: {};
  raceSpawn: {};
  hour: number;
  minute: number;
  weather: string;
  car: string;
  players: number;
  maxPlayers: number;
}

export const Lobby: React.FC = () => {
  const [raceStats, setRaceStats] = useState<raceStats>({} as raceStats);
  const { raceCountDown } = useRace();

  return (
    <div className="w-full h-screen relative">
      <div className="absolute bottom-1/2 transform translate-y-1/2   left-12 flex gap-8 flex-col  ">
        <div>
          <div className="bg-black/80 h-[300px] w-[300px] p-4">
            <>
              <h1 className="text-gray-300 font-inter text-xl font-light">
                {raceStats.raceName}
              </h1>
              <h1 className="text-gray-300 font-inter text-xl font-light">
                {raceStats.car}
              </h1>
              <div className="flex flex-col mt-4 ">
                <div className="text-gray-300 flex items-center gap-2 ">
                  <p>Weather:</p> {raceStats.weather}
                </div>

                <div className="text-gray-300 flex items-center gap-2 ">
                  <p>Time:</p> {raceStats.hour}
                </div>

                <div className="text-gray-300  flex items-center gap-2 ">
                  <p>Laps:</p>{" "}
                  <span className="font-bold">{raceStats.raceLaps}</span>
                </div>
                <div className="text-gray-300  flex items-center gap-2 ">
                  <p>Hoster:</p>{" "}
                  <span className="font-bold">{raceStats.raceHoster}</span>
                </div>

                {raceCountDown && (
                  <div className="text-gray-300  flex items-center gap-2 ">
                    <p>Wait for race start:</p>{" "}
                    <span className="font-bold">{raceCountDown}</span>
                  </div>
                )}
              </div>
            </>
          </div>
          <div className="flex  items-center justify-between mt-8">
            <span className="font-inter text-xl  text-gray-300 drop-shadow uppercase font-bold">
              Players
            </span>
            <h1 className="text-xl font-bold text-gray-300 drop-shadow font-robotoMono">
              3/24
            </h1>
          </div>
        </div>

        <button
          className="h-[50px] border  border-green-400 text-green-400 font-inter rounded-md bg-black w-[300px] font-medium text-xl "
          type="button"
        >
          JOIN RACE
        </button>
      </div>
    </div>
  );
};
