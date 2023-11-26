import React, { useState } from "react";
import MockImage from "@/assets/mock-car.jpg";
import { InputText } from "../../../components/Form/InputText";
import { cleanAllSpecialCharacters } from "../../../helpers/cleanAllSpecialCharacters";
import { nuiApi } from "../../../services/nuiApi";
import { Car, ClockClockwise, Rewind, X } from "@phosphor-icons/react";

export const Vstance: React.FC = () => {
  const [drivertag, setDriverTag] = useState("");
  const [hasDriverTagError, setHasDriverTagError] = useState("");

  const handleChooseDrivatagName = async () => {
    const { data } = await nuiApi.post("select_name", {
      drivertag,
    });

    if (data.message === "already_user_used") {
      setHasDriverTagError("Driver Tag Already in use");
    }
  };

  const handleChangeInput = ({ target }: any) => {
    const cleanDriverTag = cleanAllSpecialCharacters(target.value);
    if (cleanDriverTag.length >= 20) {
      return;
    }
    setHasDriverTagError("");
    setDriverTag(cleanDriverTag);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${MockImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen relative"
    >
      <div className=" bottom-1/2 left-8 transform translate-y-1/2 absolute w-[400px] bg-black/50">
        <div className="p-8">
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl  items-center flex gap-2 text-white font-bold font-inter drop-shadow-sm">
              <Car weight="fill" /> BODY KIT
            </h1>

            <div>
              <ClockClockwise
                className="text-red-300 cursor-pointer hover:brightness-50 transition-all"
                weight="fill"
                size={24}
              />
            </div>
          </div>

          <hr className="mt-6 opacity-10" />

          <div className="mt-6  w-full">
            <div className="relative">
              <InputText
                label="DRIVER TAG"
                value={drivertag}
                onChange={(e) => handleChangeInput(e)}
                id="drivertag"
                hasError={!!hasDriverTagError}
                errorMessage={hasDriverTagError}
                type="text"
                placeholder="...."
              />
            </div>

            <p className="text-gray-300 drop-shadow-sm mt-4 font-inter">
              This can't be changed
            </p>
          </div>

          <button
            onClick={handleChooseDrivatagName}
            type="button"
            disabled={cleanAllSpecialCharacters(drivertag).length < 3}
            className="bg-blue-950 mt-12 font-inter disabled:bg-gray-800 disabled:cursor-not-allowed disabled:text-gray-300 hover:bg-blue-600  transition-all text-white  font-bold w-full py-4"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
