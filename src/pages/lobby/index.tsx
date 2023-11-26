import { RainbowCloud, Trophy } from "@phosphor-icons/react";
import React from "react";

export const Lobby: React.FC = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute bottom-1/2 transform translate-y-1/2   left-12 flex gap-8 flex-col  ">
        <div>
          <div className="bg-black/50 p-2">
            <h1 className="text-gray-300 text-xs font-inter font-bold"></h1>
          </div>
          <div className="bg-black/50 h-[200px]  relative p-4">
            <div className="bg-black/80 w-[100px] h-[100px] p-4 absolute bottom-8 flex justify-center items-center flex-col left-4">
              <h2 className="text-gray-300 font-bold">
                <Trophy className="font-blue-950" size={32} weight="fill" />
              </h2>
              <p className="text-gray-300 font-bold text-2xl">30</p>
            </div>
          </div>

          <div className="bg-black/80 h-[210px] w-[300px] p-4">
            <>
              <h1 className="text-gray-300 font-inter text-xl font-light">
                race name
              </h1>
              <h1 className="text-gray-300 font-inter text-xl font-light">
                Elegy Retro
              </h1>
              <div className="flex flex-col mt-4 ">
                <div className="text-gray-300 flex items-center gap-2 ">
                  <p>Weather:</p> <RainbowCloud size={32} />
                </div>

                <div className="text-gray-300 flex items-center gap-2 ">
                  <p>Time:</p> 00:30
                </div>

                <div className="text-gray-300  flex items-center gap-2 ">
                  <p>Laps:</p> <span className="font-bold">racename</span>
                </div>

                <div className="text-gray-300  flex items-center gap-2 ">
                  <p>Wait for race start:</p>{" "}
                  <span className="font-bold">1M 24S</span>
                </div>
              </div>
            </>
          </div>
          <div className="flex  items-center justify-between mt-8">
            <span className="font-inter text-xl  text-gray-300 drop-shadow uppercase font-bold">
              Players
            </span>
            <h1 className="text-xl font-bold text-gray-300 drop-shadow font-robotoMono">
              3/24
            </h1>
          </div>
        </div>

        <button
          className="h-[50px] border  border-green-400 text-green-400 font-inter rounded-md bg-black w-[300px] font-medium text-xl "
          type="button"
        >
          JOIN RACE
        </button>
      </div>
    </div>
  );
};
