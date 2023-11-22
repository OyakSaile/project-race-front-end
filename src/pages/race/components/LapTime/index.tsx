import { ArrowDown, ArrowUp } from "@phosphor-icons/react";

interface IRankingOpenedProps {
  rankingOpened: boolean;
  position: {
    currentPosition: string;
    totalRacersPosition: string;
  };

  time: {
    bestTime: string;
    dnf: string;
    current: string;
  };
}

export const LapTime = ({
  rankingOpened,
  position,
  time,
}: IRankingOpenedProps) => {
  return (
    <div className="flex gap-8 ">
      <div>
        <span className="font-inter text-2xl  text-white  drop-shadow-2xl ">
          CURRENT LAP
        </span>
        <h1 className="font-robotoMono text-3xl font-bold text-white drop-shadow-2xl">
          {time.current}
        </h1>
        <div className="mt-4">
          <p className="font-robotoMono text-xl text-white drop-shadow-2xl flex justify-between">
            BEST <span className="font-robotoMono">{time.bestTime}</span>
          </p>

          <p className="font-robotoMono text-xl  items-center text-white drop-shadow-2xl  flex justify-between">
            DNF <span className="font-robotoMono"> 00:00:00</span>
          </p>
          {/* 
          <div className="mt-4">
            <p className="font-inter text-[12px]  flex-col  text-white drop-shadow-2xl  flex ">
              <div className="flex items-center gap-2">
                FILHODAPUTA_P1 <ArrowUp />
              </div>
              <span>7.5</span>
            </p>
            <p className="font-inter text-[12px] text-white drop-shadow-2xl flex-col    flex ">
              <div className="flex items-center gap-2">
                FILHODAPUTA_P1 <ArrowDown />
              </div>
              <span>7.5</span>
            </p>
          </div> */}
        </div>
      </div>

      <div className={`${rankingOpened ? "hidden" : "visible"}`}>
        <span className="font-inter text-2xl  text-white drop-shadow-2xl">
          PLACE
        </span>
        <h1 className="font-robotoMono text-3xl font-bold text-white drop-shadow-2xl">
          {position.currentPosition}/{position.totalRacersPosition}
        </h1>
      </div>
    </div>
  );
};
