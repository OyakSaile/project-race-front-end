import { HashRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { RoutesPublic } from "../Router";
import { Hud } from "../components/Hud";
import { UseLanguageProvider } from "../hooks/useLanguage";
import { UseRaceProvider } from "../hooks/useRace";
import { Speedometer } from "../components/Speedometer";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { useState } from "react";

export const MainRoutes = () => {
  const [isSpeedOmeterVisible, setSpeedOmeterVisible] = useState(false);
  const [mph, setMph] = useState("");

  useNuiEvent("is_player_in_vehicle", (data) => {
    setSpeedOmeterVisible(data);
  });

  useNuiEvent("speedometer", (data) => {
    setMph(data);
  });

  return (
    <HashRouter>
      <UseLanguageProvider>
        <UseRaceProvider>
          <div className="h-screen w-full relative bg-none">
            <Hud />
            <RoutesPublic />

            <div className="absolute font-bold text-3xl text-white  bottom-8 right-10 ">
              {isSpeedOmeterVisible && <Speedometer mph={mph} />}
            </div>
          </div>
        </UseRaceProvider>
      </UseLanguageProvider>
    </HashRouter>
  );
};
