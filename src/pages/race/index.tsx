import { useEffect, useState } from "react";

import { LapTime } from "./components/LapTime";
import { Position } from "./components/Position";
import { PositionRanking } from "./components/PositionRaking";
import { Roles } from "./components/PositionRaking/RacerInfo";
import { useNuiEvent } from "../../hooks/useNuiEvent";

interface RaceTable {
  name: string;
  bestLap: string;
  position: string;
  role: Roles;
  gap: string;
}

interface Race_Data {
  is_sprint_race: boolean;
  race_finished: boolean;
  pos: string;
  players: string;
  checkpoint: string;
  total_checkpoint: string;
  current_lap: string;
  laps: string;
}

interface Race_Time {
  lap_time: string;
  total_time: string;
  dnf_time: string;
  current: string;
  best_time: string;
  best_lap: string;
}

export const Race = () => {
  const [rankingOpened, setRankingOpened] = useState<boolean>(true);
  const [race, setRace] = useState({} as Race_Data);
  const [raceTime, setRaceTime] = useState({} as Race_Time);

  const hasDnf = raceTime.dnf_time !== "--:--:--";
  const isRaceFinished = race.race_finished;

  const [raceTable, setRaceRanking] = useState<RaceTable[]>([]);

  useNuiEvent("race_time", (data: Race_Time) => {
    setRaceTime(data);
  });

  useNuiEvent("race_data", (data: Race_Data) => {
    setRace(data);
  });

  useNuiEvent("race_pos_update", (data: Race_Data) => {
    setRace({
      ...race,
      pos: data.pos,
    });
  });

  useNuiEvent("race_ranking", (data) => {
    setRaceRanking(data);
  });

  const handleOpenRanking = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key !== "Tab") return;
    setRankingOpened(!rankingOpened);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleOpenRanking);

    return () => {
      window.removeEventListener("keydown", handleOpenRanking);
    };
  });

  return (
    <div className="h-screen w-full">
      <div className="absolute top-8 left-4 flex gap-4">
        <div
          className={`flex flex-col gap-4 ${
            !rankingOpened ? "hidden" : "visible"
          } transition-2`}
        >
          <PositionRanking
            position={{
              currentPosition: race.pos,
              totalRacersPosition: race.players,
            }}
            raceTable={raceTable}
          />
          <div className="flex gap-2 items-center">
            <h1 className="text-white border max-w-max px-4 py-1 font-inter font-bold border-w-max text-xs ">
              TAB
            </h1>
            <p className="text-white font-inter text-xs font-light">Stats</p>
          </div>
        </div>
        <LapTime
          time={{
            current: raceTime.lap_time,
            bestTime: raceTime.best_lap,
            dnf: hasDnf ? raceTime.dnf_time : "--:--:--",
          }}
          position={{
            currentPosition: race.pos,
            totalRacersPosition: race.players,
          }}
          rankingOpened={rankingOpened}
        />
      </div>

      <div className="absolute top-8 right-4">
        <Position
          checkPoint={{
            current: race.checkpoint,
            total: race.total_checkpoint,
          }}
          lapInfo={{
            current: race.current_lap,
            total: race.laps,
          }}
        />
      </div>
    </div>
  );
};
