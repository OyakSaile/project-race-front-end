import React, { useState } from "react";
import { FlagCheckered } from "@phosphor-icons/react";
import { ModalBase } from "../../components/modals/ModalBase";
import { InputText } from "../../components/Form/InputText";
import { useLanguage } from "../../hooks/useLanguage";
import { FirstLoginTexts } from "./constants/texts";
import { nuiApi } from "../../services/nuiApi";
import { cleanAllSpecialCharacters } from "../../helpers/cleanAllSpecialCharacters";

export const FirstLogin: React.FC = () => {
  const { selectedLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(true);
  const [pseudonym, setPseudonym] = useState("");
  const [errorPseudonym, setErrorPseudonym] = useState(false);

  const onHandleChoosePseudonym = async () => {
    const { data } = await nuiApi.post("select_name", {
      pseudonym,
    });

    if (data.message === "already_user_used") {
      setErrorPseudonym(true);
    }
  };

  const handleSetPseudonym = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanpseudonym = cleanAllSpecialCharacters(e.target.value);

    if (cleanpseudonym.length < 21) {
      setPseudonym(cleanpseudonym);
    }
  };

  return (
    <div className="w-full h-screen">
      <ModalBase setShowModal={setShowModal} showModal={showModal}>
        <div>
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-950">
              <FlagCheckered size={32} weight="fill" className="text-white" />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-base font-semibold text-white leading-6 text-white-900">
                {FirstLoginTexts.title[selectedLanguage]}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-400">
                  {FirstLoginTexts.description[selectedLanguage]}
                </p>
              </div>
            </div>
          </div>

          <InputText
            value={pseudonym}
            className="my-6"
            placeholder={
              FirstLoginTexts.inputPseudomin.placeholder[selectedLanguage]
            }
            name="pseudonym"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleSetPseudonym(e);
            }}
            hasError={errorPseudonym}
            errorMessage={
              errorPseudonym
                ? FirstLoginTexts.inputPseudomin.error[selectedLanguage]
                : ""
            }
          />

          <div className="mt-5 sm:mt-6">
            <button
              disabled={cleanAllSpecialCharacters(pseudonym).length < 3}
              onClick={onHandleChoosePseudonym}
              type="button"
              className=" disabled:bg-opacity-50 disabled:cursor-not-allowed  inline-flex w-full justify-center rounded-md bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {FirstLoginTexts.button[selectedLanguage]}
            </button>
          </div>
        </div>
      </ModalBase>
    </div>
  );
};
