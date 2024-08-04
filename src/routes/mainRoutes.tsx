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
  const [isSpeedOmeterVisible, setSpeedOmeterVisible] = useState(false);
  const [mph, setMph] = useState("");
  const [rpm, setRPM] = useState(0);
  const [quilometragem, setQuilometragem] = useState("");

  useNuiEvent("is_player_in_vehicle", (data) => {
    setSpeedOmeterVisible(data);
  });

  useNuiEvent("speedometer", (data) => {
    setMph(data.speed);
    setQuilometragem(data.quilometragem);
    setRPM(data.rpm);
  });

  return (
    <HashRouter>
      <UseLanguageProvider>
        <UseRaceProvider>
          <div className="h-screen w-full relative bg-none">
            <Hud />
            <RoutesPublic />

            <div className="absolute font-bold text-3xl text-white  bottom-6 left-[330px] ">
              {isSpeedOmeterVisible && (
                <Speedometer
                  rpm={rpm}
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
