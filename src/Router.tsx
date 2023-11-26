import { Route, Routes, useNavigate } from "react-router-dom";
import { useNuiEvent } from "./hooks/useNuiEvent";
import { FirstLogin } from "./pages/firstLogin";
import { Home } from "./pages/home";
import { LanguageSelect } from "./pages/languageSelect";
import { Race } from "./pages/race";
import { RaceCountDown } from "./pages/race/countdown";
import { Settings } from "./pages/settings";
import { RaceCreate } from "./pages/race/create";
import { ChooseName } from "./pages/choose-name";
import { Lobby } from "./pages/lobby";
import { SelectRacePage } from "./pages/lobby/pages/select-race";
import { SelectRace } from "./pages/lobby/pages/select-race/SelectRace";
import { RaceLeaderboard } from "./pages/race/leadearboard";

export const RoutesPublic = () => {
  const navigate = useNavigate();

  useNuiEvent("open-screen", (data) => {
    if (data === "/") {
      navigate("/");
    }

    navigate(`/${data}`);
  });

  const routes = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/language-select",
      component: <LanguageSelect />,
    },
    {
      path: "/first-login",
      component: <FirstLogin />,
    },
    {
      path: "/race",
      component: <Race />,
    },
    {
      path: "/race/countdown",
      component: <RaceCountDown />,
    },
    {
      path: "/race/create",
      component: <RaceCreate />,
    },
    {
      path: "race/leadearboard",
      component: <RaceLeaderboard />,
    },
    {
      path: "/settings",
      component: <Settings />,
    },
    {
      path: "/choose-name",
      component: <ChooseName />,
    },
    {
      path: "/lobby",
      component: <Lobby />,
    },
    {
      path: "lobby/select-race",
      component: <SelectRace />,
    },
    {
      path: "lobby/select-race",
      component: <SelectRace />,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
