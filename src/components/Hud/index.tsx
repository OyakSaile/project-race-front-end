import { ToastContainer, toast } from "react-toastify";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import { debugData } from "../../utils/debugData";
import { Speedometer } from "../Speedometer";
import { isMotionComponent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import matchFound from "../../audios/matchfound.mp3";
import useSound from "use-sound";
import { Chat } from "../Chat";

export const Hud = () => {
  const [play] = useSound(matchFound);

  useNuiEvent("notify", (data) => {
    toast(data.message, {
      autoClose: data.duration,
    });
  });

  useNuiEvent("matchFound", (data) => {
    if (data) {
      play();
    }
  });

  return (
    <div>
      <ToastContainer
        theme="dark"
        pauseOnFocusLoss={false}
        hideProgressBar={true}
        position="top-right"
      />

      {/* <div className="absolute top-12 left-12">
        <Chat />
      </div> */}
    </div>
  );
};
