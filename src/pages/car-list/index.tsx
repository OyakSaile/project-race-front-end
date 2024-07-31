import MockImage from "@/assets/mock-car.jpg";
import { Button } from "@/components/Button";
import { RenderIf } from "@/components/RenderIf";
import { Info } from "@/components/UI/info";
import { useNuiEvent } from "@/hooks/useNuiEvent";
import { nuiApi } from "@/services/nuiApi";
import { fetchNui } from "@/utils/fetchNui";
import { ClockClockwise, X } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

export const CarList: React.FC = () => {
  const [cars, setCars] = useState<{ name: string; image: string }[]>([]);

  useEffect(() => {
    const loadData = async () => {
      await nuiApi.post("cars:data");
    };

    loadData();
  }, []);

  useNuiEvent("cars:list", (data) => {
    setCars(data);
  });

  const handleSpawnCar = (name: string) => {
    fetchNui("cars:spawnCar", {
      data: name,
    });
  };

  const handleCloseCars = () => {
    fetchNui("cars:close");
  };

  return (
    <div className="w-full h-screen relative bg-none">
      <div className=" bottom-1/2  left-8 transform translate-y-1/2 absolute max-w-[500px] bg-black/80">
        <div className="p-8">
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl  items-center flex gap-2 text-white font-bold font-inter drop-shadow-sm">
              Car List
            </h1>

            <div>
              <X
                onClick={handleCloseCars}
                className="text-white cursor-pointer hover:brightness-50 transition-all"
                size={24}
              />
            </div>
          </div>

          <hr className="mt-6 opacity-10" />

          <div className="mt-6  no-scrollbar h-[500px] overflow-y-auto gap-4 grid grid-cols-3">
            <RenderIf condition={cars.length > 0}>
              {cars?.map((item, index) => (
                <div key={index} className="text-left flex flex-col gap-4">
                  <div>
                    <img className="w-[150px]" src={item.image} alt="" />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <Info
                      className="text-white font-bold uppercase leading-4"
                      title={item.name}
                    ></Info>

                    <Button
                      onClick={() => handleSpawnCar(item.name)}
                      type="button"
                      className="border-blue-950 rounded-md  border text-xs p-2 font-inter disabled:bg-gray-800 disabled:cursor-not-allowed disabled:text-gray-300 hover:bg-blue-600  transition-all text-white  font-bold w-full "
                    >
                      Spawn
                    </Button>
                  </div>
                </div>
              ))}
            </RenderIf>
          </div>
        </div>
      </div>
    </div>
  );
};
