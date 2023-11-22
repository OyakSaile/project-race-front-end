import { Translate } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Button } from "../../components/Button";
import { ModalBase } from "../../components/modals/ModalBase";
import { languages, useLanguage } from "../../hooks/useLanguage";
import { nuiApi } from "../../services/nuiApi";
import { languageSelectTexts } from "./constants/texts";
import { debugData } from "../../utils/debugData";

export const LanguageSelect: React.FC = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(true);

  const handleSubmit = async () => {
    try {
      window.localStorage.setItem("language", selectedLanguage);

      await nuiApi.post("select_language", {
        language: selectedLanguage,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full h-screen">
      <ModalBase setShowModal={setShowModal} showModal={showModal}>
        <div onSubmit={handleSubmit}>
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-950">
              <Translate size={32} weight="fill" className="text-white" />
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-base font-semibold text-white leading-6 text-white-900">
                {languageSelectTexts.title[selectedLanguage]}
              </h3>
            </div>
          </div>

          <div>
            <select
              id="location"
              name="location"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="en-us"
              value={selectedLanguage}
              onChange={(e) => {
                setSelectedLanguage(e.target.value as languages);
              }}
            >
              <option value="en-us">Inglês</option>
              <option value="pt-br">Português</option>
            </select>
          </div>
          <div className="mt-5 sm:mt-6">
            <Button onClick={handleSubmit} type="button">
              {languageSelectTexts.button[selectedLanguage]}
            </Button>
          </div>
        </div>
      </ModalBase>
    </div>
  );
};
