interface PositionProps {
  lapInfo: {
    current: string;
    total: string;
  };
  checkPoint: {
    current: string;
    total: string;
  };
}

export const Position = ({ lapInfo, checkPoint }: PositionProps) => {
  return (
    <div className="flex gap-8 ">
      <div>
        <span className="font-inter text-2xl  text-white drop-shadow-2xl ">
          LAP
        </span>
        <h1 className="font-robotoMono text-3xl font-bold text-white drop-shadow-2xl">
          {lapInfo.current}/{lapInfo.total}
        </h1>
        <div className="mt-4"></div>
      </div>

      <div>
        <span className="font-inter text-2xl  text-gray-300 drop-shadow-2xl">
          CHECKPOINT
        </span>
        <h1 className="font-robotoMono text-3xl font-bold text-white drop-shadow-2xl">
          {checkPoint.current}/{checkPoint.total}
        </h1>
      </div>
    </div>
  );
};
