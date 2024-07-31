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
  const [mph, setMph] = useState("240");
  const [quilometragem, setQuilometragem] = useState("");

  useNuiEvent("is_player_in_vehicle", (data) => {
    setSpeedOmeterVisible(data);
  });

  useNuiEvent("speedometer", (data) => {
    setMph(data.speed);
    setQuilometragem(data.quilometragem);
  });

  return (
    <HashRouter>
      <UseLanguageProvider>
        <UseRaceProvider>
          <div className="h-screen w-full relative bg-none">
            <Hud />
            <RoutesPublic />

            <div className="absolute font-bold text-3xl text-white  bottom-32 right-10 ">
              {isSpeedOmeterVisible && (
                <Speedometer mph={mph} quilometragem={quilometragem} />
              )}
            </div>
          </div>
        </UseRaceProvider>
      </UseLanguageProvider>
    </HashRouter>
  );
};
