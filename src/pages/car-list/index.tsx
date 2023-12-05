import MockImage from "@/assets/mock-car.jpg";
import { ClockClockwise, X } from "@phosphor-icons/react";
import React, { useState } from "react";

export const CarList: React.FC = () => {
  const [drivertag, setDriverTag] = useState("");
  const [hasDriverTagError, setHasDriverTagError] = useState("");

  const mockCarData = [
    {
      name: "Car 1",
      image: MockImage,
    },
    {
      name: "Car 1",
      image: MockImage,
    },
    {
      name: "Car 1",
      image: MockImage,
    },
    {
      name: "Car 1",
      image: MockImage,
    },
    {
      name: "Car 1",
      image: MockImage,
    },
    {
      name: "Car 1",
      image: MockImage,
    },
    {
      name: "Car 1",
      image: MockImage,
    },
    {
      name: "Car 1",
      image: MockImage,
    },
    {
      name: "Car 1",
      image: MockImage,
    },
    {
      name: "Car 1",
      image: MockImage,
    },

    {
      name: "Car 1",
      image: MockImage,
    },
  ];
  // const handleChooseDrivatagName = async () => {
  //   const { data } = await nuiApi.post("select_name", {
  //     drivertag,
  //   });

  //   if (data.message === "already_user_used") {
  //     setHasDriverTagError("Driver Tag Already in use");
  //   }
  // };

  // const handleChangeInput = ({ target }: any) => {
  //   const cleanDriverTag = cleanAllSpecialCharacters(target.value);
  //   if (cleanDriverTag.length >= 20) {
  //     return;
  //   }
  //   setHasDriverTagError("");
  //   setDriverTag(cleanDriverTag);
  // };

  return (
    <div className="w-full h-screen relative bg-none">
      <div className=" bottom-1/2  left-8 transform translate-y-1/2 absolute w-[400px] bg-black/80">
        <div className="p-8">
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl  items-center flex gap-2 text-white font-bold font-inter drop-shadow-sm">
              Car List
            </h1>

            <div>
              <X
                className="text-white cursor-pointer hover:brightness-50 transition-all"
                size={24}
              />
            </div>
          </div>

          <hr className="mt-6 opacity-10" />

          <div className="mt-6  no-scrollbar h-[500px] overflow-y-auto gap-4 grid grid-cols-2">
            {mockCarData.map((item, index) => (
              <div className="text-left flex flex-col gap-4">
                <div>
                  <img className="w-[150px]" src={MockImage} alt="" />
                </div>
                <div className="flex gap-2 flex-col">
                  <h1 className="text-white font-bold leading-4">LFA</h1>

                  <button
                    type="button"
                    className="border-blue-950 rounded-md  border text-xs p-2 font-inter disabled:bg-gray-800 disabled:cursor-not-allowed disabled:text-gray-300 hover:bg-blue-600  transition-all text-white  font-bold w-full "
                  >
                    Spawn
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
