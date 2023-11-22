interface RaceTimeProps {
  isRaceFinished: boolean;
  isSprintRace: boolean;
  position: {
    actual: string;
    total: string;
  };
  lap: {
    current: string;
    total: string;
    checkpoints: {
      currentCheckpoint: string;
      totalCheckpoints: string;
    };
    time: {
      current: string;
      best?: string;
      total: string;
    };
  };

  dnf?: {
    time: string;
  };
}
export const RaceTime: React.FC<RaceTimeProps> = ({
  position,
  lap,
  dnf,
  isRaceFinished,
  isSprintRace,
}) => {
  return (
    <div className=" w-[250px]  flex flex-col  relative ">
      <div className="bg-[rgba(24,24,27,0.40)]  w-full h-full absolute rounded-md"></div>
      <div className="z-50  p-4">
        {dnf?.time !== "--:--:--" && !isRaceFinished && (
          <div className="text-white flex justify-between font-bold ">
            <h1 className="text-">DNF</h1>
            <p className="font-robotoMono">{dnf?.time}</p>
          </div>
        )}

        <div className="text-white flex justify-between font-bold">
          <h1 className={`${isRaceFinished && "text-green-400"}`}>POS</h1>
          <p className={`${isRaceFinished && "text-green-400"}`}>
            <span className="font-robotoMono">{position.actual || "-"}</span>/{position.total || "-"}
          </p>
        </div>

        {!isRaceFinished && !isSprintRace && (
          <div className="text-white flex justify-between font-bold ">
            <h1>LAP</h1>
            <p className="font-robotoMono">
              {lap.current || "-"}/{lap.total || "-"}
            </p>
          </div>
        )}

        {!isRaceFinished && (
          <div className="text-white flex justify-between font-bold ">
            <h1>Checkpoint</h1>
            <p>
              {lap.checkpoints.currentCheckpoint || "-"}/
              {lap.checkpoints.totalCheckpoints || "-"}
            </p>
          </div>
        )}

        <div className="text-white flex justify-between font-bold ">
          <h1>Current Lap </h1>
          <p className="font-robotoMono"> {lap.time.current || "-"}</p>
        </div>

        <div className="text-white flex justify-between font-bold ">
          <h1>Best Lap </h1>
          <p className="font-robotoMono">{lap.time.best || "-"}</p>
        </div>

        <div className="text-white flex justify-between font-mono font-bold ">
          <h1>Total Time </h1>
          <p className="font-robotoMono">{lap.time.total || "-"}</p>
        </div>
      </div>
    </div>
  );
};
