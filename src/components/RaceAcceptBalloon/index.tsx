import { useEffect, useState } from "react";
import { RaceDetailsFromApi } from "../../pages/home";
import { useRace } from "../../hooks/useRace";
import { useLanguage } from "../../hooks/useLanguage";
import { raceAcceptBalloonText } from "./constants/text";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import { debugData } from "../../utils/debugData";

interface RaceAcceptBalloonProps {
  details: RaceDetailsFromApi;
  hasRaceDetails?: boolean;
}

export const RaceAcceptBalloon: React.FC<RaceAcceptBalloonProps> = ({
  details,
  hasRaceDetails,
}) => {
  const { isPlayerReady, isUserInRace, raceCountDown } = useRace();
  const { selectedLanguage } = useLanguage();
  const [raceStatus, setRaceStatus] = useState("");

  useEffect(() => {
    if (Object.values(details.stats).every((v) => v === false)) {
      setRaceStatus("Selecionando a corrida");
    }

    if (details.stats.selected) {
      setRaceStatus("Corrida selecionada");
    }

    if (details.stats.spawn) {
      setRaceStatus("Corrida prestes a iniciar.");
    }

    if (
      details.stats.started ||
      details.stats.finished ||
      details.stats.starting
    ) {
      setRaceStatus("Corrida em progresso");
    }

    // setRaceStatus("Corrida Prestes a iniciar");
  }, [details]);

  if (isUserInRace) {
    return (
      <div className="bg-[rgba(0,0,0,0.8)]  rounded-md p-4">
        <h1 className="text-white font-bold text-xl">
          {raceAcceptBalloonText.waitRaceStart[selectedLanguage]}{" "}
          {raceCountDown ? `${raceCountDown}` : null}
        </h1>

        <p className=" text-xs text-gray-300">
          {raceAcceptBalloonText.waitYourVehicle[selectedLanguage]}{" "}
        </p>
        <div className="flex  gap-4 items-center mt-4 ">
          <div className=" text-white mt-2 flex items-center gap-2">
            <p className="border border-bg-blue-950 max-w-max  px-2 font-bold text-xs  rounded-md border-blue-600 ">
              E
            </p>
            <span className=" text-xs font-bold ">
              {raceAcceptBalloonText.accessBennys[selectedLanguage]}{" "}
            </span>
          </div>

          <div className=" text-white mt-2 flex items-center gap-2">
            <p className="border border-bg-blue-950 max-w-max  px-2 font-bold text-xs  rounded-md border-blue-600 ">
              TAB
            </p>
            <span className=" text-xs font-bold ">
              {" "}
              {raceAcceptBalloonText.raceDetailsText[selectedLanguage]}{" "}
            </span>
          </div>

          <div className=" text-white mt-2 flex items-center gap-2">
            <p className="border border-bg-blue-950 max-w-max  px-2 font-bold text-xs  rounded-md border-blue-600 ">
              F9
            </p>
            <span className=" text-xs font-bold ">
              {raceAcceptBalloonText.hiddeButton[selectedLanguage]}{" "}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[rgba(0,0,0,0.8)] w-[450px]  rounded-md p-4">
      <h1 className="text-white font-bold text-xl">
        {raceAcceptBalloonText.raceStatusMappedAndTranslated[selectedLanguage][
          raceStatus
        ] || ""}{" "}
        {raceCountDown && raceStatus === "Corrida selecionada"
          ? `${raceCountDown}`
          : null}
      </h1>
      {raceStatus === "Corrida selecionada" && (
        <>
          {isPlayerReady && (
            <p className="text-green-500 text-sm font-bold">
              {raceAcceptBalloonText.acceptedRace[selectedLanguage]}{" "}
            </p>
          )}
          {!isPlayerReady && (
            <p className="text-red-500 text-sm font-bold">
              {raceAcceptBalloonText.notAcceptedRace[selectedLanguage]}
            </p>
          )}
          <p className=" text-xs text-gray-300">
            {raceAcceptBalloonText.ifYouDoNotAccept[selectedLanguage]}
          </p>
        </>
      )}

      {raceStatus === "Selecionando a corrida" && (
        <p className="text-gray-400 text-sm ">
          {raceAcceptBalloonText.waitTheRaceSelected[selectedLanguage]}{" "}
        </p>
      )}

      {raceStatus === "Corrida em progresso" && (
        <p className="text-gray-400 text-sm ">
          {raceAcceptBalloonText.waitTheNextRace[selectedLanguage]}{" "}
        </p>
      )}

      <div className="flex  gap-4 items-center mt-4 ">
        {raceStatus === "Corrida selecionada" && (
          <div className=" text-white mt-2 flex items-center gap-2">
            <p className="border border-bg-blue-950 max-w-max  px-2 font-bold text-xs  rounded-md border-blue-600 ">
              E
            </p>
            <span className=" text-xs font-bold ">
              {!isPlayerReady
                ? raceAcceptBalloonText.playerReadyText[selectedLanguage]
                : raceAcceptBalloonText.playerNotReadyText[selectedLanguage]}
            </span>
          </div>
        )}

        {hasRaceDetails && (
          <div className=" text-white mt-2 flex items-center gap-2">
            <p className="border border-bg-blue-950 max-w-max  px-2 font-bold text-xs  rounded-md border-blue-600 ">
              TAB
            </p>
            <span className=" text-xs font-bold ">
              {" "}
              {raceAcceptBalloonText.raceDetailsText[selectedLanguage]}{" "}
            </span>
          </div>
        )}
        <div className=" text-white mt-2 flex items-center gap-2">
          <p className="border border-bg-blue-950 max-w-max  px-2 font-bold text-xs  rounded-md border-blue-600 ">
            F9
          </p>
          <span className=" text-xs font-bold ">
            {" "}
            {raceAcceptBalloonText.hiddeButton[selectedLanguage]}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
