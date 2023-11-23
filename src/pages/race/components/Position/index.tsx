interface PositionProps {
  lapInfo: {
    current: string;
    total: string;
  };
  checkPoint: {
    current: string;
    total: string;
  };
  isSprintRace: boolean;
}

export const Position = ({
  lapInfo,
  checkPoint,
  isSprintRace,
}: PositionProps) => {
  return (
    <div className="flex gap-8  ">
      {!isSprintRace && (
        <div>
          <span className="font-inter md:text-sm 2xl:text-2xl  text-white  customShadow ">
            LAP
          </span>
          <h1 className="font-robotoMono md:text-sm 2xl:text-3xl font-bold text-white customShadow">
            {lapInfo.current}/{lapInfo.total}
          </h1>
          <div className="mt-4"></div>
        </div>
      )}

      <div>
        <span className="font-inter md:text-sm 2xl:text-2xl  text-white customShadow">
          CHECKPOINT
        </span>
        <h1 className="font-robotoMono md:text-sm 2xl:text-3xl font-bold text-white customShadow">
          {checkPoint.current}/{checkPoint.total}
        </h1>
      </div>
    </div>
  );
};
