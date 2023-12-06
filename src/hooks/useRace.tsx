import { ReactNode, createContext, useContext, useState } from "react";
import { useNuiEvent } from "./useNuiEvent";
import { RaceDetails } from "../components/RaceDetails";
import { debugData } from "@/utils/debugData";

export type languages = "pt-br" | "en-us";

interface UseRaceContext {
  raceStats?: RaceDetailsFromApi;
  isPlayerReady?: boolean;
  isUserInRace: boolean;
  raceCountDown: string;
  hiddeFullHud: boolean;
  sethiddeFullHud: React.Dispatch<React.SetStateAction<boolean>>;
  playersInRace?: number;
}

export const UseRaceContext = createContext({} as UseRaceContext);

interface UseLanguageProviderProps {
  children: ReactNode;
}

export interface RaceDetailsFromApi {
  stats:
    | "WAITING"
    | "VOTING"
    | "SELECTED"
    | "STARTING"
    | "FINISHED"
    | "STARTED";
  data: {
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
  };
  players: number;
}

// debugData<RaceDetailsFromApi>([
//   {
//     action: "race_details",
//     data: {
//       players: 0,
//       data: {
//         raceId: 0,
//         raceName: "TESTANDO NOME DA CORRIDA DE RETARDADO FAEKOFEAKOEFKO",
//         raceHoster: "pr",
//         raceType: "oi",
//         raceLaps: 0,
//         raceCheckpoints: {},
//         raceFlag: {},
//         raceSpawn: {},
//         hour: 0,
//         minute: 0,
//         weather: "oi",
//         car: "R34",
//       },
//       stats: "WAITING",
//     },
//   },
// ]);

export const UseRaceProvider: React.FC<UseLanguageProviderProps> = ({
  children,
}) => {
  const [raceStats, setRaceStats] = useState<RaceDetailsFromApi>();
  const [playersInRace, setPlayersInRace] = useState(0);
  const [isPlayerReady, setPlayerReady] = useState(false);
  const [isUserInRace, setUserInRace] = useState(false);
  const [raceCountDown, setRaceCountDown] = useState("");
  const [hiddeFullHud, sethiddeFullHud] = useState(false);

  useNuiEvent("race_details", (data) => {
    setRaceStats(data);
    setPlayersInRace(data.players);
  });

  useNuiEvent("race_players", (data) => {
    setPlayersInRace(data);
  });

  useNuiEvent("race:is_player_ready", (data) => {
    setPlayerReady(data);
  });

  useNuiEvent("race:seting_race", (data) => {
    setUserInRace(data);
  });

  useNuiEvent("race:next-race-countdown", (data) => {
    setRaceCountDown(data);
  });

  return (
    <UseRaceContext.Provider
      value={{
        raceCountDown,
        raceStats,
        isPlayerReady,
        isUserInRace,
        hiddeFullHud,
        sethiddeFullHud,
        playersInRace,
      }}
    >
      {children}
    </UseRaceContext.Provider>
  );
};

export const useRace = () => {
  return useContext(UseRaceContext);
};
