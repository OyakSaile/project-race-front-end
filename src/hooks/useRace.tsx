import { ReactNode, createContext, useContext, useState } from "react";
import { useNuiEvent } from "./useNuiEvent";
import { RaceDetails } from "../components/RaceDetails";

export type languages = "pt-br" | "en-us";

interface UseRaceContext {
  raceDetails?: RaceDetailsFromApi;
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
  stats: {
    selected: boolean;
    spawn: boolean;
    started: boolean;
    starting: boolean;
    finished: boolean;
  };
  data: {
    race: number;
    race_id: number;
    race_name: string;
    race_type: string;
    race_laps: number;
    race_checkpoints: {};
    race_flag: {};
    race_spawn: {};
    hour: number;
    minute: number;
    weather: string;
    car: string;
  };
  players: number;
}

export const UseRaceProvider: React.FC<UseLanguageProviderProps> = ({
  children,
}) => {
  const [raceDetails, setRaceDetails] = useState<RaceDetailsFromApi>();
  const [playersInRace, setPlayersInRace] = useState(0);
  const [isPlayerReady, setPlayerReady] = useState(false);
  const [isUserInRace, setUserInRace] = useState(false);
  const [raceCountDown, setRaceCountDown] = useState("");
  const [hiddeFullHud, sethiddeFullHud] = useState(false);

  useNuiEvent("race_details", (data: RaceDetailsFromApi) => {
    setRaceDetails(data);
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
        raceDetails,
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
