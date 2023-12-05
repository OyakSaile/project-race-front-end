import React, { useEffect, useState } from "react";
import { RaceAcceptBalloon } from "../../components/RaceAcceptBalloon";
import { RaceDetails } from "../../components/RaceDetails";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import { debugData } from "../../utils/debugData";
import { useRace } from "../../hooks/useRace";
import { fetchNui } from "../../utils/fetchNui";

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

// debugData([
//   {
//     action: "race_details",
//     data: {
//       stats: {
//         selected: false,
//         spawn: false,
//         started: true,
//         starting: false,
//         finished: false,
//       },
//       data: {
//         race: 0,
//         race_id: 0,
//         race_name: "Duck it penis",
//         race_type: "--",
//         race_laps: 0,
//         race_checkpoints: {},
//         race_flag: {},
//         race_spawn: {},
//         hour: 6,
//         minute: 30,
//         weather: "--",
//         car: "--",
//       },
//       players: 20,
//     },
//   },
// ]);

export const Home: React.FC = () => {
  const { raceStats, hiddeFullHud, sethiddeFullHud, playersInRace } =
    useRace();
  const [showRaceDetails, setShowRaceDetails] = useState(true);

  useNuiEvent("screen:race-details-tab", (data) => {
    setShowRaceDetails((prev) => !prev);
  });

  useNuiEvent("screen:race-details-f9", (data) => {
    sethiddeFullHud((prev) => !prev);
  });

  // const hasRaceDetails = raceStats?.data.race_name !== "--";

  return (
    <div className="w-full h-screen">
      {/* <div className="absolute bottom-14 right-12 flex gap-4 flex-col  ">
        {!hiddeFullHud && raceStats ? (
          <>
            {showRaceDetails ? (
              <RaceDetails
                playersInRace={playersInRace}
                details={raceStats}
              />
            ) : null}
            <RaceAcceptBalloon
              details={raceStats}
              hasRaceDetails={hasRaceDetails}
            />
          </>
        ) : null}
      </div> */}
    </div>
  );
};
