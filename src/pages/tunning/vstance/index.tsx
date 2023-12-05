import { useNuiEvent } from "@/hooks/useNuiEvent";
import { nuiApi } from "@/services/nuiApi";
import { fetchNui } from "@/utils/fetchNui";
import { Slider } from "@nextui-org/react";
import {
  ClockClockwise
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

export const Vstance: React.FC = () => {
  const [frontWheels, setFrontWheels] = useState<number>();
  const [backWheels, setBackWheels] = useState<number>();

  useEffect(() => {
    const loadData = async () => {
      const { data } = await nuiApi.post("vstance:data");
      setFrontWheels(data.front);
      setBackWheels(data.rear);
    }


    loadData()
  }, [])





  const handleChangeFrontWheels = async () => {
    fetchNui("vstance:front_wheels", {
      data: frontWheels,
    });
  };

  const handleChangeBackWheels = async () => {
    fetchNui("vstance:back_wheels", {
      data: backWheels,
    });
  };


  const handleCloseVstancer = async () => {
    fetchNui("vstance:close");
  }


  useEffect(() => {
    handleChangeFrontWheels();
  }, [frontWheels]);

  useEffect(() => {
    handleChangeBackWheels();
  }, [backWheels]);

  const reset = () => {
    setFrontWheels(0.81);
    setBackWheels(0.81);
  };

  return (
    <div className="w-full h-screen relative">
      <div className=" bottom-1/2 left-8 transform translate-y-1/2 absolute w-[400px] bg-black/50">
        <div className="p-8">
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl  items-center flex gap-2 text-white font-bold font-inter drop-shadow-sm">
              STANCER
            </h1>

            <div>
              <ClockClockwise
                className="text-red-300 cursor-pointer hover:brightness-50 transition-all"
                weight="fill"
                size={24}
                onClick={reset}
              />
            </div>
          </div>

          <hr className="mt-6 opacity-10" />

          <div className="mt-6 w-full">
            <Slider
              label="Front wheels"
              step={0.01}
              maxValue={0.99}
              minValue={0.75}
              size="sm"
              value={frontWheels}
              onChange={(value) => {
                setFrontWheels(Number(value));
              }}
              className="max-w-sm text-white"
            />
          </div>
          <div className="mt-6  w-full">
            <Slider
              label="Back wheels"
              step={0.01}
              maxValue={0.99}
              minValue={0.75}
              size="sm"
              className="max-w-sm text-white"
              value={backWheels}
              onChange={(value) => {
                setBackWheels(Number(value));
              }}
            />
          </div>

          <button
            onClick={handleCloseVstancer}
            type="button"
            className="bg-blue-950 mt-12 font-inter disabled:bg-gray-800 disabled:cursor-not-allowed disabled:text-gray-300 hover:bg-blue-600  transition-all text-white  font-bold w-full py-4"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
