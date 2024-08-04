import { useEffect, useState } from "react";
import { useNuiEvent } from "../../../../../hooks/useNuiEvent";
import { fetchNui } from "../../../../../utils/fetchNui";
import { debugData } from "../../../../../utils/debugData";
import { useRace } from "../../../../../hooks/useRace";
import { nuiApi } from "@/services/nuiApi";
import MockCarImage from "@/assets/mock-car-2.jpg";
import CarImage1 from "@/assets/select-race/car-1.png";
import CarImage2 from "@/assets/select-race/car-2.png";
import CarImage3 from "@/assets/select-race/car-3.png";
import CarImage4 from "@/assets/select-race/car-4.png";

import { ImageCard } from "@/components/ImageCard";

export const SelectRace = () => {
  const { raceCountDown } = useRace();
  const [races, setRaces] = useState<any>([]);
  const [cars, setCars] = useState<any>([]);

  const carImages = [CarImage4, CarImage3, CarImage2, CarImage1];

  const [race, setRace] = useState(0);
  const [car, setCar] = useState(0);

  useEffect(() => {
    const getData = async () => {
      await nuiApi.post("votes:data", {
        data: "",
      });
    };

    getData();
  }, []);

  debugData([
    {
      action: "send_vote",
      data: {
        race: race,
        car: car,
      },
    },
  ]);

  debugData([
    {
      action: "race_addvote",
      data: {
        races: [
          {
            name: "SEEKING EVOLUTION",
            creator: "CREATOR",
            race_type: "laps",
            image: MockCarImage,
          },
          {
            name: "DANCE DANCE REVOLUTION",
            creator: "NOOBGAMER",
            race_type: "sprint",
            image: MockCarImage,
          },
          {
            name: "SPEED CHALLENGE",
            creator: "FASTFURIOUS",
            race_type: "sprint",
            image: MockCarImage,
          },
          {
            name: "DRIFT KING",
            creator: "DRIFTMANIA",
            race_type: "drift",
            image: MockCarImage,
          },
        ],

        cars: [
          {
            name: "LFA ",
            model: "N.A",
            carImage: MockCarImage,
          },
          {
            name: "ELEGY",
            model: "N.A",
            carImage: MockCarImage,
          },
          {
            name: "ELEGY",
            model: "N.A",
            carImage: MockCarImage,
          },
          {
            name: "ELEGY",
            model: "N.A",
            carImage: MockCarImage,
          },
        ],
      },
    },
  ]);

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
    <div className="h-screen w-full flex flex-col">
      {!race && races.length > 1 && (
        <div className="w-full h-full grid grid-cols-2">
          {races.map((race: any, index: any) => (
            <ImageCard
              onClick={() => setRace(index + 1)}
              key={index}
              image={carImages[index]}
              title={race.name}
              description={race.creator}
            />
          ))}
        </div>
      )}

      {cars.length > 1 && race !== 0 && (
        <div className="w-full h-full">
          <div className="w-full h-full grid grid-cols-2">
            {cars.map((car: any, index: any) => (
              <ImageCard
                onClick={() => {
                  handleVote({
                    selectedRace: race,
                    selectedCar: index + 1,
                  });
                }}
                key={index}
                image={car.carImage}
                title={car.name}
                description={car.model}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
