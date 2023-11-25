import { useEffect, useState } from "react";
import { useNuiEvent } from "../../../../../hooks/useNuiEvent";
import { fetchNui } from "../../../../../utils/fetchNui";
import { debugData } from "../../../../../utils/debugData";
import { useRace } from "../../../../../hooks/useRace";
export const SelectRace = () => {
  const { raceCountDown } = useRace();
  const [races, setRaces] = useState<any>([]);
  const [cars, setCars] = useState<any>([]);

  const [race, setRace] = useState(0);
  const [car, setCar] = useState(0);

  // debugData([
  //   {
  //     action: "send_vote",
  //     data: {
  //       race: race,
  //       car: car,
  //     },
  //   },
  // ]);

  // debugData([
  //   {
  //     action: "race_addvote",
  //     data: {
  //       races: [
  //         {
  //           name: "RACE 1",
  //           creator: "CREATOR",
  //           race_type: "laps",
  //         },
  //         {
  //           name: "DANCE DANCE REVOLUTION",
  //           creator: "NOOBGAMER",
  //           race_type: "sprint",
  //         },
  //       ],

  //       cars: [
  //         {
  //           name: "LFA ",
  //           model: "N.A",
  //           carImage: "",
  //         },
  //         {
  //           name: "ELEGY",
  //           model: "N.A",
  //           carImage: "",
  //         },
  //       ],
  //     },
  //   },
  // ]);

  const handleVote = ({
    selectedCar,
    selectedRace,
  }: {
    selectedRace: number;
    selectedCar: number;
  }) => {
    fetchNui("send_vote", {
      race: selectedRace,
      car: selectedCar,
    });
  };

  useNuiEvent("race_addvote", (data) => {
    setRaces(data.races);
    setCars(data.cars);
  });

  return (
    <div className="w-full h-full">
      {!race && races.length > 1 && (
        <div>
          <div className="absolute bg-black flex-col w-[300px] justify-center items-center flex font-bold p-4 text-3xl z-50 text-white left-1/2 top-24 -translate-x-1/2 ">
            <p> CHOOSE RACE</p> <p>{raceCountDown}</p>
          </div>

          <div className="grid grid-cols-2 absolute w-full left-1/2 top-1/2   -translate-y-1/2   -translate-x-1/2  ">
            {races[0] && (
              <div
                onClick={() => setRace(1)}
                className="hover:filter  group  h-[500px] hover:brightness-50 transition-all group-transition-all cursor-pointer relative"
              >
                <div className="group-hover:bg-black  bg-white  w-full absolute flex-col px-8  py-4 bottom-10 flex items-end justify-end">
                  <h2 className="font-oswald text-6xl italic text-black group-hover:text-white">
                    {races[0].name}
                  </h2>
                  <h2 className="font-oswald text-2xl group-hover:text-white italic">
                    BY: {races[0].creator}
                  </h2>
                </div>
              </div>
            )}
            <div
              onClick={() => setRace(2)}
              className="hover:filter  group  h-[500px] hover:brightness-50 transition-all cursor-pointer relative"
            >
              <div className="group-hover:bg-black bg-white  w-full absolute flex-col px-8  py-4 bottom-10 flex items-start justify-start">
                <h2 className="font-oswald text-6xl italic text-black group-hover:text-white">
                  {races[1].name}
                </h2>
                <h2 className="font-oswald text-2xl group-hover:text-white italic">
                  BY: {races[1].creator}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {cars.length > 1 && race !== 0 && (
        <div className="w-full h-full">
          <div className="absolute bg-black flex-col w-[300px] justify-center items-center flex font-bold p-4 text-3xl z-50 text-white  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <p> CHOOSE CAR</p> <p>{raceCountDown}</p>
          </div>
          <div className="grid grid-cols-2 w-full h-full ">
            <div
              onClick={() => {
                handleVote({
                  selectedRace: race,
                  selectedCar: 1,
                });
              }}
              className="hover:filter hover:brightness-50 cursor-pointer transition-all relative"
            >
              <img
                className="w-full h-full object-cover"
                src={cars[0].carImage}
                alt=""
              />
              <div className="bg-white w-full absolute flex-col py-4 px-8 bottom-10 flex items-end justify-end">
                <h2 className="font-oswald text-8xl italic">{cars[0].name}</h2>
                <h2 className="font-oswald text-2xl text-gray-400 italic">
                  {cars[0].model}
                </h2>
              </div>
            </div>

            <div
              onClick={() => {
                handleVote({
                  selectedRace: race,
                  selectedCar: 2,
                });
              }}
              className="hover:filter hover:brightness-50 transition-all cursor-pointer relative"
            >
              <img
                className="w-full h-full object-cover"
                src={cars[1].carImage}
                alt=""
              />
              <div className="bg-black w-full absolute flex-col px-8  py-4 bottom-10 flex items-start justify-start">
                <h2 className="font-oswald text-8xl italic text-white">
                  {cars[1].name}
                </h2>
                <h2 className="font-oswald text-2xl text-white italic">
                  {cars[1].model}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
