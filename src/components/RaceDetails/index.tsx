import { User } from "@phosphor-icons/react";
import { RaceDetailsFromApi } from "../../pages/home";
import { useLanguage } from "../../hooks/useLanguage";
import { textRaceDetails } from "./constants/textRaceDetails";

interface RaceDetailsProps {
  details: RaceDetailsFromApi;
  playersInRace?: number;
}
export const RaceDetails: React.FC<RaceDetailsProps> = ({
  details,
  playersInRace,
}) => {
  const { selectedLanguage } = useLanguage();
  return (
    <div className="rounded-md bg-[rgba(0,0,0,0.8)] p-4">
      <h1 className="text-white font-bold text-xl">
        {details?.data?.race_name}
      </h1>

      <p className="text-white text-sm font-bold flex gap-2 items-center mt-4">
        {details.data?.race_type === "Laps"
          ? textRaceDetails.laps[selectedLanguage]
          : null}
        {details.data?.race_type === "Laps" ? details?.data?.race_laps : ""}
      </p>

      <p className="text-white text-sm font-robotoMono font-bold flex gap-2 items-center">
        {textRaceDetails.timeText[selectedLanguage]}:{" "}
        {String(details?.data?.hour).padStart(2, "0")}:
        {String(details?.data?.minute).padStart(2, "0")}
      </p>

      <p className="text-white text-sm font-bold flex gap-2 items-center">
        {textRaceDetails.weather[selectedLanguage]}: {details?.data?.weather}
      </p>

      <p className="text-white text-sm font-bold flex gap-2 items-center">
        {textRaceDetails.car[selectedLanguage]}:{" "}
        {details?.data?.car.toUpperCase()}
      </p>

      <p className="text-white  text-md font-bold flex gap-1 items-center mt-4 ">
        <User weight="fill" />: {playersInRace || details?.players}
      </p>
    </div>
  );
};
