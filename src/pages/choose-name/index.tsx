import React, { useState } from "react";

import { InputText } from "../../components/Form/InputText";
import { cleanAllSpecialCharacters } from "../../helpers/cleanAllSpecialCharacters";

export const ChooseName: React.FC = () => {
  const [drivertag, setDriverTag] = useState("");
  const [hasDriverTagError, setHasDriverTagError] = useState("");

  const handleCreateCharacter = async () => {
    // try {
    //   const res = await fetch(`${backendUrlPrefix}/users/character-name`, {
    //     method: 'PATCH',
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ drivertag }),
    //   }).then((response) => response.json());
    //   if (res.statusCode === 401) {
    //     setHasDriverTagError('Driver Tag Already in use');
    //   } else {
    //     triggerEvent({
    //       event: 'DRIVER_TAGGED',
    //       data: {},
    //     });
    //   }
    // } catch (err) {
    //   setHasDriverTagError('Driver Tag Already in use');
    // }
  };

  const handleChangeInput = ({ target }: any) => {
    // const cleanDriverTag = cleanAllSpecialCharacters(target.value);
    // if (cleanDriverTag.length >= 20) {
    //   return;
    // }
    // setHasDriverTagError('');
    // setDriverTag(cleanDriverTag);
  };

  return (
    <div className="w-full h-screen relative">
      <div className=" bottom-1/2 left-8 transform translate-y-1/2 absolute w-[400px] bg-black/50">
        <div className="p-8">
          <h1 className="text-3xl text-white font-bold font-inter drop-shadow-sm">
            <span className="text-blue-500">YOUR</span> INFORMATIONS
          </h1>
          <div className="mt-12   w-full">
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
            onClick={handleCreateCharacter}
            type="button"
            disabled={cleanAllSpecialCharacters(drivertag).length < 3}
            className="bg-blue-950 mt-12 font-inter disabled:bg-gray-800 disabled:cursor-not-allowed disabled:text-gray-300 hover:bg-blue-600  transition-all text-white  font-bold w-full py-4"
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};
