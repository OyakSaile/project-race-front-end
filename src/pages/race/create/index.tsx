import { Translate } from "@phosphor-icons/react";
import React, { useState } from "react";
import { ModalBase } from "../../../components/modals/ModalBase";
import { nuiApi } from "../../../services/nuiApi";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/Form/InputText";

export const RaceCreate: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  const handleSubmit = async () => {
    try {
      //   await nuiApi.post("select_language", {
      //     language: selectedLanguage,
      //   });
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
                {/* {languageSelectTexts.title[selectedLanguage]} */}
                <h1>Criar Corrida</h1>
              </h3>
            </div>
          </div>

          <div>
            <InputText label="Nome da Corrida" placeholder="Nome da Corrida" />
          </div>
          <div className="mt-5 sm:mt-6">
            <Button onClick={handleSubmit} type="button">
              {/* {languageSelectTexts.button[selectedLanguage]} */}
            </Button>
          </div>
        </div>
      </ModalBase>
    </div>
  );
};
