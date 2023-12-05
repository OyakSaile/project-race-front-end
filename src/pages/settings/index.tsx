import { Gear, Translate } from "@phosphor-icons/react";
import { ModalBase } from "../../components/modals/ModalBase";
import { Button } from "../../components/Button";
import { useState } from "react";
import { RaceTime } from "../../components/Races/RaceTime";
import { Car } from "@phosphor-icons/react/dist/ssr";

export const Settings = () => {
  const [showModal, setShowModal] = useState(true);
  const [raceResumePosition, setRaceResumePosition] = useState("bottom");

  const handleSetResumePosition = (position: string) => {
    setRaceResumePosition(position);
  };

  return (
    <div className="w-full h-screen">
      <ModalBase setShowModal={setShowModal} showModal={showModal}>
        <div>
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-950">
              <Gear size={32} weight="fill" className="text-white" />
            </div>

            <div className="mt-3 sm:mt-5">
              <h3 className="text-base font-semibold text-white leading-6 text-white-900">
                Race Information
              </h3>

              <div className="bg-black mt-6 border border-blue-950 rounded-md">
                <div className="flex justify-between p-4  ">
                  <Car size={32} weight="fill" className="text-blue-950" />
                  <Car
                    size={32}
                    weight="fill"
                    className={`${raceResumePosition === "top"
                        ? "text-white"
                        : "text-blue-950"
                      }`}
                    onClick={() => handleSetResumePosition("top")}
                  />
                </div>
                <div className="flex justify-between p-4  ">
                  <Car size={32} weight="fill" className="text-blue-950" />
                  <Car
                    onClick={() => handleSetResumePosition("bottom")}
                    size={32}
                    weight="fill"
                    className={`${raceResumePosition === "bottom"
                        ? "text-white"
                        : "text-blue-950"
                      }`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <Button type="button">Confirmar</Button>
          </div>
        </div>
      </ModalBase>

      <div className={`absolute ${raceResumePosition}-8 right-4`}>
        <RaceTime
          isSprintRace={false}
          isRaceFinished={false}
          dnf={{
            time: "--:--:--",
          }}
          position={{
            actual: "--:--:--",
            total: "--:--:--",
          }}
          lap={{
            current: "",
            total: "0",
            checkpoints: {
              currentCheckpoint: "0",
              totalCheckpoints: "30",
            },
            time: {
              current: "--:--:--",
              best: "--:--:--",
              total: "--:--:--",
            },
          }}
        />
      </div>
    </div>
  );
};
