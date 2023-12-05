import { Info } from "@/components/UI/info";
import { useNuiEvent } from "@/hooks/useNuiEvent";
import { RaceDetailsFromApi, useRace } from "@/hooks/useRace";
import { debugData } from "@/utils/debugData";
import { fetchNui } from "@/utils/fetchNui";
import { RainbowCloud, Trophy } from "@phosphor-icons/react";
import React, { useState } from "react";

debugData<RaceDetailsFromApi>([
  {
    action: "race_details",
    data: {
      data: {
        raceName: "test",
        car: "test",
        weather: "test",
        hour: 0,
        minute: 20,
        seconds: 30,
        raceStart: "test",
      }
      ,
      stats: "WAITING",
    },
  }
])
export const Lobby: React.FC = () => {
  const { raceCountDown, raceStats, playersInRace, isPlayerReady } = useRace();
  return (
    <div className="w-full h-screen relative">
      <div className="absolute bottom-1/2 transform translate-y-1/2   left-12 flex gap-8 flex-col  ">
        <div>
          <div className="bg-black/80 h-[300px] w-[300px] p-4">
            <>
              <h1 className="text-gray-300 font-inter text-xl font-light">
                {raceStats?.data?.raceName}
              </h1>
              <h1 className="text-gray-300 font-inter text-xl font-light">
                {raceStats?.data.car}
              </h1>
              <div className="flex flex-col mt-4 ">



                <Info title=">Weather:" text={raceStats?.data.weather} />

                <Info title=">Time:" text={raceStats?.data.hour} />


                <Info title=">Laps:" text={raceStats?.data.raceLaps} />

                <Info title=">Hoster:" text={raceStats?.data.raceHoster} />

                {raceCountDown && (
                  <Info title="Wait for race start:" text={raceCountDown} />
                )}
              </div>
            </>
          </div>
          <div className="flex  items-center justify-between mt-8">
            <span className="font-inter text-xl  text-gray-300 drop-shadow uppercase font-bold">
              Players
            </span>
            <h1 className="text-xl font-bold text-gray-300 drop-shadow font-robotoMono">
              {playersInRace}
            </h1>
          </div>
        </div>

        {!isPlayerReady && (
          <button
            className="h-[50px] border  border-green-400 text-green-400 font-inter rounded-md bg-black w-[300px] font-medium text-xl "
            type="button"
          >
            JOIN RACE
          </button>
        )}

        {isPlayerReady && (
          <button
            className="h-[50px] border  border-red-400 text-red-400 font-inter rounded-md bg-black w-[300px] font-medium text-xl "
            type="button"
          >
            LEAVE RACE
          </button>
        )}
      </div>
    </div>
  );
};
