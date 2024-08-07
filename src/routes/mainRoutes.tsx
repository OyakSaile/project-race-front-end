import { useState } from "react";
import { HashRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { RoutesPublic } from "../Router";
import { Hud } from "../components/Hud";
import { Speedometer } from "../components/Speedometer";
import { UseLanguageProvider } from "../hooks/useLanguage";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { UseRaceProvider } from "../hooks/useRace";

export const MainRoutes = () => {
  const [isSpeedOmeterVisible, setSpeedOmeterVisible] = useState(true);
  const [mph, setMph] = useState("890");
  const [gear, setGear] = useState(0);
  const [quilometragem, setQuilometragem] = useState("MPH");

  useNuiEvent("is_player_in_vehicle", (data) => {
    setSpeedOmeterVisible(data);
  });

  useNuiEvent("speedometer", (data) => {
    setMph(data.speed);
    setQuilometragem(data.quilometragem);
    setGear(data.gear);
  });

  return (
    <HashRouter>
      <UseLanguageProvider>
        <UseRaceProvider>
          <div className="h-screen w-full relative bg-none">
            <Hud />
            <RoutesPublic />

            <div className="absolute bottom-6 right-[40px] ">
              {isSpeedOmeterVisible && (
                <Speedometer
                  gear={gear}
                  mph={mph}
                  quilometragem={quilometragem}
                />
              )}
            </div>
          </div>
        </UseRaceProvider>
      </UseLanguageProvider>
    </HashRouter>
  );
};
