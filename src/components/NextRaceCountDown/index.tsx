import { useRace } from "@/hooks/useRace";
import { Badge } from "../Badge";
import { RenderIf } from "../RenderIf";

export function NextRaceCountDown() {
  const { raceCountDown } = useRace();

  return (
    <div className="flex gap-2">
      <RenderIf condition={raceCountDown.hour !== "-"}>
        <Badge text={raceCountDown.hour} />
      </RenderIf>
      <RenderIf condition={raceCountDown.minute !== "-"}>
        <Badge text={raceCountDown.minute} />
      </RenderIf>
      <RenderIf condition={raceCountDown.second !== "-"}>
        <Badge text={raceCountDown.second} />
      </RenderIf>
    </div>
  );
}
