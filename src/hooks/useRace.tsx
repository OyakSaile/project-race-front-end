import { ReactNode, createContext, useContext, useState } from "react";
import { useNuiEvent } from "./useNuiEvent";
import { RaceDetails } from "../components/RaceDetails";

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
  stats: "WAITING" | "VOTING" | "SELECTED" | "STARTING" | "FINISHED"
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
    car: string
  };
  players: number;
}

export const UseRaceProvider: React.FC<UseLanguageProviderProps> = ({
  children
}) => {
  const [raceStats, setRaceStats] = useState<RaceDetailsFromApi>({} as RaceDetailsFromApi);
  const [playersInRace, setPlayersInRace] = useState(0);
  const [isPlayerReady, setPlayerReady] = useState(false);
  const [isUserInRace, setUserInRace] = useState(false);
  const [raceCountDown, setRaceCountDown] = useState("");
  const [hiddeFullHud, sethiddeFullHud] = useState(false);

  useNuiEvent("race_details", (data: RaceDetailsFromApi) => {
    setRaceStats(data);
    setPlayersInRace(data.players);
    sethiddeFullHud(false);
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
