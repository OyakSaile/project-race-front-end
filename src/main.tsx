import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainRoutes } from "./routes/mainRoutes";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <MainRoutes />
    </NextUIProvider>
  </React.StrictMode>
);
