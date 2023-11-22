import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RaceCountDown = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [raceCount, setRaceCount] = useState<number | string>(4);
  const [raceEffect, setRaceEffect] = useState<boolean>(false);

  useEffect(() => {
    if (Number(raceCount) > 0) {
      if (raceCount === 4) {
        setRaceEffect(true);
        setRaceCount(3);
      }
      setTimeout(() => {
        setRaceCount(Number(raceCount) - 1);
      }, 1000);
      setTimeout(() => {
        setRaceEffect(false);
        setTimeout(() => {
          setRaceEffect(true);
        }, 500);
      }, 500);
    }
    if (raceCount === 0) {
      setRaceCount("GO");
      navigate("/race");
    }
  }, [raceCount]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div
        ref={ref}
        className={`
          transform text-white drop-shadow font-bold rounded-full w-[auto] text-9xl h-[auto]  flex justify-center items-center
        ${
          raceEffect
            ? "opacity-1  box-shadow transition-all duration-[0.4s] ease-[ease]"
            : "opacity-0  box-shadow transition-all duration-[0.4s] ease-[ease-out] scale-[1.6]"
        }
        `}
      >
        {raceCount}
      </div>
    </div>
  );
};
