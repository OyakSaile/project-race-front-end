import { ArrowDown, ArrowUp } from "@phosphor-icons/react";

interface IRankingOpenedProps {
  rankingOpened: boolean;
  position: {
    currentPosition: string;
    totalRacersPosition: string;
  };

  time: {
    bestTime?: string | null;
    dnf?: string | null;
    current: string;
    totalTime: string;
    is_sprint_race: boolean;
  };
}

export const LapTime = ({
  rankingOpened,
  position,
  time,
}: IRankingOpenedProps) => {
  return (

    <div>
      {time.is_sprint_race === true && (
        <div className="flex gap-8 ">
          <div>
            <span className="font-inter md:text-sm 2xl:text-2xl  customShadow  text-white   ">
              TOTAL TIME
            </span>
            <h1 className="font-robotoMono md:text-sm 2xl:text-2xl font-bold text-white customShadow">
              {time.current}
            </h1>
    
            <div className="mt-4">
              {time?.bestTime && (
                <p className="font-robotoMono md:text-sm 2xl:text-2xl text-white customShadow flex justify-between gap-2">
                  BEST <span className="font-robotoMono">{time.bestTime}</span>
                </p>
              )}
    
              {time?.dnf && (
                <p className="font-robotoMono md:text-sm 2xl:text-2xl  items-center text-white customShadow  flex justify-between">
                  DNF <span className="font-robotoMono"> {time?.dnf}</span>
                </p>
              )}
            </div>
          </div>  
    
          <div className={`${rankingOpened ? "hidden" : "visible"}`}>
            <span className="font-inter md:text-sm 2xl:text-2xl  text-white customShadow">
              PLACE
            </span>
            <h1 className="font-robotoMono md:text-sm 2xl:text-2xl font-bold text-white customShadow">
              {position.currentPosition}/{position.totalRacersPosition}
            </h1>
          </div>
        </div>
      )}

      {time.is_sprint_race === false && (
        <div className="flex gap-8 ">
          <div>
            <span className="font-inter md:text-sm 2xl:text-2xl  customShadow  text-white   ">
              TOTAL TIME
            </span>
            <h1 className="font-robotoMono md:text-sm 2xl:text-2xl font-bold text-white customShadow">
              {time.totalTime}
            </h1>
    
            <div className="mt-4">
              {time?.bestTime && (
                <p className="font-robotoMono md:text-sm 2xl:text-2xl text-white customShadow flex justify-between gap-2">
                  BEST <span className="font-robotoMono">{time.bestTime}</span>
                </p>
              )}
    
              {time?.dnf && (
                <p className="font-robotoMono md:text-sm 2xl:text-2xl  items-center text-white customShadow  flex justify-between">
                  DNF <span className="font-robotoMono"> {time?.dnf}</span>
                </p>
              )}
            </div>
          </div>
    
          {time?.bestTime && (
            <div>
              <span className="font-inter md:text-sm 2xl:text-2xl  customShadow  text-white   ">
                  CURRENT LAP
              </span>
              <h1 className="font-robotoMono md:text-sm 2xl:text-2xl font-bold text-white customShadow">
                {time.current}
              </h1>
            </div>
          )}
    
          <div className={`${rankingOpened ? "hidden" : "visible"}`}>
            <span className="font-inter md:text-sm 2xl:text-2xl  text-white customShadow">
              PLACE
            </span>
            <h1 className="font-robotoMono md:text-sm 2xl:text-2xl font-bold text-white customShadow">
              {position.currentPosition}/{position.totalRacersPosition}
            </h1>
          </div>
        </div>
      )}
    </div>

  );
};
