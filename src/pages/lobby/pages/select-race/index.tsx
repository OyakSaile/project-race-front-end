import { RainbowCloud, Trophy } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { SelectRace } from "./SelectRace";
import { nuiApi } from "@/services/nuiApi";

export const SelectRacePage: React.FC = () => {
  return (
    <div className="w-full h-screen ">
      <SelectRace />
    </div>
  );
};
